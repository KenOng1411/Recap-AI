import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "RecapAI",
  robots: { index: false, follow: true },
};

export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}/`} />
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-32 text-center">
        <p className="text-muted-foreground">Redirecting…</p>
        <a href={`/${defaultLocale}/`} className="font-semibold text-accent hover:text-accent-hover">
          Continue to RecapAI →
        </a>
      </div>
    </>
  );
}
