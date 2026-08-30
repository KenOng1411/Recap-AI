"use client";

import { useState } from "react";
import { getFaviconUrl } from "@/lib/favicon";
import type { Platform } from "@/data/platforms";

function PlatformLogo({ name, domain }: Platform) {
  const url = getFaviconUrl(`https://${domain}`, 64);
  const [failed, setFailed] = useState(false);

  if (!url || failed) return null;

  return (
    <div className="flex items-center gap-2 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      {/* eslint-disable-next-line @next/next/no-img-element -- external, non-optimizable favicon URL */}
      <img
        src={url}
        alt=""
        width={22}
        height={22}
        className="rounded-md bg-white p-0.5"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  );
}

export function PlatformsStrip({ label, platforms }: { label: string; platforms: Platform[] }) {
  return (
    <div className="border-y border-border bg-surface-muted">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:gap-8">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {platforms.map((platform) => (
            <PlatformLogo key={platform.domain} {...platform} />
          ))}
        </div>
      </div>
    </div>
  );
}
