import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ToolIcon } from "./ToolIcon";
import { ToolLogo } from "./ToolLogo";
import type { NewsItem } from "@/data/news";
import type { Locale } from "@/i18n/config";

const dateLocale: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-PT",
};

interface NewsCardProps {
  item: NewsItem;
  locale: Locale;
  readMoreLabel: string; // pre-formatted, e.g. "Read at TechCrunch"
}

export function NewsCard({ item, locale, readMoreLabel }: NewsCardProps) {
  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_-8px_var(--color-accent-shadow)]"
    >
      {/* Banner — real company logo on an original gradient backdrop, not the
          source article's own photo/illustration. */}
      <div
        className="relative flex h-36 items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, var(--color-accent-soft), var(--color-surface-muted) 70%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl"
        />
        {item.companyDomain ? (
          <ToolIcon name={item.sourceName} website={`https://${item.companyDomain}`} size={64} />
        ) : (
          <ToolLogo name={item.sourceName} size={64} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <span className="inline-flex w-fit items-center rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {item.sourceName}
        </span>
        <h3 className="line-clamp-2 text-base font-semibold text-foreground group-hover:text-accent">
          {item.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>
        <div className="mt-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <time dateTime={item.publishedAt}>
            {new Date(item.publishedAt).toLocaleDateString(dateLocale[locale], {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="inline-flex items-center gap-1 font-semibold text-accent">
            {readMoreLabel}
            <ArrowRight size={12} weight="bold" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}

