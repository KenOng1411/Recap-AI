import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { privacyPolicy } from "@/data/legal";
import { LegalDocPage } from "@/components/LegalDocPage";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy-policy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = withLocaleFallback(privacyPolicy, locale);
  return {
    title: doc.title,
    description: doc.intro,
    alternates: buildAlternates(locale, "/privacy-policy"),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalDocPage doc={withLocaleFallback(privacyPolicy, locale)} locale={locale} />;
}
