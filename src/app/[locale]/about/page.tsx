import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TiktokLogo, YoutubeLogo, FacebookLogo, XLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import { isLocale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/dictionaries";
import { ToolLogo } from "@/components/ToolLogo";
import { siteConfig, CONTACT_EMAIL } from "@/data/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.about.title, description: t(dict.about.introBody, { site: siteConfig.name }) };
}

// TODO: replace all placeholder copy below with your real bio, experience, and links.
const socialLinks = [
  { href: siteConfig.social.twitter, label: "X (Twitter)", icon: XLogo },
  { href: siteConfig.social.youtube, label: "YouTube", icon: YoutubeLogo },
  { href: siteConfig.social.tiktok, label: "TikTok", icon: TiktokLogo },
  { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookLogo },
];

const experience: Record<string, string[]> = {
  en: [
    "TODO: your real years of hands-on experience with AI tools.",
    "TODO: the AI areas you know best (e.g. AI writing, AI image generation, AI coding...).",
    "TODO: notable achievements/channels if any (follower count, views, past collaborations...).",
  ],
  fr: [
    "TODO : vos années réelles d'expérience pratique avec les outils IA.",
    "TODO : les domaines IA que vous maîtrisez le mieux (ex. rédaction IA, image IA, code IA...).",
    "TODO : réalisations/chaînes notables si besoin (nombre d'abonnés, vues, collaborations passées...).",
  ],
};

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="container-page max-w-3xl py-14">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <ToolLogo name={siteConfig.author.name} size={72} />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {siteConfig.author.name}
          </h1>
          <p className="mt-1 text-muted-foreground">{siteConfig.author.role}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">{dict.about.intro}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {t(dict.about.introBody, { site: siteConfig.name })}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">{dict.about.experience}</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {experience[locale].map((line) => (
            <li
              key={line}
              className="rounded-xl border border-dashed border-border bg-surface-muted px-4 py-3 text-sm text-muted-foreground"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">{dict.about.connect}</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Envelope size={16} aria-hidden="true" />
            {dict.about.email}
          </a>
        </div>
      </section>
    </div>
  );
}
