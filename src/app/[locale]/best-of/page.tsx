import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { roundups } from "@/data/roundups";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/best-of">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.bestOfIndex.title, description: dict.bestOfIndex.subtitle };
}

const dateLocale: Record<string, string> = { en: "en-US", fr: "fr-FR" };

export default async function BestOfIndexPage({ params }: PageProps<"/[locale]/best-of">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="container-page py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {dict.bestOfIndex.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{dict.bestOfIndex.subtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {roundups.map((roundup) => {
          const content = withLocaleFallback(roundup.content, locale);
          return (
            <Link
              key={roundup.slug}
              href={`/${locale}/best-of/${roundup.slug}`}
              className="group flex flex-col justify-between gap-5 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-accent">
                  {content.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {content.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarBlank size={14} aria-hidden="true" />
                  {t(dict.bestOfIndex.updated, {
                    date: new Date(roundup.updatedAt).toLocaleDateString(dateLocale[locale]),
                  })}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-accent">
                  {dict.bestOfIndex.readPost} <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
