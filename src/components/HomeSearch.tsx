"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { getCategoryLabel, type CategoryKey } from "@/data/categories";
import type { Locale } from "@/i18n/config";

interface HomeSearchProps {
  locale: Locale;
  placeholder: string;
  searchCta: string;
  allCategoriesLabel: string;
  categoryKeys: CategoryKey[];
}

export function HomeSearch({
  locale,
  placeholder,
  searchCta,
  allCategoriesLabel,
  categoryKeys,
}: HomeSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category) params.set("category", category);
    const qs = params.toString();
    router.push(`/${locale}/tools${qs ? `?${qs}` : ""}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <MagnifyingGlass
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full rounded-2xl border border-border bg-surface-muted py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none sm:rounded-full"
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label={allCategoriesLabel}
        className="cursor-pointer rounded-full border border-border bg-surface-muted px-4 py-3.5 text-sm text-foreground focus:border-accent focus:outline-none sm:w-56"
      >
        <option value="">{allCategoriesLabel}</option>
        {categoryKeys.map((key) => (
          <option key={key} value={key}>
            {getCategoryLabel(key, locale)}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-strong px-6 py-3.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
      >
        {searchCta}
      </button>
    </form>
  );
}
