import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { buildAlternates } from "@/lib/seo";
import { businessTools } from "@/data/businessTools";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/business-tools">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: "Business & Marketing Software",
    description:
      "Honest reviews of funnel builders, CRMs, and marketing platforms — a separate track from RecapAI's AI tool reviews.",
    alternates: buildAlternates(locale, "/business-tools"),
  };
}

export default async function BusinessToolsIndexPage({
  params,
}: PageProps<"/[locale]/business-tools">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="container-page py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Business &amp; Marketing Software
        </h1>
        <p className="mt-2 text-muted-foreground">
          Funnel builders, CRMs, and marketing platforms — reviewed with the same hands-on
          standard as our AI tools, kept as a separate track since these aren&apos;t AI products.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {businessTools.map((tool) => {
          const content = withLocaleFallback(tool.content, locale);
          if (!content) return null;
          return (
            <Link
              key={tool.slug}
              href={`/${locale}/business-tools/${tool.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_-8px_var(--color-accent-shadow)]"
            >
              {tool.image && (
                <div className="relative aspect-video w-full overflow-hidden bg-surface-muted">
                  <Image
                    src={tool.image}
                    alt={content.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <span className="inline-flex w-fit items-center rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {tool.categoryLabel}
                </span>
                <h3 className="line-clamp-2 text-base font-semibold text-foreground group-hover:text-accent">
                  {tool.name}
                </h3>
                <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {content.tagline}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  Read review
                  <ArrowRight size={12} weight="bold" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
