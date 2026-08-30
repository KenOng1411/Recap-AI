export function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
      {label}
    </span>
  );
}
