import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaretLeft, Check, X as XIcon, SealWarning } from "@phosphor-icons/react/dist/ssr";
import { locales, isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { guides, getGuideBySlug } from "@/data/guides";
import { getToolBySlug } from "@/data/tools";
import { StarRating } from "@/components/StarRating";
import { ReviewByline } from "@/components/ReviewByline";
import { AffiliateCta } from "@/components/AffiliateCta";
import { AffiliateDisclosureLine } from "@/components/AffiliateDisclosureLine";

export function generateStaticParams() {
  return locales.flatMap((locale) => guides.map((guide) => ({ locale, slug: guide.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/guides/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const content = withLocaleFallback(guide.content, locale);
  if (!content) return {};

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: { title: content.title, description: content.metaDescription },
  };
}

export default async function GuideDetailPage({
  params,
}: PageProps<"/[locale]/guides/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const content = withLocaleFallback(guide.content, locale);
  if (!content) notFound();

  const tool = getToolBySlug(guide.toolSlug);
  const dict = getDictionary(locale);

  return (
    <div className="container-page max-w-3xl py-12">
      <Link
        href={`/${locale}/guides`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
      >
        <CaretLeft size={16} weight="bold" aria-hidden="true" />
        {dict.guidesPost.back}
      </Link>

      {tool?.image && (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-surface-muted">
          <Image
            src={tool.image}
            alt={content.title}
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
        {content.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {tool && <StarRating rating={tool.rating} locale={locale} />}
        <div className="border-y border-border py-1">
          <ReviewByline locale={locale} lastUpdated={guide.updatedAt} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {content.intro.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="flex items-center gap-2 font-semibold text-foreground">
            <Check size={18} weight="bold" className="text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            {dict.guidesPost.strongForTitle}
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            {content.strongFor.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="flex items-center gap-2 font-semibold text-foreground">
            <XIcon size={18} weight="bold" className="text-red-600 dark:text-red-400" aria-hidden="true" />
            {dict.guidesPost.drawbacksTitle}
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            {content.drawbacks.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <XIcon size={16} weight="bold" className="mt-0.5 shrink-0 text-red-600 dark:text-red-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <SealWarning size={20} weight="bold" className="text-accent" aria-hidden="true" />
          {dict.guidesPost.notForYouTitle}
        </h2>
        <ul className="mt-3 flex flex-col gap-2.5">
          {content.notForYouIf.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-surface-muted p-3.5 text-sm leading-relaxed text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-accent/30 bg-accent-soft p-6">
        <h2 className="text-lg font-semibold text-accent-strong">{dict.guidesPost.verdictTitle}</h2>
        <p className="mt-3 leading-relaxed text-foreground">{content.verdict}</p>
      </section>

      {tool && (
        <section className="mt-10 flex flex-col gap-3 border-t border-border pt-8">
          <AffiliateDisclosureLine locale={locale} />
          <div className="flex flex-wrap items-center gap-3">
            <AffiliateCta toolName={tool.name} affiliateUrl={tool.affiliateUrl} locale={locale} />
            <Link
              href={`/${locale}/tools/${tool.slug}`}
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              {dict.toolPage.fullReview} →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
