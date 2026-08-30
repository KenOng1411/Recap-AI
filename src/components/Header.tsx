"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X, Translate } from "@phosphor-icons/react";
import { siteConfig, NAV_PATHS } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const otherLocale = locales.find((l) => l !== locale)!;

  const segments = pathname.split("/");
  segments[1] = otherLocale;
  const otherLocalePath = segments.join("/") || `/${otherLocale}/`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="text-lg font-bold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_PATHS.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {dict.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle
            toggleToLightLabel={dict.theme.toggleToLight}
            toggleToDarkLabel={dict.theme.toggleToDark}
          />
          <Link
            href={otherLocalePath}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-accent sm:inline-flex"
          >
            <Translate size={16} aria-hidden="true" />
            {dict.langSwitch}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-surface md:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV_PATHS.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                {dict.nav[link.key]}
              </Link>
            ))}
            <Link
              href={otherLocalePath}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
            >
              <Translate size={16} aria-hidden="true" />
              {dict.langSwitch}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
