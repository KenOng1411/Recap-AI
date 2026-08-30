import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, Flask, Star, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { isLocale, withLocaleFallback } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { methodology } from "@/data/methodology";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/review-methodology">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const content = withLocaleFallback(methodology, locale);
  return { title: dict.methodology.title, description: content.intro };
}

export default async function MethodologyPage({
  params,
}: PageProps<"/[locale]/review-methodology">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const content = withLocaleFallback(methodology, locale);

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{dict.methodology.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{content.intro}</p>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <CheckCircle size={22} weight="bold" className="text-accent" aria-hidden="true" />
          {content.criteriaTitle}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.criteria.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <Flask size={22} weight="bold" className="text-accent" aria-hidden="true" />
          {content.processTitle}
        </h2>
        <ol className="mt-5 flex flex-col gap-4">
          {content.process.map((step, i) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-surface-muted p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Star size={20} weight="fill" className="text-star" aria-hidden="true" />
          {content.ratingTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.ratingBody}</p>
      </section>

      <section className="mt-6 rounded-2xl border border-border bg-surface-muted p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <ShieldCheck size={20} weight="bold" className="text-accent" aria-hidden="true" />
          {content.disclosureTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.disclosureBody}</p>
      </section>
    </div>
  );
}
