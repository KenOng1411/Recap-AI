import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { affiliateDisclosure } from "@/data/legal";
import { LegalDocPage } from "@/components/LegalDocPage";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/disclosure">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = withLocaleFallback(affiliateDisclosure, locale);
  return { title: doc.title, description: doc.intro };
}

export default async function DisclosurePage({ params }: PageProps<"/[locale]/disclosure">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalDocPage doc={withLocaleFallback(affiliateDisclosure, locale)} locale={locale} />;
}
