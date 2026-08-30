"use client";

import { useId } from "react";

// Original geometric "T" monogram — gradient + glass highlight + soft glow for a
// premium feel. Pure SVG, no third-party or borrowed brand assets.
export function Logo({ size = 40 }: { size?: number }) {
  const uid = useId();
  const gradientId = `toolzi-logo-grad-${uid}`;
  const glossId = `toolzi-logo-gloss-${uid}`;
  const shadowId = `toolzi-logo-shadow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="55%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <radialGradient id={glossId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(90) scale(20 26)">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={shadowId} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4c1d95" floodOpacity="0.45" />
        </filter>
      </defs>

      <rect x="2" y="2" width="36" height="36" rx="11" fill={`url(#${gradientId})`} filter={`url(#${shadowId})`} />
      <rect x="2" y="2" width="36" height="36" rx="11" fill={`url(#${glossId})`} />
      <rect x="2.5" y="2.5" width="35" height="35" rx="10.5" stroke="#ffffff" strokeOpacity="0.12" />

      {/* Geometric "T" monogram */}
      <rect x="10" y="11" width="20" height="5.2" rx="2.6" fill="white" />
      <rect x="17.4" y="15.2" width="5.2" height="14.6" rx="2.6" fill="white" />

      {/* Accent spark */}
      <path
        d="M29.5 8.2c.25 1.3 1.05 2.1 2.35 2.35-1.3.25-2.1 1.05-2.35 2.35-.25-1.3-1.05-2.1-2.35-2.35 1.3-.25 2.1-1.05 2.35-2.35Z"
        fill="white"
        fillOpacity="0.85"
      />
    </svg>
  );
}
