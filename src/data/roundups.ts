// "Best Of" roundup data — combines several tools under one topic.
// These 3 are sample posts to demo the template; add more by pushing to the array below.

import type { Locale } from "@/i18n/config";

interface RoundupContent {
  title: string;
  description: string;
}

export interface RoundupItem {
  slug: string; // must match tools.ts
  // Only en/fr translated so far; other locales fall back to English.
  blurb: Partial<Record<Locale, string>>; // 1-2 sentences on why this tool made the list
}

export interface Roundup {
  slug: string;
  updatedAt: string; // ISO date
  content: Partial<Record<Locale, RoundupContent>>;
  items: RoundupItem[];
}

export const roundups: Roundup[] = [
  {
    slug: "best-ai-writing-tools",
    updatedAt: "2026-08-01",
    content: {
      en: {
        title: "5 best AI writing tools",
        description:
          "A roundup of the highest-rated AI writing tools right now, from blog posts and ads to social media content.",
      },
      fr: {
        title: "5 meilleurs outils IA de rédaction",
        description:
          "Une sélection des outils IA de rédaction les mieux notés du moment, pour articles de blog, publicités et réseaux sociaux.",
      },
    },
    items: [
      {
        slug: "chatgpt",
        blurb: {
          en: "The most flexible option, suited to nearly any content type thanks to high customizability.",
          fr: "L'option la plus flexible, adaptée à presque tous les formats grâce à une forte personnalisation.",
        },
      },
      {
        slug: "claude",
        blurb: {
          en: "Natural, coherent writing style — great for long-form, in-depth pieces.",
          fr: "Style d'écriture naturel et cohérent — parfait pour les textes longs et approfondis.",
        },
      },
      {
        slug: "jasper",
        blurb: {
          en: "Strong for team marketing content while keeping a consistent brand voice.",
          fr: "Idéal pour le contenu marketing en équipe tout en gardant une voix de marque cohérente.",
        },
      },
      {
        slug: "copy-ai",
        blurb: {
          en: "Has a free tier, great for individuals and freelancers getting started.",
          fr: "Dispose d'une version gratuite, parfait pour débuter en freelance ou en solo.",
        },
      },
      {
        slug: "notion-ai",
        blurb: {
          en: "Convenient if you already use Notion — draft and summarize right in your workspace.",
          fr: "Pratique si vous utilisez déjà Notion — rédigez et résumez directement dans votre espace.",
        },
      },
    ],
  },
  {
    slug: "best-ai-image-generators-for-designers",
    updatedAt: "2026-08-01",
    content: {
      en: {
        title: "Best AI image generators for designers",
        description:
          "Comparing the AI image tools most worth using for designers, from artistic quality to precise text rendering.",
      },
      fr: {
        title: "Meilleurs générateurs d'images IA pour designers",
        description:
          "Comparatif des outils IA d'images les plus intéressants pour les designers, entre qualité artistique et rendu de texte précis.",
      },
    },
    items: [
      {
        slug: "midjourney",
        blurb: {
          en: "Top-tier artistic image quality, a favorite among designers.",
          fr: "Qualité artistique de premier plan, plébiscité par les designers.",
        },
      },
      {
        slug: "ideogram",
        blurb: {
          en: "Stands out when you need accurate text/typography rendered inside an image.",
          fr: "Se distingue quand il faut un rendu de texte/typographie précis dans l'image.",
        },
      },
      {
        slug: "canva-ai",
        blurb: {
          en: "Convenient for fast design work, built right into Canva.",
          fr: "Pratique pour des créations rapides, intégré directement à Canva.",
        },
      },
    ],
  },
  {
    slug: "best-ai-coding-tools",
    updatedAt: "2026-08-01",
    content: {
      en: {
        title: "Best AI coding tools for developers",
        description:
          "Reviewing the most popular AI coding assistants, helping developers write code faster with fewer bugs.",
      },
      fr: {
        title: "Meilleurs outils IA de code pour développeurs",
        description:
          "Comparatif des assistants IA de code les plus populaires, pour coder plus vite avec moins de bugs.",
      },
    },
    items: [
      {
        slug: "cursor",
        blurb: {
          en: "The smoothest AI coding experience since it was built for exactly that.",
          fr: "L'expérience de code IA la plus fluide, car pensée pour cela dès le départ.",
        },
      },
      {
        slug: "github-copilot",
        blurb: {
          en: "Deeply integrated into popular IDEs, with context-aware suggestions.",
          fr: "Profondément intégré aux IDE populaires, avec des suggestions sensibles au contexte.",
        },
      },
      {
        slug: "claude",
        blurb: {
          en: "Strong reasoning, great for debugging and refactoring complex logic.",
          fr: "Raisonnement solide, idéal pour déboguer et refactoriser une logique complexe.",
        },
      },
      {
        slug: "chatgpt",
        blurb: {
          en: "Versatile — handy when you need both technical Q&A and fast code snippets.",
          fr: "Polyvalent — pratique pour des questions techniques et des extraits de code rapides.",
        },
      },
    ],
  },
];

export function getRoundupBySlug(slug: string): Roundup | undefined {
  return roundups.find((r) => r.slug === slug);
}
