export const locales = ["en", "fr", "es", "de", "it", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Content that isn't translated into a locale yet (tool reviews, legal docs)
// falls back to this locale rather than rendering blank.
export const fallbackLocale: Locale = "en";

export function withLocaleFallback<T>(
  content: Partial<Record<Locale, T>>,
  locale: Locale
): T {
  return (content[locale] ?? content[fallbackLocale]) as T;
}
