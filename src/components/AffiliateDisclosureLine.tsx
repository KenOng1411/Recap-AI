import { Info } from "@phosphor-icons/react/dist/ssr";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

// Shown once, right above the affiliate CTA(s) in a review article.
export function AffiliateDisclosureLine({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
      <Info size={14} weight="bold" className="mt-0.5 shrink-0" aria-hidden="true" />
      <span>{dict.affiliate.articleDisclosure}</span>
    </p>
  );
}
