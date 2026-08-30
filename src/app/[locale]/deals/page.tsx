import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tag, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { deals } from "@/data/deals";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/deals">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.deals.title, description: dict.deals.subtitle };
}

export default async function DealsPage({ params }: PageProps<"/[locale]/deals">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="container-page py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.deals.title}</h1>
        <p className="mt-2 text-muted-foreground">{dict.deals.subtitle}</p>
      </div>

      {deals.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
          <Tag size={32} className="text-muted-foreground" aria-hidden="true" />
          <p className="font-semibold text-foreground">{dict.deals.emptyTitle}</p>
          <p className="max-w-sm text-sm text-muted-foreground">{dict.deals.emptyDesc}</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {deals.map((deal) => {
            const content = withLocaleFallback(deal.content, locale);
            return (
              <div key={deal.slug} className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {deal.toolName}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-foreground">{content.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {content.description}
                </p>
                {deal.code && (
                  <p className="mt-3 inline-flex items-center rounded-lg bg-surface-muted px-3 py-1.5 font-mono text-sm font-semibold text-foreground">
                    {deal.code}
                  </p>
                )}
                <Link
                  href={deal.affiliateUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  {dict.deals.getDeal} <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
