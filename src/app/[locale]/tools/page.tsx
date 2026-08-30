"use client";

import { Suspense, use, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { getCategoryLabel, type CategoryKey } from "@/data/categories";
import { categoryIcons } from "@/data/categoryIcons";
import { getDictionary, t } from "@/i18n/dictionaries";
import { isLocale, withLocaleFallback, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const categoryKeys = Array.from(new Set(tools.map((tool) => tool.category))) as CategoryKey[];

function isCategoryKey(value: string | null): value is CategoryKey {
  return !!value && (categoryKeys as string[]).includes(value);
}

function ToolsPageInner({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const searchParams = useSearchParams();
  const initialCategory = isCategoryKey(searchParams.get("category"))
    ? (searchParams.get("category") as CategoryKey)
    : null;

  const [active, setActive] = useState<CategoryKey | null>(initialCategory);
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesCategory = !active || tool.category === active;
      const matchesQuery =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        withLocaleFallback(tool.content, locale).tagline.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query, locale]);

  return (
    <div className="container-page py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.tools.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {t(dict.tools.subtitle, { count: tools.length })}
        </p>
      </div>

      <div className="relative mt-8 max-w-md">
        <MagnifyingGlass
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.tools.searchPlaceholder}
          aria-label={dict.tools.searchPlaceholder}
          className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={dict.tools.filterGroup}>
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            active === null
              ? "border-accent bg-accent-strong text-on-accent"
              : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
          }`}
        >
          {dict.tools.filterAll}
        </button>
        {categoryKeys.map((key) => {
          const Icon = categoryIcons[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              aria-pressed={active === key}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === key
                  ? "border-accent bg-accent-strong text-on-accent"
                  : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              <Icon size={14} weight="bold" aria-hidden="true" />
              {getCategoryLabel(key, locale)}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">{dict.tools.noResults}</p>
      )}
    </div>
  );
}

export default function ToolsPage({ params }: PageProps<"/[locale]/tools">) {
  const { locale } = use(params);
  if (!isLocale(locale)) notFound();

  return (
    <Suspense fallback={null}>
      <ToolsPageInner locale={locale} />
    </Suspense>
  );
}
