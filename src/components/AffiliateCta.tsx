import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { getDictionary, t } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

interface AffiliateCtaProps {
  toolName: string;
  affiliateUrl: string;
  locale: Locale;
}

export function AffiliateCta({ toolName, affiliateUrl, locale }: AffiliateCtaProps) {
  const dict = getDictionary(locale);

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] transition-all hover:scale-[1.03] hover:bg-accent-hover active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {t(dict.toolPage.visit, { name: toolName })}
      <ArrowSquareOut size={18} weight="bold" aria-hidden="true" />
    </a>
  );
}
