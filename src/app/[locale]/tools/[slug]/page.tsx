import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CaretLeft,
  Check,
  X as XIcon,
  Target,
  Users,
  Lightbulb,
  ListNumbers,
  CreditCard,
} from "@phosphor-icons/react/dist/ssr";
import { locales, isLocale, withLocaleFallback } from "@/i18n/config";
import { tools, getToolBySlug } from "@/data/tools";
import { getCategoryLabel } from "@/data/categories";
import { categoryIcons } from "@/data/categoryIcons";
import { getDictionary, t } from "@/i18n/dictionaries";
import { buildAlternates } from "@/lib/seo";
import { ToolIcon } from "@/components/ToolIcon";
import { StarRating } from "@/components/StarRating";
import { CategoryBadge } from "@/components/CategoryBadge";
import { AffiliateCta } from "@/components/AffiliateCta";
import { AffiliateDisclosureLine } from "@/components/AffiliateDisclosureLine";
import { ReviewByline } from "@/components/ReviewByline";
import { ReviewSchema } from "@/components/ReviewSchema";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() {
  return locales.flatMap((locale) => tools.map((tool) => ({ locale, slug: tool.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/tools/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  const content = withLocaleFallback(tool.content, locale);

  return {
    title: `${tool.name}: ${content.tagline}`,
    description: content.description,
    alternates: buildAlternates(locale, `/tools/${slug}`),
    openGraph: { title: tool.name, description: content.description },
  };
}

export default async function ToolPage(props: PageProps<"/[locale]/tools/[slug]">) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const dict = getDictionary(locale);
  const content = withLocaleFallback(tool.content, locale);
  const related = tools.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 3);

  return (
    <div className="container-page py-12">
      <ReviewSchema tool={tool} locale={locale} />

      <Link
        href={`/${locale}/tools`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
      >
        <CaretLeft size={16} weight="bold" aria-hidden="true" />
        {dict.toolPage.back}
      </Link>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        {/* Main content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-start gap-5">
            <ToolIcon name={tool.name} website={tool.website} size={64} />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">{tool.name}</h1>
              <p className="text-muted-foreground">{content.tagline}</p>
              <div className="flex flex-wrap items-center gap-3">
                <StarRating rating={tool.rating} locale={locale} />
                <CategoryBadge
                  label={getCategoryLabel(tool.category, locale)}
                  icon={categoryIcons[tool.category]}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 border-y border-border py-3">
            <ReviewByline locale={locale} lastUpdated={tool.lastUpdated} />
          </div>

          {tool.image && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <Image
                src={tool.image}
                alt={`${tool.name} — ${content.tagline}`}
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">{dict.toolPage.description}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{content.description}</p>
          </section>

          <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <Check size={18} weight="bold" className="text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {dict.toolPage.pros}
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                {content.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2">
                    <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <XIcon size={18} weight="bold" className="text-red-600 dark:text-red-400" aria-hidden="true" />
                {dict.toolPage.cons}
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                {content.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2">
                    <XIcon size={16} weight="bold" className="mt-0.5 shrink-0 text-red-600 dark:text-red-400" aria-hidden="true" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {content.whatItSolves && (
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Target size={20} weight="bold" className="text-accent" aria-hidden="true" />
                {dict.toolPage.whatItSolves}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{content.whatItSolves}</p>
            </section>
          )}

          {content.useCases && content.useCases.length > 0 && (
            <section className="mt-10">
              <h2 className="text-lg font-semibold text-foreground">{dict.toolPage.useCases}</h2>
              <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {content.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-start gap-2 rounded-xl border border-border bg-surface p-3.5 text-sm text-muted-foreground"
                  >
                    <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {content.whoItsFor && (
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Users size={20} weight="bold" className="text-accent" aria-hidden="true" />
                {dict.toolPage.whoItsFor}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{content.whoItsFor}</p>
            </section>
          )}

          {content.howToUse && content.howToUse.length > 0 && (
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <ListNumbers size={20} weight="bold" className="text-accent" aria-hidden="true" />
                {dict.toolPage.howToUse}
              </h2>
              <ol className="mt-3 flex flex-col gap-3">
                {content.howToUse.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent-strong">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {content.tips && content.tips.length > 0 && (
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Lightbulb size={20} weight="bold" className="text-accent" aria-hidden="true" />
                {dict.toolPage.tips}
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {content.tips.map((tip) => (
                  <li
                    key={tip}
                    className="rounded-xl border border-border bg-surface-muted p-3.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(content.freeTier || (content.paidPlans && content.paidPlans.length > 0)) && (
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <CreditCard size={20} weight="bold" className="text-accent" aria-hidden="true" />
                {dict.toolPage.pricingDetail}
              </h2>
              {content.freeTier && (
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">{dict.toolPage.freeTier}: </span>
                  {content.freeTier}
                </p>
              )}
              {content.paidPlans && content.paidPlans.length > 0 && (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {content.paidPlans.map((plan) => (
                    <div key={plan.name} className="rounded-2xl border border-border bg-surface p-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-semibold text-foreground">{plan.name}</p>
                        <p className="text-sm font-bold text-accent">{plan.price}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-10">
              <h2 className="text-lg font-semibold text-foreground">
                {t(dict.toolPage.similar, { category: getCategoryLabel(tool.category, locale) })}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {related.map((relatedTool) => (
                  <ToolCard key={relatedTool.slug} tool={relatedTool} locale={locale} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-24 flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {dict.toolPage.price}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{content.pricing}</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <AffiliateDisclosureLine locale={locale} />
              <AffiliateCta toolName={tool.name} affiliateUrl={tool.affiliateUrl} locale={locale} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
