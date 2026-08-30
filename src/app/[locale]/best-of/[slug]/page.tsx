import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaretLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { locales, isLocale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { roundups, getRoundupBySlug } from "@/data/roundups";
import { getToolBySlug } from "@/data/tools";
import { ToolLogo } from "@/components/ToolLogo";
import { StarRating } from "@/components/StarRating";

export function generateStaticParams() {
  return locales.flatMap((locale) => roundups.map((roundup) => ({ locale, slug: roundup.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/best-of/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const roundup = getRoundupBySlug(slug);
  if (!roundup) return {};
  const content = roundup.content[locale];

  return {
    title: content.title,
    description: content.description,
    openGraph: { title: content.title, description: content.description },
  };
}

const dateLocale: Record<string, string> = { en: "en-US", fr: "fr-FR" };

export default async function RoundupPage(props: PageProps<"/[locale]/best-of/[slug]">) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();
  const roundup = getRoundupBySlug(slug);
  if (!roundup) notFound();

  const dict = getDictionary(locale);
  const content = roundup.content[locale];

  const items = roundup.items
    .map((item) => ({ item, tool: getToolBySlug(item.slug) }))
    .filter((entry): entry is { item: typeof entry.item; tool: NonNullable<typeof entry.tool> } =>
      Boolean(entry.tool)
    );

  return (
    <div className="container-page max-w-3xl py-12">
      <Link
        href={`/${locale}/best-of`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
      >
        <CaretLeft size={16} weight="bold" aria-hidden="true" />
        {dict.bestOfPost.back}
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {content.title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{content.description}</p>
      <p className="mt-2 text-xs text-muted-foreground">
        {t(dict.bestOfIndex.updated, {
          date: new Date(roundup.updatedAt).toLocaleDateString(dateLocale[locale]),
        })}
      </p>

      <ol className="mt-10 flex flex-col gap-5">
        {items.map(({ item, tool }, index) => (
          <li key={tool.slug} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                {index + 1}
              </span>
              <ToolLogo name={tool.name} size={44} />
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Link
                    href={`/${locale}/tools/${tool.slug}`}
                    className="text-lg font-semibold text-foreground hover:text-accent"
                  >
                    {tool.name}
                  </Link>
                  <StarRating rating={tool.rating} size={14} locale={locale} />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.blurb[locale]}
                </p>
                <Link
                  href={`/${locale}/tools/${tool.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  {dict.toolPage.fullReview} <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
