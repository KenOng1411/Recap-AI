import { ArrowSquareOut, Info } from "@phosphor-icons/react/dist/ssr";
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
    <div className="flex flex-col gap-2.5">
      <a
        href={affiliateUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {t(dict.toolPage.visit, { name: toolName })}
        <ArrowSquareOut size={18} weight="bold" aria-hidden="true" />
      </a>
      <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
        <Info size={14} weight="bold" className="mt-0.5 shrink-0" aria-hidden="true" />
        <span>{dict.affiliate.disclosure}</span>
      </p>
    </div>
  );
}
