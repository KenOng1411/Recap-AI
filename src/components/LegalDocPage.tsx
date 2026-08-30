import { getDictionary, t } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { LegalDoc } from "@/data/legal";

const dateLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR" };

export function LegalDocPage({ doc, locale }: { doc: LegalDoc; locale: Locale }) {
  const dict = getDictionary(locale);
  const formattedDate = new Date(doc.lastUpdated).toLocaleDateString(dateLocale[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{doc.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {t(dict.legal.lastUpdated, { date: formattedDate })}
      </p>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{doc.intro}</p>

      <div className="mt-10 flex flex-col gap-8">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
            <div className="mt-2.5 flex flex-col gap-2.5">
              {section.body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
