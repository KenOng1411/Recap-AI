import type { Locale } from "@/i18n/config";

// Set via NEXT_PUBLIC_CONTACT_EMAIL (see .env.example). Baked in at build time
// since this is a static export — set it before running `npm run build`.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@recapai.example.com";

export const siteConfig = {
  name: "RecapAI",
  // TODO: switch to the real domain once it's pointed at hosting.
  url: "https://recapai.example.com",
  ogImage: "/og-image.png",
  author: {
    // TODO: fill in your real name once you have the About page content ready.
    name: "The RecapAI Team",
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
    es: "Reseñas honestas y directas de herramientas de IA",
    de: "Ehrliche, unkomplizierte KI-Tool-Bewertungen",
    it: "Recensioni oneste e dirette di strumenti IA",
    pt: "Análises honestas e diretas de ferramentas de IA",
  } satisfies Record<Locale, string>,
  description: {
    en: "RecapAI reviews and compares the hottest AI tools — chatbots, image and video generation, productivity — so you can pick the right one in 5 minutes.",
    fr: "RecapAI teste et compare les outils IA les plus en vue — chatbots, génération d'image et de vidéo, productivité — pour choisir le bon en 5 minutes.",
    es: "RecapAI reseña y compara las herramientas de IA más populares — chatbots, generación de imagen y vídeo, productividad — para que elijas la correcta en 5 minutos.",
    de: "RecapAI testet und vergleicht die gefragtesten KI-Tools — Chatbots, Bild- und Videogenerierung, Produktivität —, damit du in 5 Minuten das richtige findest.",
    it: "RecapAI recensisce e confronta gli strumenti IA più popolari — chatbot, generazione di immagini e video, produttività — per scegliere quello giusto in 5 minuti.",
    pt: "A RecapAI analisa e compara as ferramentas de IA mais populares — chatbots, geração de imagem e vídeo, produtividade — para você escolher a certa em 5 minutos.",
  } satisfies Record<Locale, string>,
  ogLocale: {
    en: "en_US",
    fr: "fr_FR",
    es: "es_ES",
    de: "de_DE",
    it: "it_IT",
    pt: "pt_PT",
  } satisfies Record<Locale, string>,
};

export const NAV_PATHS = [
  { href: "/tools", key: "tools" },
  { href: "/best-of", key: "bestOf" },
  { href: "/ai-news", key: "news" },
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
