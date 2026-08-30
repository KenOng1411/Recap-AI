import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { privacyPolicy } from "@/data/legal";
import { LegalDocPage } from "@/components/LegalDocPage";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy-policy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const doc = privacyPolicy[locale];
  return { title: doc.title, description: doc.intro };
}

export default async function PrivacyPolicyPage({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalDocPage doc={privacyPolicy[locale]} locale={locale} />;
}
