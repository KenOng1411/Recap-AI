import Link from "next/link";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { siteConfig, NAV_PATHS, TRUST_NAV_PATHS, PARTNERSHIPS_EMAIL } from "@/data/site";
import { getDictionary, t } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="mt-24 border-t border-border bg-surface-muted">
      <div className="container-page flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-foreground">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline[locale]}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div className="flex flex-col gap-2.5">
              <p className="text-sm font-semibold text-foreground">{dict.footer.navTitle}</p>
              {NAV_PATHS.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  {dict.nav[link.key]}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-sm font-semibold text-foreground">{dict.footer.trustTitle}</p>
              {TRUST_NAV_PATHS.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  {dict.nav[link.key]}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-sm font-semibold text-foreground">{dict.footer.followTitle}</p>
              <a
                href={`mailto:${PARTNERSHIPS_EMAIL}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
              >
                <EnvelopeSimple size={16} />
                {PARTNERSHIPS_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{t(dict.footer.disclosure, { site: siteConfig.name })}</p>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
