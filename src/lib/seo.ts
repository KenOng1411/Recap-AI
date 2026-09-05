import { locales, type Locale } from "@/i18n/config";

// Every route must call this in its own generateMetadata — Next.js does NOT
// deep-merge `alternates` from a parent layout, so any page that omits this
// silently inherits the root layout's canonical (the locale homepage),
// telling Google every page is a duplicate of "/". Pass "" for the locale
// homepage itself, or a leading-slash subpath otherwise (e.g. "/tools/chatgpt").
export function buildAlternates(locale: Locale, subpath: string) {
  const suffix = subpath === "" ? "/" : subpath;
  return {
    canonical: `/${locale}${suffix}`,
    languages: Object.fromEntries(locales.map((l) => [l, `/${l}${suffix}`])),
  };
}
