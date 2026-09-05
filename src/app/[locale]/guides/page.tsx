import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { guides } from "@/data/guides";
import { GuideCard } from "@/components/GuideCard";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/guides">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.guidesIndex.title,
    description: dict.guidesIndex.subtitle,
    alternates: buildAlternates(locale, "/guides"),
  };
}

export default async function GuidesPage({ params }: PageProps<"/[locale]/guides">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const sorted = [...guides].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return (
    <div className="container-page py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.guidesIndex.title}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{dict.guidesIndex.subtitle}</p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((guide) => {
          const content = withLocaleFallback(guide.content, locale);
          if (!content) return null;
          return (
            <GuideCard
              key={guide.slug}
              guide={guide}
              locale={locale}
              readMoreLabel={dict.guidesIndex.readGuide}
            />
          );
        })}
      </div>
    </div>
  );
}
