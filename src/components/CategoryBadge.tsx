import type { Icon } from "@phosphor-icons/react";

export function CategoryBadge({ label, icon: Icon }: { label: string; icon?: Icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
      {Icon && <Icon size={13} weight="bold" aria-hidden="true" />}
      {label}
    </span>
  );
}
