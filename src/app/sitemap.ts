import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { roundups } from "@/data/roundups";
import { guides } from "@/data/guides";
import { newsItems } from "@/data/news";
import { siteConfig } from "@/data/site";
import { locales } from "@/i18n/config";

export const dynamic = "force-static";

function withAlternates(path: string) {
  return Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const base = `${siteConfig.url}/${locale}`;

    entries.push(
      { url: `${base}/`, changeFrequency: "weekly", priority: 1, alternates: { languages: withAlternates("/") } },
      { url: `${base}/tools`, changeFrequency: "weekly", priority: 0.9, alternates: { languages: withAlternates("/tools") } },
      { url: `${base}/best-of`, changeFrequency: "weekly", priority: 0.8, alternates: { languages: withAlternates("/best-of") } },
      { url: `${base}/guides`, changeFrequency: "weekly", priority: 0.8, alternates: { languages: withAlternates("/guides") } },
      { url: `${base}/deals`, changeFrequency: "weekly", priority: 0.7, alternates: { languages: withAlternates("/deals") } },
      { url: `${base}/about`, changeFrequency: "monthly", priority: 0.5, alternates: { languages: withAlternates("/about") } },
      { url: `${base}/ai-news`, changeFrequency: "weekly", priority: 0.8, alternates: { languages: withAlternates("/ai-news") } },
      { url: `${base}/review-methodology`, changeFrequency: "monthly", priority: 0.6, alternates: { languages: withAlternates("/review-methodology") } },
      { url: `${base}/partner-with-us`, changeFrequency: "monthly", priority: 0.4, alternates: { languages: withAlternates("/partner-with-us") } },
      { url: `${base}/disclosure`, changeFrequency: "yearly", priority: 0.3, alternates: { languages: withAlternates("/disclosure") } },
      { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3, alternates: { languages: withAlternates("/privacy-policy") } },
      { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3, alternates: { languages: withAlternates("/terms") } }
    );

    for (const tool of tools) {
      entries.push({
        url: `${base}/tools/${tool.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: withAlternates(`/tools/${tool.slug}`) },
      });
    }

    for (const roundup of roundups) {
      entries.push({
        url: `${base}/best-of/${roundup.slug}`,
        lastModified: roundup.updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: withAlternates(`/best-of/${roundup.slug}`) },
      });
    }

    for (const guide of guides) {
      entries.push({
        url: `${base}/guides/${guide.slug}`,
        lastModified: guide.updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: withAlternates(`/guides/${guide.slug}`) },
      });
    }

    for (const item of newsItems) {
      entries.push({
        url: `${base}/ai-news/${item.slug}`,
        lastModified: item.publishedAt,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: withAlternates(`/ai-news/${item.slug}`) },
      });
    }
  }

  return entries;
}
