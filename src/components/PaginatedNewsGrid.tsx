"use client";

import { useMemo, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { NewsCard } from "./NewsCard";
import type { NewsItem } from "@/data/news";
import type { Locale } from "@/i18n/config";

const PAGE_SIZE = 4;

interface PaginatedNewsGridProps {
  items: NewsItem[];
  locale: Locale;
  readMoreLabel: string;
  prevLabel: string;
  nextLabel: string;
  pageLabel: string;
}

export function PaginatedNewsGrid({
  items,
  locale,
  readMoreLabel,
  prevLabel,
  nextLabel,
  pageLabel,
}: PaginatedNewsGridProps) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  const current = useMemo(
    () => items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [items, page]
  );

  function goTo(next: number) {
    setPage(Math.min(Math.max(next, 1), pageCount));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {current.map((item) => (
          <NewsCard key={item.slug} item={item} locale={locale} readMoreLabel={readMoreLabel} />
        ))}
      </div>

      {pageCount > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-8 flex flex-wrap items-center justify-center gap-1.5"
        >
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label={prevLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40"
          >
            <CaretLeft size={16} weight="bold" aria-hidden="true" />
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goTo(n)}
              aria-current={page === n ? "page" : undefined}
              aria-label={`${pageLabel} ${n}`}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                page === n
                  ? "bg-accent-strong text-on-accent"
                  : "text-muted-foreground hover:bg-surface-muted hover:text-accent"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount}
            aria-label={nextLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40"
          >
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  );
}
