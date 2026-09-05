import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { termsOfService } from "@/data/legal";
import { LegalDocPage } from "@/components/LegalDocPage";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = withLocaleFallback(termsOfService, locale);
  return {
    title: doc.title,
    description: doc.intro,
    alternates: buildAlternates(locale, "/terms"),
  };
}

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalDocPage doc={withLocaleFallback(termsOfService, locale)} locale={locale} />;
}
