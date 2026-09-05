import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { tools } from "@/data/tools";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]/tools">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.tools.title,
    description: t(dict.tools.subtitle, { count: tools.length }),
    alternates: buildAlternates(locale, "/tools"),
  };
}

export default function ToolsLayout({ children }: LayoutProps<"/[locale]/tools">) {
  return children;
}
