import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { termsOfService } from "@/data/legal";
import { LegalDocPage } from "@/components/LegalDocPage";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = termsOfService[locale];
  return { title: doc.title, description: doc.intro };
}

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalDocPage doc={termsOfService[locale]} locale={locale} />;
}
