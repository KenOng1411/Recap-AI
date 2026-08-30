"use client";

import { useState } from "react";
import { getFaviconUrl } from "@/lib/favicon";
import { ToolLogo } from "./ToolLogo";

interface ToolIconProps {
  name: string;
  website: string;
  size?: number;
}

// Shows the tool's real favicon (deep-linked, not hosted by us — see lib/favicon.ts),
// on a fixed light backing so dark-on-transparent brand marks stay visible in dark
// mode too. Falls back to a monogram if the favicon fails to load.
export function ToolIcon({ name, website, size = 48 }: ToolIconProps) {
  const faviconUrl = getFaviconUrl(website, Math.max(size * 2, 64));
  const [failed, setFailed] = useState(false);

  if (!faviconUrl || failed) {
    return <ToolLogo name={name} size={size} />;
  }

  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-border"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- external, non-optimizable favicon URL */}
      <img
        src={faviconUrl}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain p-1.5"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
