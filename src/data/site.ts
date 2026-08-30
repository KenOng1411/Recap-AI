import type { Locale } from "@/i18n/config";

// Set via NEXT_PUBLIC_CONTACT_EMAIL (see .env.example). Baked in at build time
// since this is a static export — set it before running `npm run build`.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@toolzi.example.com";

export const siteConfig = {
  name: "Toolzi",
  // TODO: switch to the real domain once it's pointed at hosting.
  url: "https://toolzi.example.com",
  ogImage: "/og-image.png",
  author: {
    // TODO: fill in your real name once you have the About page content ready.
    name: "The Toolzi Team",
    role: "AI tool reviewer",
  },
  social: {
    // TODO: fill in your real social links.
    twitter: "#",
    youtube: "#",
    tiktok: "#",
    facebook: "#",
  },
  tagline: {
    en: "Honest, no-nonsense AI tool reviews",
    fr: "Des avis honnêtes et sans détour sur les outils IA",
  } satisfies Record<Locale, string>,
  description: {
    en: "Toolzi reviews and compares the hottest AI tools — chatbots, image and video generation, productivity — so you can pick the right one in 5 minutes.",
    fr: "Toolzi teste et compare les outils IA les plus en vue — chatbots, génération d'image et de vidéo, productivité — pour choisir le bon en 5 minutes.",
  } satisfies Record<Locale, string>,
  ogLocale: {
    en: "en_US",
    fr: "fr_FR",
  } satisfies Record<Locale, string>,
};

export const NAV_PATHS = [
  { href: "/tools", key: "tools" },
  { href: "/best-of", key: "bestOf" },
  { href: "/deals", key: "deals" },
  { href: "/about", key: "about" },
] as const;

// Trust/legal links — shown in the footer on every page, not in the main nav (keeps it uncluttered).
export const TRUST_NAV_PATHS = [
  { href: "/review-methodology", key: "methodology" },
  { href: "/partner-with-us", key: "partner" },
  { href: "/disclosure", key: "disclosure" },
  { href: "/privacy-policy", key: "privacy" },
  { href: "/terms", key: "terms" },
] as const;
