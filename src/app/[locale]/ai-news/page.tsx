import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { newsItems } from "@/data/news";
import { NewsCard } from "@/components/NewsCard";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ai-news">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.news.title, description: dict.news.subtitle };
}

export default async function AiNewsPage({ params }: PageProps<"/[locale]/ai-news">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const sorted = [...newsItems].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="container-page py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.news.title}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{dict.news.subtitle}</p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sorted.map((item) => (
          <NewsCard
            key={item.slug}
            item={item}
            locale={locale}
            readMoreLabel={dict.news.readArticle}
          />
        ))}
      </div>
    </div>
  );
}
