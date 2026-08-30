import Link from "next/link";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Tool } from "@/data/tools";
import { withLocaleFallback, type Locale } from "@/i18n/config";
import { getCategoryLabel } from "@/data/categories";
import { categoryIcons } from "@/data/categoryIcons";
import { ToolIcon } from "./ToolIcon";
import { StarRating } from "./StarRating";
import { CategoryBadge } from "./CategoryBadge";
import { getDictionary } from "@/i18n/dictionaries";

export function ToolCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const content = withLocaleFallback(tool.content, locale);
  const dict = getDictionary(locale);

  return (
    <Link
      href={`/${locale}/tools/${tool.slug}`}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <ToolIcon name={tool.name} website={tool.website} size={48} />
        <div className="flex flex-col items-end gap-1.5">
          {tool.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
              <Sparkle size={11} weight="fill" aria-hidden="true" />
              {dict.common.featured}
            </span>
          )}
          <StarRating rating={tool.rating} size={14} locale={locale} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent">
          {tool.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{content.tagline}</p>
      </div>
      <div>
        <CategoryBadge
          label={getCategoryLabel(tool.category, locale)}
          icon={categoryIcons[tool.category]}
        />
      </div>
    </Link>
  );
}
