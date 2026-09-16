import type { Locale } from "@/i18n/config";
import type { ArticleSection } from "./articles";

// A separate content vertical from tools.ts, deliberately kept apart. Every
// entry in tools.ts is an AI product — RecapAI's whole identity (nav copy,
// meta descriptions, category taxonomy) is built around "AI tool reviews".
// ClickFunnels-style business/marketing software has no AI angle, so mixing
// it into /tools/ would dilute that topical signal. This lives at
// /business-tools/ instead, with its own lightweight taxonomy (a free-text
// category label, not the strict AI CategoryKey enum) since there's no
// shared category system to reuse yet with just one entry.
interface BusinessToolFaqItem {
  question: string;
  answer: string;
}

interface BusinessToolCta {
  label: string;
  url: string;
}

export interface BusinessToolContent {
  title: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  quickSummary?: string[];
  sections: ArticleSection[];
  faq?: BusinessToolFaqItem[];
  verdict?: string;
}

export interface BusinessTool {
  slug: string;
  name: string;
  categoryLabel: string; // free-text badge, e.g. "Funnel Builder" — not the AI CategoryKey enum
  website: string;
  affiliateUrl: string;
  secondaryCta?: BusinessToolCta; // e.g. a discounted trial offer, shown alongside the primary CTA
  rating: number;
  lastUpdated: string;
  image?: string;
  content: Partial<Record<Locale, BusinessToolContent>>;
}

