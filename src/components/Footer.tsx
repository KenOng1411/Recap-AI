import Link from "next/link";
import { TiktokLogo, YoutubeLogo, FacebookLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { siteConfig, NAV_PATHS, TRUST_NAV_PATHS } from "@/data/site";
import { getDictionary, t } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const socialLinks = [
  { href: siteConfig.social.twitter, label: "X (Twitter)", icon: XLogo },
  { href: siteConfig.social.youtube, label: "YouTube", icon: YoutubeLogo },
  { href: siteConfig.social.tiktok, label: "TikTok", icon: TiktokLogo },
  { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookLogo },
];

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
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
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
