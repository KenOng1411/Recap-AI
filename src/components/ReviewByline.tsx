import Link from "next/link";
import { ToolLogo } from "./ToolLogo";
import { getDictionary, t } from "@/i18n/dictionaries";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";

const dateLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR" };

interface ReviewBylineProps {
  locale: Locale;
  lastUpdated: string; // ISO date
}

// TODO: once you have a real headshot, swap the ToolLogo monogram below for an
// <Image src="/author.jpg" .../> — everything else here stays the same.
export function ReviewByline({ locale, lastUpdated }: ReviewBylineProps) {
  const dict = getDictionary(locale);
  const formattedDate = new Date(lastUpdated).toLocaleDateString(dateLocale[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      <Link href={`/${locale}/about`} className="flex items-center gap-2 hover:text-accent">
        <ToolLogo name={siteConfig.author.name} size={28} />
        <span>
          {dict.review.by} <span className="font-medium text-foreground">{siteConfig.author.name}</span>
        </span>
      </Link>
      <span aria-hidden="true" className="text-border">
        ·
      </span>
      <time dateTime={lastUpdated}>{t(dict.review.lastUpdated, { date: formattedDate })}</time>
    </div>
  );
}
