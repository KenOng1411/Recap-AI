import Link from "next/link";
import { tools } from "@/data/tools";
import { getCategoryLabel, type CategoryKey } from "@/data/categories";
import { categoryIcons } from "@/data/categoryIcons";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { ToolIcon } from "./ToolIcon";

interface CategoryPreviewPanelProps {
  locale: Locale;
  categoryKey: CategoryKey;
  limit?: number;
}

export function CategoryPreviewPanel({ locale, categoryKey, limit = 5 }: CategoryPreviewPanelProps) {
  const dict = getDictionary(locale);
  const Icon = categoryIcons[categoryKey];
  const items = tools
    .filter((tool) => tool.category === categoryKey)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3.5">
        <Icon size={16} weight="bold" className="shrink-0 text-accent" aria-hidden="true" />
        <p className="truncate text-sm font-semibold text-foreground">
          {getCategoryLabel(categoryKey, locale)}
        </p>
      </div>
      <ul className="flex flex-1 flex-col divide-y divide-border">
        {items.map((tool, i) => (
          <li key={tool.slug}>
            <Link
              href={`/${locale}/tools/${tool.slug}`}
              className="flex items-center gap-2.5 px-4 py-2.5 transition-colors hover:bg-surface-muted"
            >
              <span className="w-4 shrink-0 text-xs text-muted-foreground">{i + 1}.</span>
              <ToolIcon name={tool.name} website={tool.website} size={22} />
              <span className="flex-1 truncate text-sm text-foreground">{tool.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={`/${locale}/tools?category=${categoryKey}`}
        className="border-t border-border px-4 py-2.5 text-center text-xs font-semibold text-accent transition-colors hover:text-accent-hover"
      >
        {dict.home.viewAll}
      </Link>
    </div>
  );
}
