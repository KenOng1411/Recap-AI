import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { withLocaleFallback } from "@/i18n/config";
import { getToolBySlug } from "@/data/tools";
import type { Guide } from "@/data/guides";
import type { Locale } from "@/i18n/config";

const dateLocale: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-PT",
};

interface GuideCardProps {
  guide: Guide;
  locale: Locale;
  readMoreLabel: string;
}

export function GuideCard({ guide, locale, readMoreLabel }: GuideCardProps) {
  const content = withLocaleFallback(guide.content, locale);
  const tool = getToolBySlug(guide.toolSlug);

  return (
    <Link
      href={`/${locale}/guides/${guide.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_-8px_var(--color-accent-shadow)]"
    >
      {tool?.image && (
        <div className="relative aspect-video w-full overflow-hidden bg-surface-muted">
          <Image
            src={tool.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="line-clamp-2 text-base font-semibold text-foreground group-hover:text-accent">
          {content.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {content.metaDescription}
        </p>
        <div className="mt-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <time dateTime={guide.updatedAt}>
            {new Date(guide.updatedAt).toLocaleDateString(dateLocale[locale], {
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
