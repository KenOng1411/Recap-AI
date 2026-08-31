"use client";

import { useMemo, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ToolCard } from "./ToolCard";
import type { Tool } from "@/data/tools";
import type { Locale } from "@/i18n/config";

const PAGE_SIZE = 8;

interface PaginatedToolsGridProps {
  tools: Tool[];
  locale: Locale;
  prevLabel: string;
  nextLabel: string;
  pageLabel: string; // e.g. "Page {page}"
}

export function PaginatedToolsGrid({
  tools,
  locale,
  prevLabel,
  nextLabel,
  pageLabel,
}: PaginatedToolsGridProps) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(tools.length / PAGE_SIZE));

  const current = useMemo(
    () => tools.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [tools, page]
  );

  function goTo(next: number) {
    setPage(Math.min(Math.max(next, 1), pageCount));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {current.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={locale} />
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
