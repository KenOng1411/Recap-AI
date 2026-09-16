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

interface BusinessToolRelatedLink {
  slug: string;
  label: string;
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
  relatedLinks?: BusinessToolRelatedLink[];
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
        relatedLinks: [
          { slug: "one-funnel-away-challenge-review", label: "One Funnel Away Challenge Review" },
          { slug: "plr-funnels-review", label: "PLR Funnels Review" },
        ],
      },
    },
  },
  {
    slug: "one-funnel-away-challenge-review",
    name: "One Funnel Away Challenge",
    categoryLabel: "Funnel Training",
    website: "https://www.onefunnelaway.com",
    affiliateUrl:
      "https://www.onefunnelaway.com/?aff=9efe802452050bb3de77c3d58f37b8c91d4c6814ce9a6ac6eb09cf5a2ecae04b",
    rating: 4.1,
    lastUpdated: "2026-09-16",
    image: "/business-tools-images/clickfunnels/clickfunnels-funnel-editor-and-stats.jpg",
    content: {
      en: {
        title: "One Funnel Away Challenge Review 2026: Is the $100 Worth It?",
        metaDescription:
          "$100 gets you 30 days of daily funnel-building missions from Russell Brunson or Trey Lewellen, plus a ClickFunnels trial. Here's what's actually inside.",
        tagline: "A $100, 30-day daily-mission program that walks you through building a real funnel, taught by Russell Brunson or Trey Lewellen.",
        intro: [
          "The One Funnel Away Challenge is a $100 (plus shipping), 30-day training program that gives you a daily \"mission\" to build a real sales funnel from scratch, taught by either Russell Brunson (digital products/info products track) or Trey Lewellen (ecommerce track), with community support and a 14-day ClickFunnels trial included to actually build what you're taught.",
          "That's what it is in one sentence. Below is exactly what the 30 days cover, who each track fits, and whether the structure is worth it versus just watching free funnel-building content on YouTube.",
        ],
        quickSummary: [
          "Price: $100 one-time, plus shipping ($19.95 US / $29.95 international) — sometimes bundled as a free add-on during ClickFunnels trial signup promos, so check the current offer before assuming you'll pay full price.",
          "Format: 30 days, split into 4 weeks of daily \"missions\" (video lessons + action steps), not a one-time course dump.",
          "Two tracks: Expert (Russell Brunson — info products, coaching, courses) or Ecom (Trey Lewellen — ecommerce/physical products).",
          "Guarantee: 30-day money-back if you complete the training and don't get the promised value.",
        ],
        sections: [
          {
            heading: "What's actually included",
            paragraphs: [
              "The 4-week structure (Expert track):",
            ],
            bullets: [
              "Week 1 — Foundation (missions 1–7): defining your offer and audience before touching any software.",
              "Week 2 — Create Your Offer (missions 8–14): building the actual product/offer stack.",
              "Week 3 — Build Your Webinar (missions 15–21): the core sales mechanism the Expert track is built around.",
              "Week 4 — Traffic & Audience (missions 22–28): getting people into the funnel you just built.",
            ],
          },
          {
            paragraphs: [
              "The Ecom track (Trey Lewellen) follows the same daily-mission format but focused on physical product funnels instead of webinars/info products.",
              "Beyond the daily lessons: a 14-day free ClickFunnels trial, so you're building the funnel in real software as you go, not just watching theory; private community access with round-the-clock support and accountability coaching; and guest trainer sessions in addition to the two main instructors. The screenshot below is the actual ClickFunnels editor you'll be building in during the challenge.",
            ],
            image: {
              src: "/business-tools-images/clickfunnels/clickfunnels-funnel-editor-and-stats.jpg",
              alt: "The ClickFunnels editor and funnel stats dashboard used to complete the One Funnel Away Challenge's daily missions",
            },
          },
          {
            heading: "Pros",
            bullets: [
              "Daily structure beats a video library. A \"watch 40 hours of course content whenever\" format has a much lower completion rate than 28 bite-sized daily missions with a deadline — the structure itself is a big part of the value here.",
              "You build a real funnel, not just a plan. Because the ClickFunnels trial is bundled in, the challenge forces you to actually publish something rather than end with a list of ideas.",
              "Track selection matters and is done right. Splitting Expert (info/webinar) from Ecom (physical product) instead of one generic track means the missions are actually relevant to what you're building, not generic marketing advice.",
              "Real accountability, not just content. Community + coaching calls address the biggest failure mode of self-paced courses: nobody finishes them alone.",
            ],
          },
          {
            heading: "Cons",
            bullets: [
              "1–2 hours/day commitment. This isn't a passive watch-and-absorb product — missing days compounds fast in a 30-day sequential structure.",
              "The free ClickFunnels trial runs out before the challenge does. 14 days of trial against a 30-day challenge means you'll likely need to commit to a paid ClickFunnels plan partway through if you want to keep building.",
              "Best fit is narrow. Digital products, coaching, courses, or straightforward ecommerce fit well; local service businesses, brick-and-mortar, or complex B2B sales cycles don't map onto either track cleanly.",
              "Won't produce overnight results. It's a structured starting point, not a shortcut — the \"2,000+ Two Comma Club members took this challenge\" stat reflects people who kept building long after day 30, not results from the challenge alone.",
            ],
          },
          {
            heading: "Who should (and shouldn't) take it",
            paragraphs: [
              "Good fit: someone with an idea for a digital product, course, coaching offer, or ecommerce product who needs structure and a deadline to actually launch — not someone who needs more funnel theory, but someone who needs to be forced to publish.",
              "Poor fit: anyone expecting a passive course they can binge later, local/service businesses without a clear digital or ecommerce offer, and complex B2B sales that don't fit a single-funnel model.",
            ],
          },
        ],
        faq: [
          {
            question: "How much does the One Funnel Away Challenge actually cost?",
            answer:
              "$100 one-time, plus shipping ($19.95 US, $29.95 international) for physical materials. It's sometimes offered as a free bonus during ClickFunnels trial signup promotions — check the current offer before assuming the base price applies.",
          },
          {
            question: "Do I need a ClickFunnels subscription to do the challenge?",
            answer:
              "You get a 14-day free ClickFunnels trial as part of the challenge, which is enough to complete the software portions of most early missions. Since the challenge runs 30 days, you may need to continue on a paid ClickFunnels plan to finish building past day 14.",
          },
          {
            question: "What's the difference between the Expert and Ecom tracks?",
            answer:
              "Expert (taught by Russell Brunson) focuses on info products, coaching, and webinar-based sales funnels. Ecom (taught by Trey Lewellen) focuses on funnels for physical/ecommerce products. Pick based on what you're actually selling, not which instructor you've heard of.",
          },
          {
            question: "Is there a refund if the challenge doesn't work for me?",
            answer:
              "Yes — a 30-day money-back guarantee applies if you complete the training and don't get the promised value.",
          },
          {
            question: "How much time does the challenge take per day?",
            answer:
              "Expect roughly 1–2 hours per day across the 30 days — it's a daily-mission format, not a self-paced binge course, so consistent daily time is part of how it's designed to work.",
          },
          {
            question: "Is the One Funnel Away Challenge good for a local service business?",
            answer:
              "Not really — both tracks are built around digital products, courses, coaching, or ecommerce funnels. Local/service businesses without a clear digital offer won't get as much direct value from either track.",
          },
        ],
        verdict:
          "The $100 price tag is almost beside the point — what you're actually paying for is a deadline and daily structure that most people don't build for themselves. If you already have an idea for what you're selling and just need to be forced to actually launch it in 30 days instead of planning indefinitely, the challenge format works. If you're still figuring out what to sell, the structure will feel rushed rather than helpful — sort that out first, then take the challenge.",
        relatedLinks: [
          { slug: "clickfunnels", label: "ClickFunnels Review" },
          { slug: "plr-funnels-review", label: "PLR Funnels Review" },
        ],
      },
    },
  },
  {
    slug: "plr-funnels-review",
    name: "PLR Funnels",
    categoryLabel: "Done-For-You Funnels",
    website: "https://www.plrfunnels.com",
    affiliateUrl: "https://www.plrfunnels.com/plr-wf?aff=9efe802452050bb3de77c3d58f37b8c91d4c6814ce9a6ac6eb09cf5a2ecae04b",
    rating: 3.9,
    lastUpdated: "2026-09-16",
    image: "/business-tools-images/clickfunnels/clickfunnels-workflow-automation-builder.jpg",
    content: {
      en: {
        title: "PLR Funnels Review 2026: 52 Done-For-You Funnels — Worth $797?",
        metaDescription:
          "52 private-label funnels, sales copy, and email sequences you can relabel as your own — here's what PLR Funnels actually includes and who it's realistically for.",
        tagline: "A one-time bundle of 52 private-label-rights funnels you relabel as your own and deploy into ClickFunnels.",
        intro: [
          "PLR Funnels is a one-time bundle of 52 private-label-rights funnels — pre-built sales pages, upsells, downsells, email sequences, and ad copy across multiple niches — that you relabel as your own and plug directly into a ClickFunnels account. It's priced as a one-time purchase (reported around $797, or three payments of roughly $297) rather than a subscription, but it requires an active ClickFunnels plan to actually use the funnels.",
          "That's the core offer. Below is what's actually in the bundle, the catch most reviews mention, and who this realistically makes sense for.",
        ],
        quickSummary: [
          "What it is: 52 done-for-you funnels with private label rights (PLR) — meaning you can edit, rebrand, and resell the content as your own.",
          "Price: Reported as a one-time payment (around $797) or a 3-payment plan (~$297 each) — confirm exact current pricing before publishing, since the official page reveals pricing only after a webinar registration rather than listing it upfront.",
          "Requirement: You need an active ClickFunnels subscription ($97+/month) to actually deploy the funnels — this is an add-on to ClickFunnels, not a standalone product.",
          "What's bundled beyond the funnels: sales copy, email sequences, ad templates, social posts, and a year of coaching support per most third-party reviews.",
        ],
        sections: [
          {
            heading: "What's actually in the bundle",
            bullets: [
              "52 pre-built funnels spanning multiple niches, described as \"finished products\" rather than blank templates — the products themselves (not just the funnel structure) are included.",
              "Sales pages, upsells, and downsells already written — the core conversion copy is done, not just page layout.",
              "Email sequences to follow up with leads/buyers for each funnel.",
              "Ad copy and social media posts to drive traffic into the funnels.",
              "Private label rights — the defining feature: you can edit, relabel, and even translate the content, then present it as your own product rather than reselling it \"as PLR\" the way some cheaper PLR packs work.",
            ],
          },
          {
            heading: "The catch worth knowing before buying",
            paragraphs: ["Two things every honest review of this product flags:"],
            bullets: [
              "You need ClickFunnels to use it. The funnels are built for ClickFunnels' platform — buying PLR Funnels without an active ClickFunnels subscription means you own 52 funnels you can't actually deploy anywhere. Factor the ongoing $97+/month into the real cost, not just the one-time purchase price.",
              "\"Plug-and-play\" is optimistic — it's closer to \"plug-and-improve.\" The funnels are a genuine head start, not a finished, ready-to-profit business. Generic PLR copy performs best after some customization to your specific angle, audience, or offer — treating it as truly plug-and-play tends to underperform compared to putting in editing time first.",
            ],
          },
          {
            heading: "Who this is actually for",
            paragraphs: [
              "Good fit: existing ClickFunnels users who want a fast starting point across multiple niches — either to launch something new without writing from scratch, or to study 52 examples of funnel structure and copy as a learning resource.",
              "Poor fit: anyone without a ClickFunnels subscription already (the ongoing cost changes the math significantly), and anyone expecting to publish the funnels unedited and generate income immediately — the customization step is real work, not optional polish.",
            ],
          },
        ],
        faq: [
          {
            question: "Do I need ClickFunnels to use PLR Funnels?",
            answer:
              "Yes — the 52 funnels are built to plug directly into a ClickFunnels account. Without an active ClickFunnels subscription, you can't deploy them, so the real cost includes the ongoing ClickFunnels plan, not just the one-time PLR Funnels price.",
          },
          {
            question: "What does \"PLR\" mean in PLR Funnels?",
            answer:
              "Private Label Rights — you're licensed to edit, rebrand, and present the funnels, sales copy, and emails as your own rather than reselling them labeled as someone else's product.",
          },
          {
            question: "Can I really just plug these in and start selling?",
            answer:
              "Technically yes, but most reviews (and this one) recommend customizing the copy and offer first — generic, unedited PLR content tends to underperform compared to funnels adapted to your specific audience and angle.",
          },
          {
            question: "How much does PLR Funnels cost?",
            answer:
              "Third-party pricing reports put it around $797 one-time, or roughly $297 across three payments — the official page reveals exact current pricing after a webinar registration rather than listing it upfront, so confirm the live price before treating this as final.",
          },
          {
            question: "What's included besides the 52 funnels?",
            answer:
              "Sales pages, upsells, downsells, email sequences, ad copy, and social media post templates for each funnel, plus coaching support per most third-party reviews.",
          },
          {
            question: "Is PLR Funnels worth it for someone new to ClickFunnels?",
            answer:
              "It can be, but factor in that you're committing to two costs at once — the PLR Funnels purchase and an ongoing ClickFunnels subscription. If you're not sure ClickFunnels is right for you yet, start with the free trial or the $99/3-month offer first, then consider PLR Funnels once you know you'll keep using the platform.",
          },
        ],
        verdict:
          "PLR Funnels solves a real problem — starting from a blank ClickFunnels account is slow, and 52 done-for-you funnels genuinely compress that timeline. The honest caveat is that it's an accelerant for an existing ClickFunnels workflow, not a standalone business-in-a-box: you still need the ClickFunnels subscription to use it and still need to customize the generic copy to convert well. Worth it for existing ClickFunnels users who want a faster starting point across several niches; not the right first purchase for someone who hasn't committed to ClickFunnels yet.",
        relatedLinks: [
          { slug: "clickfunnels", label: "ClickFunnels Review" },
          { slug: "one-funnel-away-challenge-review", label: "One Funnel Away Challenge Review" },
        ],
      },
    },
  },
];

export function getBusinessToolBySlug(slug: string): BusinessTool | undefined {
  return businessTools.find((t) => t.slug === slug);
}
