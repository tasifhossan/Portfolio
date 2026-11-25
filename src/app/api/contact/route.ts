import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please provide a valid email address").max(100, "Email is too long"),
  topic: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
  // Honeypot field: Must remain empty. Spambots automatically populate this.
  website_url: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000); // Max 5 submissions per 10 mins
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please wait a few minutes before sending another message.",
        },
        { status: 429 }
      );
    }

    // 2. Body parsing and Zod Validation
    const rawBody = await req.json();
    const parseResult = contactSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors).flat()[0] || "Invalid submission parameters";
      return NextResponse.json({ error: firstErrorMessage, errors: fieldErrors }, { status: 400 });
    }

    const { name, email, topic, message, website_url } = parseResult.data;

    // 3. Honeypot check
    // If the hidden website_url field is filled, silently succeed without sending email.
    if (website_url && website_url.length > 0) {
      console.warn(`[SPAM BLOCKED] Honeypot field triggered from IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Message received successfully.",
      });
    }

    // 4. Send notification email via Resend
    const resendApiKey = process.env.RESEND_API_KEY?.replace(/^["']|["']$/g, "").trim();
    const toEmail =
      process.env.CONTACT_TO_EMAIL?.replace(/^["']|["']$/g, "").trim() || "tasifhossan01@gmail.com";

    if (!resendApiKey) {
      console.error("[RESEND CONFIG ERROR] RESEND_API_KEY is missing from environment variables.");
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY is not configured in Vercel environment variables. Please add RESEND_API_KEY to your project settings.",
        },
        { status: 500 }
      );
    }

    try {
      const resend = new Resend(resendApiKey);
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: toEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry [${topic || "General"}] from ${name}`,
        html: `
          <h2>New Portfolio Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Topic:</strong> ${topic || "General Inquiry"}</p>
          <p><strong>Sender Email:</strong> ${email}</p>
          <p><strong>IP:</strong> ${ip}</p>
          <p><strong>Date:</strong> ${new Date().toISOString()}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <blockquote style="background:#f4f4f5;padding:12px;border-left:4px solid #1F4BFF;margin:12px 0;font-family:sans-serif;line-height:1.5;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
        `,
      });

      if (error) {
        console.error("[RESEND DELIVERY ERROR]", error);
        return NextResponse.json(
          {
            error: error.message || "Email delivery failed via Resend.",
            details: error,
          },
          { status: 400 }
        );
      }

      console.info(`[RESEND SUCCESS] Dispatched email ID: ${data?.id} to ${toEmail}`);

      return NextResponse.json({
        success: true,
        message: "Thank you, Tasif has received your message and will get back to you shortly!",
        details: {
          id: data?.id,
          emailSent: true,
        },
      });
    } catch (emailError) {
      console.error("[RESEND EXCEPTION]", emailError);
      return NextResponse.json(
        {
          error:
            emailError instanceof Error
              ? emailError.message
              : "Failed to send email via Resend.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[CONTACT API ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message. Please try again later." },
      { status: 500 }
    );
  }
}
