import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingSocialRail } from "@/components/FloatingSocialRail";
import { MotionProvider } from "@/components/motion/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tasif-dev.vercel.app"),
  title: "Mohammad Tasif Hossan (Tasif) // Full-Stack Developer & Systems Architect",
  description:
    "Full-Stack Developer & Systems Architect building reliable, high-throughput backends and clean, mathematically precise web applications.",
  keywords: [
    "Mohammad Tasif Hossan",
    "Tasif",
    "Full-Stack Developer",
    "Systems Architect",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Next.js",
    "Express.js",
    "Prisma",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-paper text-charcoal antialiased selection:bg-cobalt selection:text-white font-body min-h-screen relative"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            {/* Floating Vertical Social Rail (Desktop) */}
            <FloatingSocialRail />

            {/* Sticky Architectural Navbar */}
            <Header />

            {/* Main Stage */}
            <main id="main-content">{children}</main>

            {/* Architectural Blueprint Footer */}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
