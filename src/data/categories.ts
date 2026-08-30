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
  chatbot: { en: "Chatbots & AI Assistants", fr: "Chatbots & assistants IA" },
  image: { en: "AI Image Generation", fr: "Génération d'images IA" },
  video: { en: "AI Video Generation", fr: "Génération de vidéos IA" },
  audio: { en: "AI Audio & Voice", fr: "Audio & voix IA" },
  writing: { en: "AI Writing", fr: "Rédaction IA" },
  productivity: { en: "Productivity", fr: "Productivité" },
  coding: { en: "AI Coding", fr: "Code IA" },
  search: { en: "AI Search & Research", fr: "Recherche IA" },
  design: { en: "AI Design & Presentations", fr: "Design & présentations IA" },
};

export function getCategoryLabel(key: CategoryKey, locale: Locale) {
  return categoryLabels[key][locale];
}
