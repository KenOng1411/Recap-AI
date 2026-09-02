import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaretLeft, ArrowRight, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { locales, isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { roundups, getRoundupBySlug } from "@/data/roundups";
import { getToolBySlug } from "@/data/tools";
import { ToolIcon } from "@/components/ToolIcon";
import { StarRating } from "@/components/StarRating";
import { ReviewByline } from "@/components/ReviewByline";
import { AffiliateCta } from "@/components/AffiliateCta";
import { AffiliateDisclosureLine } from "@/components/AffiliateDisclosureLine";

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
  const content = withLocaleFallback(roundup.content, locale);

  return {
    title: content.title,
    description: content.description,
    openGraph: { title: content.title, description: content.description },
  };
}

export default async function RoundupPage(props: PageProps<"/[locale]/best-of/[slug]">) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();
  const roundup = getRoundupBySlug(slug);
  if (!roundup) notFound();

  const dict = getDictionary(locale);
  const content = withLocaleFallback(roundup.content, locale);

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

      <div className="mt-5 border-y border-border py-3">
        <ReviewByline locale={locale} lastUpdated={roundup.updatedAt} />
      </div>

      {/* Intro */}
      <div className="mt-8 flex flex-col gap-4">
        {content.intro.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Methodology callout */}
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-surface-muted p-5">
        <ShieldCheck size={20} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground">{dict.bestOfPost.methodologyTitle}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {dict.bestOfPost.methodologyBody}{" "}
            <Link href={`/${locale}/review-methodology`} className="font-medium text-accent hover:text-accent-hover">
              {dict.bestOfPost.methodologyLink}
            </Link>
          </p>
        </div>
      </div>

      {/* Jump-to nav */}
      <nav className="mt-8" aria-label={dict.bestOfPost.jumpTo}>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {dict.bestOfPost.jumpTo}
        </p>
        <ol className="mt-3 flex flex-col gap-1.5">
          {items.map(({ tool }, index) => (
            <li key={tool.slug}>
              <a
                href={`#${tool.slug}`}
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent"
              >
                <span className="text-muted-foreground">{index + 1}.</span> {tool.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Comparison table */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <th className="px-4 py-3">{dict.bestOfPost.rankLabel}</th>
              <th className="px-4 py-3">{dict.bestOfPost.toolLabel}</th>
              <th className="px-4 py-3">{dict.bestOfPost.bestForLabel}</th>
              <th className="px-4 py-3">{dict.bestOfPost.startingPrice}</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ item, tool }, index) => {
              const toolContent = withLocaleFallback(tool.content, locale);
              return (
                <tr key={tool.slug} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-muted-foreground">{index + 1}</td>
                  <td className="px-4 py-3">
                    <a href={`#${tool.slug}`} className="flex items-center gap-2 font-medium text-foreground hover:text-accent">
                      <ToolIcon name={tool.name} website={tool.website} size={24} />
                      {tool.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{withLocaleFallback(item.bestFor, locale)}</td>
                  <td className="px-4 py-3 text-muted-foreground">{toolContent.pricing}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Deep-dive sections */}
      <ol className="mt-10 flex flex-col gap-8">
        {items.map(({ item, tool }, index) => {
          const bodyParagraphs = withLocaleFallback(item.body, locale);
          return (
            <li key={tool.slug} id={tool.slug} className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <ToolIcon name={tool.name} website={tool.website} size={44} />
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
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {withLocaleFallback(item.bestFor, locale)}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {bodyParagraphs.length > 0 ? (
                  bodyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {withLocaleFallback(item.blurb, locale)}
                  </p>
                )}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href={`/${locale}/tools/${tool.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  {dict.toolPage.fullReview} <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </Link>
                <AffiliateCta toolName={tool.name} affiliateUrl={tool.affiliateUrl} locale={locale} />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8">
        <AffiliateDisclosureLine locale={locale} />
      </div>
    </div>
  );
}
