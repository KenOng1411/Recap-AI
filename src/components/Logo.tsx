import Image from "next/image";

// Real brand lockup (public/brand/logo-full.png — icon + "RecapAI" wordmark),
// on a white backing so its fixed dark navy text/icon stays visible against
// the dark theme's near-black surfaces.
const LOGO_ASPECT = 643 / 136; // logo-full.png's natural width/height ratio

export function Logo({ size = 40 }: { size?: number }) {
  const height = size;
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <div
      className="flex shrink-0 items-center rounded-xl bg-white shadow-[0_4px_16px_-4px_var(--color-accent-shadow)]"
      style={{ height, paddingLeft: height * 0.22, paddingRight: height * 0.22 }}
    >
      <Image
        src="/brand/logo-full.png"
        alt="RecapAI"
        width={width}
        height={height}
        className="h-[70%] w-auto object-contain"
        priority
      />
    </div>
  );
}
