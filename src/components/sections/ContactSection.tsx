"use client";

import { useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [intent, setIntent] = useState<string>("hiring");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeline: "",
    message: "",
  });

  const shouldReduceMotion = useReducedMotion();

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedItem(id);
      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", timeline: "", message: "" });
      }, 4500);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="border-b border-hairline bg-paper py-14 md:py-20 px-4 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-10">
        {/* Section Header */}
        <Reveal direction="left" distance={12} duration={0.4}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-4 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block mb-1">
                06 / GET IN TOUCH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
                Let&apos;s build something together.
              </h2>
            </div>
            <p className="font-mono text-[10px] md:text-xs text-muted">
              INBOX ACTIVE // ENCRYPTED COMMS
            </p>
          </div>
        </Reveal>

        {/* Split 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column: Reachout Info & Quick-Copy Cards (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Availability Badge */}
            <Reveal delay={0.06}>
              <div className="bg-surface-pure border border-hairline p-4 md:p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-wider">
                    [CALENDAR CAPACITY]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="font-display text-base md:text-lg font-bold text-charcoal">
                  Currently booking Q2/Q3 2025 projects
                </p>
                <div className="p-2 bg-paper border border-hairline font-mono text-[10px] md:text-[11px] text-muted flex items-center gap-1.5">
                  <span>⚡</span>
                  <span>Typical response time: Under 4 hours</span>
                </div>
              </div>
            </Reveal>

            {/* 3 Quick-Copy Cards (Email, Phone, WhatsApp) */}
            <div className="space-y-2">
              {/* Email Card */}
              <Reveal delay={0.12}>
                <div className="bg-surface-pure border border-hairline p-3 md:p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[8px] md:text-[9px] text-muted uppercase block">
                      ELECTRONIC MAIL
                    </span>
                    <span className="font-mono text-xs font-bold text-charcoal">
                      tasifhossan@gmail.com
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("tasifhossan@gmail.com", "email")}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 border font-mono text-[10px] transition-all cursor-pointer ${
                      copiedItem === "email"
                        ? "border-cobalt text-cobalt font-bold bg-cobalt/5 scale-105"
                        : "border-hairline text-charcoal hover:border-cobalt hover:text-cobalt"
                    }`}
                  >
                    {copiedItem === "email" ? (
                      <>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current stroke-2 fill-none" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>COPIED!</span>
                      </>
                    ) : (
                      "COPY"
                    )}
                  </button>
                </div>
              </Reveal>

              {/* Phone Card */}
              <Reveal delay={0.18}>
                <div className="bg-surface-pure border border-hairline p-3 md:p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[8px] md:text-[9px] text-muted uppercase block">
                      DIRECT LINE
                    </span>
                    <span className="font-mono text-xs font-bold text-charcoal">
                      +880 1800-000000
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("+880 1800-000000", "phone")}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 border font-mono text-[10px] transition-all cursor-pointer ${
                      copiedItem === "phone"
                        ? "border-cobalt text-cobalt font-bold bg-cobalt/5 scale-105"
                        : "border-hairline text-charcoal hover:border-cobalt hover:text-cobalt"
                    }`}
                  >
                    {copiedItem === "phone" ? (
                      <>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current stroke-2 fill-none" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>COPIED!</span>
                      </>
                    ) : (
                      "COPY"
                    )}
                  </button>
                </div>
              </Reveal>

              {/* WhatsApp Card */}
              <Reveal delay={0.24}>
                <div className="bg-surface-pure border border-hairline p-3 md:p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[8px] md:text-[9px] text-muted uppercase block">
                      WHATSAPP ENCRYPTED
                    </span>
                    <span className="font-mono text-xs font-bold text-charcoal">
                      wa.me/tasifhossan
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("https://wa.me/tasifhossan", "whatsapp")}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 border font-mono text-[10px] transition-all cursor-pointer ${
                      copiedItem === "whatsapp"
                        ? "border-cobalt text-cobalt font-bold bg-cobalt/5 scale-105"
                        : "border-hairline text-charcoal hover:border-cobalt hover:text-cobalt"
                    }`}
                  >
                    {copiedItem === "whatsapp" ? (
                      <>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current stroke-2 fill-none" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>COPIED!</span>
                      </>
                    ) : (
                      "COPY"
                    )}
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Social Icon Links Tiles */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-1">
                <a
                  className="p-2 sm:p-2.5 bg-surface-pure border border-hairline text-center font-mono text-[9px] sm:text-[10px] text-charcoal hover:border-cobalt hover:text-cobalt transition-colors"
                  href="https://github.com/tasifhossan"
                  rel="noreferrer"
                  target="_blank"
                >
                  GITHUB
                </a>
                <a
                  className="p-2 sm:p-2.5 bg-surface-pure border border-hairline text-center font-mono text-[9px] sm:text-[10px] text-charcoal hover:border-cobalt hover:text-cobalt transition-colors"
                  href="https://linkedin.com/in/tasifhossan"
                  rel="noreferrer"
                  target="_blank"
                >
                  LINKEDIN
                </a>
                <a
                  className="p-2 sm:p-2.5 bg-surface-pure border border-hairline text-center font-mono text-[9px] sm:text-[10px] text-charcoal hover:border-cobalt hover:text-cobalt transition-colors"
                  href="https://x.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  X [TWTR]
                </a>
                <a
                  className="p-2 sm:p-2.5 bg-surface-pure border border-hairline text-center font-mono text-[9px] sm:text-[10px] text-charcoal hover:border-cobalt hover:text-cobalt transition-colors"
                  href="https://facebook.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  FB [COMM]
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Dispatch Form (Cols 6-12) */}
          <div className="lg:col-span-7 bg-surface-pure border border-hairline p-5 md:p-8 space-y-5 md:space-y-6">
            <Reveal delay={0.1}>
              <div className="space-y-1">
                <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase">
                  [TRANSMISSION FORM]
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-charcoal">
                  Send a Direct Dispatch
                </h3>
              </div>
            </Reveal>

            {/* Topic Selection Chips with Sliding Highlight */}
            <div className="space-y-1.5">
              <label className="block font-mono text-[9px] md:text-[10px] text-muted uppercase">
                SELECT INTENT
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  { id: "hiring", label: "Hiring [Full-Time]" },
                  { id: "freelance", label: "Project / Freelance" },
                  { id: "collab", label: "Technical Collaboration" },
                ].map((item) => {
                  const isSelected = intent === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIntent(item.id)}
                      className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 border font-mono text-[11px] sm:text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? "text-white border-cobalt bg-cobalt font-semibold"
                          : "bg-paper text-charcoal border-hairline hover:border-cobalt"
                      }`}
                    >
                      {isSelected && !shouldReduceMotion && (
                        <m.div
                          layoutId="intentHighlight"
                          className="absolute inset-0 bg-cobalt -z-10"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dispatch Input Fields with Animated States */}
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <m.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 md:p-8 bg-paper border border-hairline text-center space-y-2.5"
                >
                  <div className="w-10 h-10 mx-auto bg-cobalt text-white flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                  <p className="font-display text-base sm:text-lg font-bold text-charcoal">
                    Transmission Dispatched Successfully
                  </p>
                  <p className="font-mono text-xs text-muted max-w-sm mx-auto">
                    Tasif will review your brief and follow up via email within 4 hours.
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 md:space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1">
                      <label
                        className="block font-mono text-[9px] md:text-[10px] text-muted uppercase"
                        htmlFor="name"
                      >
                        YOUR NAME *
                      </label>
                      <input
                        className="w-full bg-paper border border-hairline px-3 md:px-3.5 py-2 md:py-2.5 font-body text-xs md:text-sm text-charcoal focus:border-cobalt focus:ring-0 focus:outline-none transition-colors"
                        id="name"
                        placeholder="Alex Henderson"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        className="block font-mono text-[9px] md:text-[10px] text-muted uppercase"
                        htmlFor="email"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        className="w-full bg-paper border border-hairline px-3 md:px-3.5 py-2 md:py-2.5 font-body text-xs md:text-sm text-charcoal focus:border-cobalt focus:ring-0 focus:outline-none transition-colors"
                        id="email"
                        placeholder="alex@domain.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block font-mono text-[9px] md:text-[10px] text-muted uppercase"
                      htmlFor="timeline"
                    >
                      ESTIMATED TIMELINE / ROLE START
                    </label>
                    <input
                      className="w-full bg-paper border border-hairline px-3 md:px-3.5 py-2 md:py-2.5 font-body text-xs md:text-sm text-charcoal focus:border-cobalt focus:ring-0 focus:outline-none transition-colors"
                      id="timeline"
                      placeholder="Immediate / Q2-Q3 2025"
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block font-mono text-[9px] md:text-[10px] text-muted uppercase"
                      htmlFor="message"
                    >
                      PROJECT BRIEF / SCOPE OF WORK *
                    </label>
                    <textarea
                      className="w-full bg-paper border border-hairline px-3 md:px-3.5 py-2 md:py-2.5 font-body text-xs md:text-sm text-charcoal focus:border-cobalt focus:ring-0 focus:outline-none resize-none transition-colors"
                      id="message"
                      placeholder="Describe system requirements, engineering stack, or problem statement..."
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="w-full py-3 md:py-3.5 bg-cobalt text-white font-display font-semibold text-xs md:text-sm tracking-tight hover:bg-cobalt-dark dark:hover:bg-cobalt-dark transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 active:scale-[0.99]"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Dispatch...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </m.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
