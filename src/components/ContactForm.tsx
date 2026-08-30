"use client";

import { useState, type FormEvent } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { getDictionary } from "@/i18n/dictionaries";
import { CONTACT_EMAIL } from "@/data/site";
import type { Locale } from "@/i18n/config";

// No backend on a static-exported site — submitting opens the visitor's email
// client with the message pre-filled, addressed to CONTACT_EMAIL. Honest and
// functional without needing a third-party form service. Swap this handler for
// a real form backend (e.g. Formspree) later if you want in-app submission.
export function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Partnership inquiry${company ? ` — ${company}` : ""}`;
    const bodyLines = [
      message,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            {dict.contactForm.name}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            {dict.contactForm.email}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
          {dict.contactForm.company}
        </label>
        <input
          id="contact-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          {dict.contactForm.message}
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-y rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] transition-all hover:scale-[1.03] hover:bg-accent-hover active:scale-[0.97]"
        >
          {dict.contactForm.submit}
          <PaperPlaneTilt size={16} weight="bold" aria-hidden="true" />
        </button>
        <p className="text-xs text-muted-foreground">{dict.contactForm.note}</p>
      </div>
    </form>
  );
}
