interface ToolLogoProps {
  name: string;
  size?: number;
}

// Không dùng logo thương hiệu thật (tránh vi phạm bản quyền khi chưa có asset chính thức).
// Hiển thị monogram nhất quán bằng accent color — thay bằng logo thật khi có ảnh chính thức.
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
