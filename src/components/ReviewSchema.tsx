import type { Tool } from "@/data/tools";
import type { Locale } from "@/i18n/config";
import { getCategoryLabel } from "@/data/categories";
import { siteConfig } from "@/data/site";

// schema.org Review markup so Google can show a star rating in search results.
// See https://developers.google.com/search/docs/appearance/structured-data/review-snippet
export function ReviewSchema({ tool, locale }: { tool: Tool; locale: Locale }) {
  const content = tool.content[locale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${tool.name} ${locale === "fr" ? "avis" : "review"}`,
    reviewBody: content.description,
    datePublished: tool.lastUpdated,
    dateModified: tool.lastUpdated,
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: getCategoryLabel(tool.category, locale),
      url: tool.website,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so a value can never prematurely close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
