import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SealCheck, Target, Rocket, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { mediaKit } from "@/data/mediaKit";
import { ContactForm } from "@/components/ContactForm";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/partner-with-us">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const content = withLocaleFallback(mediaKit, locale);
  return {
    title: dict.partner.title,
    description: content.intro,
    alternates: buildAlternates(locale, "/partner-with-us"),
  };
}

export default async function PartnerPage({ params }: PageProps<"/[locale]/partner-with-us">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const content = withLocaleFallback(mediaKit, locale);

  return (
    <div className="container-page max-w-3xl py-14">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
        <Rocket size={13} weight="bold" aria-hidden="true" />
        {content.status}
      </span>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {dict.partner.title}
      </h1>
      <p className="mt-2 text-muted-foreground">{dict.partner.subtitle}</p>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{content.intro}</p>

      {/*
        Intentionally no traffic/analytics block here. Do not add placeholder
        numbers — add a real stats section only once real analytics exist to show.
      */}

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {content.cadenceLabel}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{content.cadence}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {content.focusLabel}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{content.focus}</p>
        </div>
      </div>

      <section className="mt-10 rounded-2xl border border-border bg-surface-muted p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <SealCheck size={20} weight="bold" className="text-accent" aria-hidden="true" />
          {content.credibilityTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {content.credibilityBody}
        </p>
        <Link
          href={`/${locale}/review-methodology`}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
        >
          {dict.partner.methodologyLinkText}
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <Target size={22} weight="bold" className="text-accent" aria-hidden="true" />
          {content.tiersTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.tiersIntro}</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.tiers.map((tier) => (
            <div key={tier.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
              <div>
                <h3 className="font-semibold text-foreground">{tier.title}</h3>
                <p className="mt-0.5 text-xs font-medium text-accent">{tier.stage}</p>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <ArrowRight size={14} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">{dict.partner.contactTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {dict.partner.contactIntro}
        </p>
        <div className="mt-6">
          <ContactForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
