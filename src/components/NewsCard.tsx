import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { topicIcons, getTopicLabel } from "@/data/newsTopics";
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
  readMoreLabel: string; // e.g. "Read article"
}

export function NewsCard({ item, locale, readMoreLabel }: NewsCardProps) {
  const TopicIcon = topicIcons[item.topic];

  return (
    <Link
      href={`/${locale}/ai-news/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_-8px_var(--color-accent-shadow)]"
    >
      {/* Banner — an original AI-generated illustration for this specific
          story (see data/news.ts), not the source article's own photo. */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface-muted">
        <Image
          src={`/news/${item.slug}.jpg`}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-accent shadow-sm backdrop-blur">
          <TopicIcon size={12} weight="bold" aria-hidden="true" />
          {getTopicLabel(item.topic, locale)}
        </span>
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
    </Link>
  );
}