export const businessTools: BusinessTool[] = [
  {
    slug: "clickfunnels",
    name: "ClickFunnels",
    categoryLabel: "Funnel Builder",
    website: "https://www.clickfunnels.com",
    affiliateUrl:
      "https://www.clickfunnels.com/signup-flow?aff=9efe802452050bb3de77c3d58f37b8c91d4c6814ce9a6ac6eb09cf5a2ecae04b",
    secondaryCta: {
      label: "3 months for $99 (discounted trial)",
      url: "https://www.clickfunnels.com/3-months-for-99?aff=9efe802452050bb3de77c3d58f37b8c91d4c6814ce9a6ac6eb09cf5a2ecae04b",
    },
    rating: 4.2,
    lastUpdated: "2026-09-16",
    image: "/business-tools-images/clickfunnels/clickfunnels-funnel-editor-and-stats.jpg",
    content: {
      en: {
        title: "ClickFunnels Review 2026: Is It Still Worth $97/Month?",
        metaDescription:
          "ClickFunnels is still the fastest way to build a funnel without a developer — but the editor lags and the entry price is steep. Here's the honest breakdown.",
        tagline: "A drag-and-drop funnel builder for landing pages, checkout, upsells, and email — no developer required.",
        intro: [
          "ClickFunnels is a drag-and-drop funnel builder for creating landing pages, checkout flows, upsells, and email sequences without a developer — its templates and funnel-first workflow are still the fastest way to launch a sales funnel, but the page editor is noticeably slower than newer builders and the entry price ($97/month) puts it above most direct competitors.",
          "That's the short version. Below is what you actually get at each price tier, where it genuinely wins, and where a specialist tool would serve you better.",
        ],
        quickSummary: [
          "Best for: digital product creators, course sellers, and coaches who want proven funnel templates without building pages from scratch.",
          "Not ideal for: service businesses (trades, clinics, agencies) that need deep CRM, SMS automation, or appointment booking — GoHighLevel fits that need better.",
          "Pricing: starts at $97/month (Launch), with a 14-day free trial plus a 30-day money-back guarantee — effectively 44 days risk-free.",
          "Biggest complaint across reviews: the page editor lags on save/preview compared to modern builders.",
        ],
        sections: [
          {
            heading: "What ClickFunnels actually does",
            paragraphs: [
              "ClickFunnels bundles funnel building, order forms/checkout, email/SMS follow-up, a basic CRM, course hosting, and community features into one platform — the pitch is replacing five or six separate tools (landing page builder, email platform, checkout, course host, CRM) with one subscription. Every plan includes unlimited funnels; what changes between tiers is contact limits, email volume, team seats, and workspaces (useful if you run funnels for multiple brands or clients from one account).",
            ],
          },
          {
            heading: "Pricing (2026)",
            table: {
              headers: ["Plan", "Price (monthly / annual)", "Contacts", "Emails/mo", "Team members", "Courses"],
              rows: [
                ["Launch", "$97 / $81 per mo", "10,000", "50,000", "2", "3"],
                ["Scale (most popular)", "$197 / $164 per mo", "75,000", "300,000", "5", "6"],
                ["Optimize", "$297 / $248 per mo", "150,000", "750,000", "10", "10"],
                ["Dominate", "$5,997/year only", "400,000", "1,200,000", "20", "20"],
              ],
            },
            paragraphs: [
              "All tiers include unlimited funnels and pages — the limits that actually matter as you grow are contacts, email sends, and team seats, not funnel count. A 14-day free trial and 30-day money-back guarantee apply, so there's effectively no-risk testing before committing.",
            ],
            tableNote:
              "Verify current pricing against clickfunnels.com/pricing before publishing — SaaS pricing tiers shift periodically.",
          },
          {
            heading: "Pros",
            bullets: [
              "Fast to launch with. The template library and funnel-first workflow mean a working funnel can go live in hours, not days, especially for common patterns (webinar funnel, product launch, lead magnet).",
              "No transaction fees. Unlike some page builders that take a cut of checkout revenue, ClickFunnels doesn't add its own fee on top of payment processor fees.",
              "Genuinely useful training built in. Russell Brunson's funnel-strategy content (Funnel Hacks, Traffic Secrets material) isn't just marketing fluff — it teaches the \"why\" behind the templates, which helps beginners avoid building funnels with no clear conversion logic.",
              "44 days risk-free. The combined trial + money-back window is longer than most competitors offer.",
            ],
          },
          {
            heading: "Cons",
            paragraphs: [
              "CRM and automation are basic — fine for a simple funnel-to-email flow, not built for businesses managing complex lead pipelines or multi-channel follow-up. Below is the actual workflow/automation builder, for reference:",
            ],
            image: {
              src: "/business-tools-images/clickfunnels/clickfunnels-workflow-automation-builder.jpg",
              alt: "ClickFunnels workflow automation builder showing a trigger, tag action, and course enrollment step with real subscriber counts",
            },
            bullets: [
              "The editor lags. This is the most consistent complaint across independent reviews — saving and previewing pages feels slower than newer builders like Systeme.io or ClickFunnels' own competitors built on more modern stacks.",
              "Expensive at entry. $97/month for the Launch tier is high compared to Systeme.io (which covers roughly 80% of entry-level ClickFunnels functionality for free) or GoHighLevel at similar pricing with stronger CRM/automation.",
              "Community/culture isn't for everyone. The Russell Brunson-centric branding and \"Funnel Hacker\" community ethos is a plus for some users and a turn-off for others — worth knowing before you commit.",
            ],
          },
          {
            heading: "Who ClickFunnels is actually for",
            paragraphs: [
              "Good fit: course creators, coaches, and digital product sellers who want a proven, funnel-first path from ad click to sale, and value having strategy training bundled with the software rather than sourced separately.",
              "Poor fit: service businesses needing appointment booking, SMS automation, or deep CRM (GoHighLevel is built for this); anyone who just needs a simple, low-cost landing page and is price-sensitive (Systeme.io's free tier covers most of that need).",
            ],
          },
          {
            heading: "ClickFunnels vs the alternatives (short version)",
            bullets: [
              "vs. Systeme.io: Systeme.io's free plan covers most entry-level ClickFunnels functionality at $0 — the tradeoff is a smaller template library and less funnel-specific training. Budget-conscious beginners should look here first.",
              "vs. GoHighLevel: Similar price range, but GoHighLevel wins on CRM depth, SMS/automation, and service-business features. ClickFunnels wins on funnel templates and conversion-focused training.",
              "vs. Kajabi: Kajabi is stronger specifically for course delivery and membership sites; ClickFunnels is stronger for sales funnels and checkout flows.",
            ],
          },
          {
            heading: "How to try it without paying full price",
            bullets: [
              "14-day free trial — full access, no charge until it converts.",
              "3 months of ClickFunnels for $99 — a discounted way to test it properly (past the point most people give up during a 14-day trial) without committing to the full monthly rate.",
            ],
          },
        ],
        faq: [
          {
            question: "Is ClickFunnels worth it in 2026?",
            answer:
              "For course creators, coaches, and digital product sellers who want proven funnel templates and don't want to build pages from scratch, yes — the funnel-first workflow and bundled training justify the price for that audience. For service businesses needing deep CRM or automation, a tool like GoHighLevel is usually a better fit.",
          },
          {
            question: "How much does ClickFunnels cost?",
            answer:
              "Plans start at $97/month (Launch tier, or $81/month billed annually), scaling to $297/month (Optimize) based on contact limits, email volume, and team seats — not funnel count, since all tiers include unlimited funnels.",
          },
          {
            question: "Does ClickFunnels have a free trial?",
            answer:
              "Yes, a 14-day free trial, combined with a 30-day money-back guarantee on paid plans — effectively 44 days to test it risk-free.",
          },
          {
            question: "What's the difference between ClickFunnels and Systeme.io?",
            answer:
              "Systeme.io offers a free plan covering roughly 80% of ClickFunnels' entry-level features, making it the better starting point for budget-conscious beginners. ClickFunnels offers a larger template library and more funnel-specific strategy training, which matters more as you scale.",
          },
          {
            question: "Is ClickFunnels good for service-based businesses?",
            answer:
              "Not particularly — its CRM and automation are basic compared to platforms built for service businesses. GoHighLevel is generally a stronger fit for trades, clinics, agencies, and similar businesses needing appointment booking and SMS follow-up.",
          },
          {
            question: "Does ClickFunnels charge transaction fees?",
            answer:
              "No — ClickFunnels doesn't take a cut of checkout revenue beyond standard payment processor fees, unlike some page builders.",
          },
        ],
        verdict:
          "ClickFunnels earns its reputation for a reason: if you're building a funnel around a course, coaching offer, or digital product, the templates and bundled training get you to a working, conversion-minded funnel faster than piecing tools together yourself. The editor's slowness and the premium price are real trade-offs, though — worth trying the $99/3-month offer before committing to the full monthly rate, especially if you're still validating an offer rather than scaling one that already works.",
      },
    },
  },
];

export function getBusinessToolBySlug(slug: string): BusinessTool | undefined {
  return businessTools.find((t) => t.slug === slug);
}
