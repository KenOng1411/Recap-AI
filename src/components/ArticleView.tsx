import Link from "next/link";
import Image from "next/image";
import { Question } from "@phosphor-icons/react/dist/ssr";
import { withLocaleFallback, type Locale } from "@/i18n/config";
import { getToolBySlug } from "@/data/tools";
import type { Article } from "@/data/articles";
import { getDictionary } from "@/i18n/dictionaries";
import { StarRating } from "./StarRating";
import { ReviewByline } from "./ReviewByline";
import { AffiliateCta } from "./AffiliateCta";
import { AffiliateDisclosureLine } from "./AffiliateDisclosureLine";
import { FaqSchema } from "./FaqSchema";

// Renders the flexible long-form Article type (step-by-step tutorials,
// pricing breakdowns with tables, deep comparisons) — a different shape
// from the "is X worth it" GuideContent, sharing the /guides/[slug] route.
export function ArticleView({ article, locale }: { article: Article; locale: Locale }) {
  const content = withLocaleFallback(article.content, locale);
  const tool = getToolBySlug(article.toolSlug);
  const dict = getDictionary(locale);

  return (
    <div className="container-page max-w-3xl py-12">
      {content.faq && content.faq.length > 0 && <FaqSchema items={content.faq} />}

      <Link
        href={`/${locale}/guides`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
      >
        {dict.guidesPost.back}
      </Link>

      <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
        {content.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {tool && <StarRating rating={tool.rating} locale={locale} />}
        <div className="border-y border-border py-1">
          <ReviewByline locale={locale} lastUpdated={article.updatedAt} />
        </div>
      </div>

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
          {section.steps && section.steps.length > 0 && (
            <ol className="mt-3 flex flex-col gap-3">
              {section.steps.map((step, si) => (
                <li key={step.title} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent-strong">
                    {si + 1}
                  </span>
                  <span className="leading-relaxed">
                    <span className="font-semibold text-foreground">{step.title}: </span>
                    {step.body}
                  </span>
                </li>
              ))}
            </ol>
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
            {dict.toolPage.faq}
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
          <h2 className="text-lg font-semibold text-accent-strong">{dict.guidesPost.verdictTitle}</h2>
          <p className="mt-3 leading-relaxed text-foreground">{content.verdict}</p>
        </section>
      )}

      {content.relatedLinks && content.relatedLinks.length > 0 && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Related guides
          </h2>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {content.relatedLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/${locale}/guides/${link.slug}`}
                className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {tool && (
        <section className="mt-10 flex flex-col gap-3 border-t border-border pt-8">
          <AffiliateDisclosureLine locale={locale} />
          <div className="flex flex-wrap items-center gap-3">
            <AffiliateCta toolName={tool.name} affiliateUrl={tool.affiliateUrl} locale={locale} />
            <Link
              href={`/${locale}/tools/${tool.slug}`}
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              {dict.toolPage.fullReview} →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
