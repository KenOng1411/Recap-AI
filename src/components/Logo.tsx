import Image from "next/image";

// Real brand mark (public/brand/logo-icon.png), on a white backing so the
// dark navy icon stays visible against the dark theme's near-black surfaces.
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_16px_-4px_var(--color-accent-shadow)]"
      style={{ width: size, height: size, padding: size * 0.14 }}
    >
      <Image
        src="/brand/logo-icon.png"
        alt=""
        width={128}
        height={136}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}
