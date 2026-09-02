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
  {
    slug: "best-ai-text-to-video-generators",
    updatedAt: "2026-09-02",
    content: {
      en: {
        title: "Best AI text-to-video generators",
        description:
          "Comparing the top tools for turning a script, topic, or blog post into a fully narrated, ready-to-publish video.",
      },
      fr: {
        title: "Meilleurs générateurs IA texte-vers-vidéo",
        description:
          "Comparatif des meilleurs outils pour transformer un script, un sujet ou un article de blog en vidéo narrée prête à publier.",
      },
    },
    items: [
      {
        slug: "fliki",
        blurb: {
          en: "The fastest path from a script or blog URL to a fully narrated video, with 2,000+ voices in 80+ languages.",
          fr: "Le chemin le plus rapide d'un script ou d'une URL de blog à une vidéo narrée, avec 2 000+ voix en 80+ langues.",
        },
      },
      {
        slug: "heygen",
        blurb: {
          en: "Best when you need a talking AI avatar on screen rather than voiceover-over-visuals.",
          fr: "Idéal quand il faut un avatar IA qui parle à l'écran plutôt qu'une voix off sur des visuels.",
        },
      },
      {
        slug: "invideo-ai",
        blurb: {
          en: "Template-driven, good fit for marketing and social clips built from a script.",
          fr: "Piloté par modèles, bien adapté aux clips marketing et réseaux sociaux à partir d'un script.",
        },
      },
      {
        slug: "synthesia",
        blurb: {
          en: "Strong for corporate training and L&D videos with a consistent presenter avatar.",
          fr: "Solide pour les vidéos de formation d'entreprise avec un avatar présentateur cohérent.",
        },
      },
    ],
  },
  {
    slug: "best-ai-presentation-tools",
    updatedAt: "2026-09-02",
    content: {
      en: {
        title: "Best AI presentation tools",
        description:
          "Comparing AI tools that turn a prompt, PDF, or existing document into an editable slide deck.",
      },
      fr: {
        title: "Meilleurs outils IA de présentation",
        description:
          "Comparatif des outils IA qui transforment une consigne, un PDF ou un document existant en diaporama éditable.",
      },
    },
    items: [
      {
        slug: "popai",
        blurb: {
          en: "Best when you're starting from a document — uploads a PDF/Word file and drafts a structured deck from it, with document chat and image generation in the same workspace.",
          fr: "Idéal en partant d'un document — importe un PDF/Word et en tire un diaporama structuré, avec chat de document et génération d'images dans le même espace.",
        },
      },
      {
        slug: "gamma",
        blurb: {
          en: "Polished default designs, good fit for prompt-first decks with no source document.",
          fr: "Designs par défaut soignés, bien adapté aux diaporamas créés directement depuis une consigne.",
        },
      },
      {
        slug: "canva-ai",
        blurb: {
          en: "Best if you want deep manual design control after the AI draft, inside a familiar editor.",
          fr: "Idéal pour garder un contrôle de design manuel poussé après le brouillon IA, dans un éditeur familier.",
        },
      },
    ],
  },
  {
    slug: "best-free-ai-writing-tools",
    updatedAt: "2026-09-02",
    content: {
      en: {
        title: "Best free AI writing tools",
        description:
          "AI writing tools worth using without paying anything first — for quick emails, paraphrasing, and everyday drafts.",
      },
      fr: {
        title: "Meilleurs outils IA de rédaction gratuits",
        description:
          "Des outils IA de rédaction utilisables gratuitement — pour emails rapides, paraphrases et brouillons du quotidien.",
      },
    },
    items: [
      {
        slug: "toolsaday",
        blurb: {
          en: "Genuinely free with no paywall — an email generator, paraphraser, and story generator bundled in one free site.",
          fr: "Réellement gratuit, sans mur payant — générateur d'emails, paraphraseur et générateur d'histoires réunis sur un seul site gratuit.",
        },
      },
      {
        slug: "copy-ai",
        blurb: {
          en: "Has a real free tier, a good starting point for freelancers and solo marketers.",
          fr: "Dispose d'une vraie version gratuite, bon point de départ pour freelances et marketeurs solo.",
        },
      },
      {
        slug: "grammarly",
        blurb: {
          en: "Free tier for grammar and clarity checks on writing you've already drafted elsewhere.",
          fr: "Version gratuite pour vérifier grammaire et clarté sur un texte déjà rédigé ailleurs.",
        },
      },
      {
        slug: "notion-ai",
        blurb: {
          en: "Convenient free option if you already write and take notes inside Notion.",
          fr: "Option gratuite pratique si vous rédigez déjà et prenez des notes dans Notion.",
        },
      },
    ],
  },
];

export function getRoundupBySlug(slug: string): Roundup | undefined {
  return roundups.find((r) => r.slug === slug);
}
