"use client";

import { use, useMemo, useState } from "react";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { getCategoryLabel, type CategoryKey } from "@/data/categories";
import { getDictionary, t } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

const categoryKeys = Array.from(new Set(tools.map((tool) => tool.category))) as CategoryKey[];

export default function ToolsPage({ params }: PageProps<"/[locale]/tools">) {
  const { locale } = use(params);
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const [active, setActive] = useState<CategoryKey | null>(null);

  const filtered = useMemo(
    () => (active ? tools.filter((tool) => tool.category === active) : tools),
    [active]
  );

  return (
    <div className="container-page py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.tools.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {t(dict.tools.subtitle, { count: tools.length })}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={dict.tools.filterGroup}>
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
        {categoryKeys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            aria-pressed={active === key}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === key
                ? "border-accent bg-accent-strong text-on-accent"
                : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {getCategoryLabel(key, locale)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={locale} />
        ))}
      </div>
    </div>
  );
}
