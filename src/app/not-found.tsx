import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center gap-4 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Page not found / Page introuvable
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. / La page que vous cherchez
        n&apos;existe pas.
      </p>
      <Link
        href="/en/"
        className="mt-2 inline-flex items-center rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-on-accent hover:bg-accent-hover"
      >
        English
      </Link>
      <Link href="/fr/" className="text-sm font-semibold text-accent hover:text-accent-hover">
        Français
      </Link>
    </div>
  );
}
