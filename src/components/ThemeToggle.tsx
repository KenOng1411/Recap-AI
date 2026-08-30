"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

interface ThemeToggleProps {
  toggleToLightLabel: string;
  toggleToDarkLabel: string;
}

export function ThemeToggle({ toggleToLightLabel, toggleToDarkLabel }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // One-time sync from the DOM (set by the no-flash script before hydration) —
    // intentionally not derived during render, since `document` isn't available on the server.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode, blocked cookies) — theme just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? toggleToLightLabel : toggleToDarkLabel}
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-muted hover:text-accent"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
