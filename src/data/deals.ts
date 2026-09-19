// Deals page data — empty by default, push an object onto the array once you have a real deal.

import type { Locale } from "@/i18n/config";

interface DealContent {
  title: string; // e.g. "30% off your first year"
  description: string;
}

export interface Deal {
  slug: string; // ideally matches tools.ts if the deal belongs to a reviewed tool
  toolName: string;
  code?: string;
  expiresAt?: string; // ISO date, omit if the deal has no expiry
  verifiedAt: string; // ISO date — shown publicly on the card, not just an internal note.
  // These are real billing offers (annual pricing, time-limited promos), not coupon
  // codes, so they can drift — re-verify periodically rather than treat as stable.
  affiliateUrl: string;
  content: Partial<Record<Locale, DealContent>>;
}

export const deals: Deal[] = [
  {
    slug: "getimg-ai",
    toolName: "getimg.ai",
    verifiedAt: "2026-09-19",
    affiliateUrl: "https://refer.getimg.ai/huy-ong",
    content: {
      en: {
        title: "15-20% off with annual billing",
        description:
          "Entry drops from $10 to $8/month, Plus from $65 to $55/month when you pay yearly instead of monthly. No code needed — just choose \"Annual\" at signup.",
      },
    },
  },
  {
    slug: "revid-ai",
    toolName: "Revid AI",
    verifiedAt: "2026-09-19",
    affiliateUrl: "https://www.revid.ai/?via=huy-ong",
    content: {
      en: {
        title: "Growth plan discounted from $99 to $39/month",
        description:
          "Revid AI's Growth tier (2,000 credits, direct publishing to TikTok/Instagram/YouTube, 100+ tools) is currently priced at $39/month instead of $99/month — Revid AI's own pricing page describes it as \"discount locked in forever,\" though how long that holds isn't guaranteed, so it's worth re-checking before you commit to an annual plan.",
      },
    },
  },
  {
    slug: "fliki",
    toolName: "Fliki",
    verifiedAt: "2026-09-19",
    affiliateUrl: "https://fliki.ai/?via=recapai",
    content: {
      en: {
        title: "~25% cheaper with annual billing",
        description:
          "Standard drops to $21/month (from $28/month), Premium to $66/month (from $88/month) when billed yearly instead of monthly.",
      },
    },
  },
  {
    slug: "midjourney",
    toolName: "Midjourney",
    verifiedAt: "2026-09-19",
    affiliateUrl: "https://www.midjourney.com",
    content: {
      en: {
        title: "20% off with annual billing",
        description:
          "Basic drops from $10 to $8/month, Standard from $30 to $24/month, Pro from $60 to $48/month, Mega from $120 to $96/month when paid yearly. Midjourney doesn't run an affiliate program for this site — this links directly to their own pricing page.",
      },
    },
  },
];
