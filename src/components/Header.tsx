"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X, Translate, Check } from "@phosphor-icons/react";
import { siteConfig, NAV_PATHS } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

function pathForLocale(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = targetLocale;
  return segments.join("/") || `/${targetLocale}/`;
}

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const dict = getDictionary(locale);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          <div className="relative hidden sm:block" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-accent"
            >
              <Translate size={16} aria-hidden="true" />
              {localeNames[locale]}
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-[0_12px_40px_-12px_var(--color-accent-shadow)]"
              >
                {locales.map((l) => (
                  <li key={l}>
                    <Link
                      href={pathForLocale(pathname, l)}
                      role="option"
                      aria-selected={l === locale}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center justify-between px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-surface-muted"
                    >
                      {localeNames[l]}
                      {l === locale && <Check size={14} weight="bold" className="text-accent" />}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

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
            <div className="mt-2 border-t border-border pt-2">
              <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Translate size={12} className="mr-1 inline" aria-hidden="true" />
                Language
              </p>
              <div className="flex flex-wrap gap-1.5 px-3">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={pathForLocale(pathname, l)}
                    onClick={() => setOpen(false)}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                      l === locale
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
