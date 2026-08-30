import type { Locale } from "@/i18n/config";

export type CategoryKey =
  | "chatbot"
  | "image"
  | "video"
  | "audio"
  | "writing"
  | "productivity"
  | "coding"
  | "search"
  | "design";

export const categoryLabels: Record<CategoryKey, Record<Locale, string>> = {
  chatbot: {
    en: "Chatbots & AI Assistants",
    fr: "Chatbots & assistants IA",
    es: "Chatbots y asistentes IA",
    de: "Chatbots & KI-Assistenten",
    it: "Chatbot e assistenti IA",
    pt: "Chatbots e assistentes de IA",
  },
  image: {
    en: "AI Image Generation",
    fr: "Génération d'images IA",
    es: "Generación de imágenes IA",
    de: "KI-Bildgenerierung",
    it: "Generazione di immagini IA",
    pt: "Geração de imagens com IA",
  },
  video: {
    en: "AI Video Generation",
    fr: "Génération de vidéos IA",
    es: "Generación de vídeo IA",
    de: "KI-Videogenerierung",
    it: "Generazione di video IA",
    pt: "Geração de vídeo com IA",
  },
  audio: {
    en: "AI Audio & Voice",
    fr: "Audio & voix IA",
    es: "Audio y voz IA",
    de: "KI-Audio & Stimme",
    it: "Audio e voce IA",
    pt: "Áudio e voz com IA",
  },
  writing: {
    en: "AI Writing",
    fr: "Rédaction IA",
    es: "Redacción IA",
    de: "KI-Textgenerierung",
    it: "Scrittura IA",
    pt: "Redação com IA",
  },
  productivity: {
    en: "Productivity",
    fr: "Productivité",
    es: "Productividad",
    de: "Produktivität",
    it: "Produttività",
    pt: "Produtividade",
  },
  coding: {
    en: "AI Coding",
    fr: "Code IA",
    es: "Programación IA",
    de: "KI-Coding",
    it: "Programmazione IA",
    pt: "Programação com IA",
  },
  search: {
    en: "AI Search & Research",
    fr: "Recherche IA",
    es: "Búsqueda e investigación IA",
    de: "KI-Suche & Recherche",
    it: "Ricerca IA",
    pt: "Busca e pesquisa com IA",
  },
  design: {
    en: "AI Design & Presentations",
    fr: "Design & présentations IA",
    es: "Diseño y presentaciones IA",
    de: "KI-Design & Präsentationen",
    it: "Design e presentazioni IA",
    pt: "Design e apresentações com IA",
  },
};

export function getCategoryLabel(key: CategoryKey, locale: Locale) {
  return categoryLabels[key][locale];
}
