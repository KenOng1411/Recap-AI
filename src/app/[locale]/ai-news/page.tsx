import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { isLocale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { newsItems } from "@/data/news";
import { getToolBySlug } from "@/data/tools";
import { ToolIcon } from "@/components/ToolIcon";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ai-news">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.news.title, description: dict.news.subtitle };
}

const dateLocale: Record<string, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-PT",
};

export default async function AiNewsPage({ params }: PageProps<"/[locale]/ai-news">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const sorted = [...newsItems].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.news.title}</h1>
      <p className="mt-2 text-muted-foreground">{dict.news.subtitle}</p>

      <ol className="mt-10 flex flex-col gap-6">
        {sorted.map((item) => {
          const relatedTools = (item.relatedToolSlugs ?? [])
            .map((slug) => getToolBySlug(slug))
            .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

          return (
            <li key={item.slug} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
              {item.companyDomain && (
                <ToolIcon
                  name={item.sourceName}
                  website={`https://${item.companyDomain}`}
                  size={44}
                />
              )}
              <div className="flex-1">
                <time
                  dateTime={item.publishedAt}
                  className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {new Date(item.publishedAt).toLocaleDateString(dateLocale[locale] ?? "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-1.5 text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.summary}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    {t(dict.news.readMore, { source: item.sourceName })}
                    <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                  </a>

                  {relatedTools.length > 0 && (
                    <span className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      {dict.news.relatedTools}
                      {relatedTools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={`/${locale}/tools/${tool.slug}`}
                          className="font-medium text-foreground hover:text-accent"
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
