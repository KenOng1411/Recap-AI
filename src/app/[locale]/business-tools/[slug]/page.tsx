import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaretLeft, ArrowSquareOut, Question, Star } from "@phosphor-icons/react/dist/ssr";
import { locales, isLocale, withLocaleFallback } from "@/i18n/config";
import { buildAlternates } from "@/lib/seo";
import { businessTools, getBusinessToolBySlug } from "@/data/businessTools";
import type { BusinessTool, BusinessToolContent } from "@/data/businessTools";
import { AffiliateDisclosureLine } from "@/components/AffiliateDisclosureLine";
import { FaqSchema } from "@/components/FaqSchema";

export function generateStaticParams() {
  return locales.flatMap((locale) => businessTools.map((tool) => ({ locale, slug: tool.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/business-tools/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const tool = getBusinessToolBySlug(slug);
  if (!tool) return {};
  const content = withLocaleFallback(tool.content, locale);
  if (!content) return {};

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: buildAlternates(locale, `/business-tools/${slug}`),
    openGraph: { title: content.title, description: content.metaDescription },
  };
}

// SoftwareApplication + a single editorial Review (reviewRating, not
// aggregateRating — this is RecapAI's own hands-on assessment, not an
// aggregation of third-party user ratings, so aggregateRating would
// misrepresent it under Google's structured-data guidelines).
function BusinessToolSchema({
  tool,
  content,
  locale,
}: {
  tool: BusinessTool;
  content: BusinessToolContent;
  locale: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: tool.categoryLabel,
    operatingSystem: "Web",
    description: content.tagline,
    url: tool.website,
    // Omit `offers` entirely when priceUSD isn't set — an unverified
    // third-party price in structured data is worse than no price at all.
    ...(tool.priceUSD
      ? { offers: { "@type": "Offer", price: tool.priceUSD, priceCurrency: "USD" } }
      : {}),
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "RecapAI" },
      reviewRating: { "@type": "Rating", ratingValue: tool.rating, bestRating: 5, worstRating: 1 },
      reviewBody: content.tagline,
      datePublished: tool.lastUpdated,
      inLanguage: locale,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function BusinessToolDetailPage({
  params,
}: PageProps<"/[locale]/business-tools/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const tool = getBusinessToolBySlug(slug);
  if (!tool) notFound();
  const content = withLocaleFallback(tool.content, locale);
  if (!content) notFound();

  return (
    <div className="container-page max-w-3xl py-12">
      <BusinessToolSchema tool={tool} content={content} locale={locale} />
      {content.faq && content.faq.length > 0 && <FaqSchema items={content.faq} />}

      <Link
        href={`/${locale}/business-tools`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
      >
        <CaretLeft size={16} weight="bold" aria-hidden="true" />
        Business &amp; Marketing Software
      </Link>

      {tool.image && (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src={tool.image}
            alt={tool.imageAlt ?? content.title}
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {tool.categoryLabel}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
          <Star size={16} weight="fill" className="text-star" aria-hidden="true" />
          {tool.rating.toFixed(1)}
        </span>
      </div>

      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
        {content.title}
      </h1>
      <p className="mt-2 text-muted-foreground">{content.tagline}</p>

      <div className="mt-8 flex flex-col gap-4">
        {content.intro.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {content.quickSummary && content.quickSummary.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2 rounded-2xl border border-border bg-surface-muted p-5 text-sm text-muted-foreground">
          {content.quickSummary.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Above-the-fold CTA — this section also serves as an ads landing
          page, so the primary action shouldn't require scrolling past the
          full review to find. */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] transition-all hover:scale-[1.03] hover:bg-accent-hover active:scale-[0.97]"
        >
          Try {tool.name} free
          <ArrowSquareOut size={18} weight="bold" aria-hidden="true" />
        </a>
        {tool.secondaryCta && (
          <a
            href={tool.secondaryCta.url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            {tool.secondaryCta.label}
            <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
          </a>
        )}
      </div>

      {content.sections.map((section, i) => (
        <section key={i} className="mt-10">
          {section.heading && (
            <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
          )}
          {section.paragraphs?.map((p, pi) => (
            <p key={pi} className="mt-3 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {section.image && (
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-3 flex flex-col gap-2.5">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-xl border border-border bg-surface p-3.5 text-sm leading-relaxed text-muted-foreground"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-muted">
                    {section.table.headers.map((h) => (
                      <th
                        key={h}
                        className="border-b border-border px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-border last:border-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2.5 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.tableNote && (
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{section.tableNote}</p>
          )}
        </section>
      ))}

      {content.faq && content.faq.length > 0 && (
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Question size={20} weight="bold" className="text-accent" aria-hidden="true" />
            Frequently asked questions
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {content.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border bg-surface p-4 open:bg-surface-muted"
              >
                <summary className="cursor-pointer list-none font-medium text-foreground marker:content-none">
                  {item.question}
                </summary>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {content.verdict && (
        <section className="mt-10 rounded-2xl border border-accent/30 bg-accent-soft p-6">
          <h2 className="text-lg font-semibold text-accent-strong">The verdict</h2>
          <p className="mt-3 leading-relaxed text-foreground">{content.verdict}</p>
        </section>
      )}

      {content.relatedLinks && content.relatedLinks.length > 0 && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Related reviews
          </h2>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {content.relatedLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/${locale}/business-tools/${link.slug}`}
                className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 flex flex-col gap-3 border-t border-border pt-8">
        <AffiliateDisclosureLine locale={locale} />
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--color-accent-shadow)] transition-all hover:scale-[1.03] hover:bg-accent-hover active:scale-[0.97]"
          >
            Try {tool.name} free
            <ArrowSquareOut size={18} weight="bold" aria-hidden="true" />
          </a>
          {tool.secondaryCta && (
            <a
              href={tool.secondaryCta.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
            >
              {tool.secondaryCta.label}
              <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
