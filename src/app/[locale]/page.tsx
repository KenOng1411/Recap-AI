import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { ToolCard } from "@/components/ToolCard";
import { tools, getFeaturedTools, getToolsByCategory } from "@/data/tools";
import { siteConfig } from "@/data/site";
import { getCategoryLabel, type CategoryKey } from "@/data/categories";
import { categoryIcons } from "@/data/categoryIcons";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const featuredTools = getFeaturedTools();
  const categoryKeys = Object.keys(getToolsByCategory()) as CategoryKey[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-0 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[90px]"
        />

        <div className="container-page relative flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex max-w-xl flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {dict.home.eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {dict.home.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(dict.home.subtitle, { author: siteConfig.author.name })}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/tools`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] transition-colors hover:bg-accent-hover"
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
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-4 md:ml-auto">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-3xl font-bold text-foreground">{tools.length}</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.home.statTools}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-3xl font-bold text-foreground">{categoryKeys.length}</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.home.statCategories}</p>
            </div>
          </div>
        </div>

        {/* Category quick-nav */}
        <div className="container-page relative pb-16">
          <div className="flex flex-wrap gap-2.5">
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
      </section>

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
