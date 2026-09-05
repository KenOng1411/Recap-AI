import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaretLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { newsItems } from "@/data/news";
import { getToolBySlug } from "@/data/tools";
import { buildAlternates } from "@/lib/seo";
import { topicIcons, getTopicLabel } from "@/data/newsTopics";
import { ToolIcon } from "@/components/ToolIcon";
import { ToolLogo } from "@/components/ToolLogo";

export function generateStaticParams() {
  return locales.flatMap((locale) => newsItems.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ai-news/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: buildAlternates(locale, `/ai-news/${slug}`),
    openGraph: { title: item.title, description: item.summary },
  };
}

const dateLocale: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-PT",
};

export default async function NewsDetailPage({
  params,
}: PageProps<"/[locale]/ai-news/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  const dict = getDictionary(locale);
  const TopicIcon = topicIcons[item.topic];
  const relatedTools = (item.relatedToolSlugs ?? [])
    .map((s) => getToolBySlug(s))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  return (
    <div className="container-page max-w-3xl py-12">
      <Link
        href={`/${locale}/ai-news`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
      >
        <CaretLeft size={16} weight="bold" aria-hidden="true" />
        {dict.news.backToNews}
      </Link>

      {/* Hero — an original AI-generated illustration for this specific
          story, not the source article's own photo. */}
      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-surface-muted">
        <Image
          src={`/news/${item.slug}.jpg`}
          alt={item.title}
          fill
          priority
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        {item.companyDomain ? (
          <ToolIcon name={item.sourceName} website={`https://${item.companyDomain}`} size={48} />
        ) : (
          <ToolLogo name={item.sourceName} size={48} />
        )}
        <div className="flex flex-col gap-1.5">
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
            <TopicIcon size={12} weight="bold" aria-hidden="true" />
            {getTopicLabel(item.topic, locale)}
          </span>
          <time dateTime={item.publishedAt} className="text-xs text-muted-foreground">
            {new Date(item.publishedAt).toLocaleDateString(dateLocale[locale], {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>

      <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
        {item.title}
      </h1>

      <div className="mt-8 flex flex-col gap-4">
        {item.body.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {relatedTools.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
          {dict.news.relatedTools}
          {relatedTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${locale}/tools/${tool.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-medium text-foreground hover:border-accent hover:text-accent"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface-muted p-5 text-sm text-muted-foreground">
        <p>{t(dict.news.sourceAttribution, { source: item.sourceName })}</p>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-hover"
        >
          {dict.news.viewSource}
          <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
