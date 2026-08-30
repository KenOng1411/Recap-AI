import type { Locale } from "@/i18n/config";

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
