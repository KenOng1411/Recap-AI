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
  affiliateUrl: string;
  content: Record<Locale, DealContent>;
}

export const deals: Deal[] = [];
