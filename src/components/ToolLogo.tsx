interface ToolLogoProps {
  name: string;
  size?: number;
}

// Generic monogram avatar — used for the author avatar, and as the fallback
// when a real tool icon (see ToolIcon) fails to load.
export function ToolLogo({ name, size = 48 }: ToolLogoProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-xl bg-accent-soft font-semibold text-accent"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}
