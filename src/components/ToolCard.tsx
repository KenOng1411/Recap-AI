import Link from "next/link";
import type { Tool } from "@/data/tools";
import type { Locale } from "@/i18n/config";
import { getCategoryLabel } from "@/data/categories";
import { ToolLogo } from "./ToolLogo";
import { StarRating } from "./StarRating";
import { CategoryBadge } from "./CategoryBadge";

export function ToolCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const content = tool.content[locale];

  return (
    <Link
      href={`/${locale}/tools/${tool.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <ToolLogo name={tool.name} />
        <StarRating rating={tool.rating} size={14} locale={locale} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent">
          {tool.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{content.tagline}</p>
      </div>
      <div>
        <CategoryBadge label={getCategoryLabel(tool.category, locale)} />
      </div>
    </Link>
  );
}
