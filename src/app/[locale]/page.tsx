import Link from "next/link";
import {
  ArrowRight,
  Flask,
  ListChecks,
  Star,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { ToolCard } from "@/components/ToolCard";
import { Logo } from "@/components/Logo";
import { HomeSearch } from "@/components/HomeSearch";
import { CategoryPreviewPanel } from "@/components/CategoryPreviewPanel";
import { PlatformsStrip } from "@/components/PlatformsStrip";
import { TechGlobe } from "@/components/TechGlobe";
import { NewsCard } from "@/components/NewsCard";
import { tools, getFeaturedTools, getToolsByCategory } from "@/data/tools";
import { siteConfig } from "@/data/site";
import { platforms } from "@/data/platforms";
import { newsItems } from "@/data/news";
import { getCategoryLabel, type CategoryKey } from "@/data/categories";
import { categoryIcons } from "@/data/categoryIcons";

const PREVIEW_CATEGORIES: CategoryKey[] = ["chatbot", "image", "video", "coding"];

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const featuredTools = getFeaturedTools();
  const categoryKeys = Object.keys(getToolsByCategory()) as CategoryKey[];

  const latestNews = [...newsItems]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);

  const trustItems = [
    { icon: Flask, label: dict.home.trustHandsOn, href: `/${locale}/review-methodology` },
    { icon: ListChecks, label: dict.home.trustCriteria, href: `/${locale}/review-methodology` },
    { icon: Star, label: dict.home.trustIndependent, href: `/${locale}/review-methodology` },
    { icon: ShieldCheck, label: dict.home.trustTransparent, href: `/${locale}/disclosure` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-0 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[90px]"
        />
        <div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 opacity-40 sm:opacity-60">
          <TechGlobe size={320} />
        </div>

        <div className="container-page relative flex flex-col items-center gap-6 py-16 text-center md:py-24">
          <Logo size={68} />
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {dict.home.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            {dict.home.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t(dict.home.subtitle, { author: siteConfig.author.name })}
          </p>

          <div className="mt-2 w-full max-w-2xl rounded-3xl border border-border bg-surface p-3 shadow-[0_20px_60px_-20px_var(--color-accent-shadow)] sm:p-4">
            <HomeSearch
              locale={locale}
              placeholder={t(dict.home.searchPlaceholder, { count: tools.length })}
              searchCta={dict.home.searchCta}
              allCategoriesLabel={dict.home.allCategories}
              categoryKeys={categoryKeys}
            />
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] transition-all hover:scale-[1.03] hover:bg-accent-hover active:scale-[0.97]"
            >
              {dict.home.ctaPrimary}
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-semibold text-foreground hover:text-accent"
            >
              {dict.home.ctaSecondary}
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span>
              <span className="font-bold text-foreground">{tools.length}</span>{" "}
              {dict.home.statTools}
            </span>
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span>
              <span className="font-bold text-foreground">{categoryKeys.length}</span>{" "}
              {dict.home.statCategories}
            </span>
          </div>
        </div>

        {/* Category quick-nav */}
        <div className="container-page relative pb-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categoryKeys.map((key) => {
              const Icon = categoryIcons[key];
              return (
                <Link
                  key={key}
                  href={`/${locale}/tools?category=${key}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={15} weight="bold" aria-hidden="true" />
                  {getCategoryLabel(key, locale)}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Trust strip — real, verifiable claims only */}
        <div className="relative border-y border-border bg-surface-muted">
          <div className="container-page grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-4">
            {trustItems.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                <Icon size={18} weight="bold" className="shrink-0 text-accent" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI News */}
      <section className="container-page py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {dict.news.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{dict.news.subtitle}</p>
          </div>
          <Link
            href={`/${locale}/ai-news`}
            className="hidden shrink-0 text-sm font-semibold text-accent hover:text-accent-hover sm:inline-block"
          >
            {dict.home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {latestNews.map((item) => (
            <NewsCard
              key={item.slug}
              item={item}
              locale={locale}
              readMoreLabel={t(dict.news.readMore, { source: item.sourceName })}
            />
          ))}
        </div>
      </section>

      <PlatformsStrip label={dict.home.platformsTitle} platforms={platforms} />

      {/* Featured tools */}
      <section className="container-page py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {dict.home.featuredTitle}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{dict.home.featuredSubtitle}</p>
          </div>
          <Link
            href={`/${locale}/tools`}
            className="hidden shrink-0 text-sm font-semibold text-accent hover:text-accent-hover sm:inline-block"
          >
            {dict.home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </section>

      {/* Category preview panels */}
      <section className="container-page py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {dict.home.categoriesTitle}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{dict.home.categoriesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_CATEGORIES.map((key) => (
            <CategoryPreviewPanel key={key} locale={locale} categoryKey={key} />
          ))}
        </div>
      </section>

      {/* Best-of / Deals CTA */}
      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Link
            href={`/${locale}/best-of`}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent">
                {dict.home.bestOfTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {dict.home.bestOfDesc}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              {dict.home.bestOfCta} <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </span>
          </Link>

          <Link
            href={`/${locale}/deals`}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent">
                {dict.home.dealsTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {dict.home.dealsDesc}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              {dict.home.dealsCta} <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
