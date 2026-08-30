"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

// The root <html> lives outside the [locale] segment, so it can't read the
// locale param directly. This corrects `lang` after mount to match the route.
export function SyncHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
