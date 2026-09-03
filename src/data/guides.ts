import type { Locale } from "@/i18n/config";

// "Is X worth it" deep-dive guides — one tool per guide, narrative verdict format.
// Distinct from the tools.ts review page (structured spec sheet) and roundups.ts
// (multi-tool lists): this is the long-form, opinionated "should you pay for this"
// format that ranks well for AI-tool review search intent.
export interface GuideContent {
  title: string;
  metaDescription: string;
  intro: string[];
  strongFor: string[];
  drawbacks: string[];
  notForYouIf: string[];
  verdict: string;
}

export interface Guide {
  slug: string;
  toolSlug: string; // references a tools.ts entry for pricing/rating/affiliate link
  updatedAt: string; // ISO date
  content: Partial<Record<Locale, GuideContent>>;
}

export const guides: Guide[] = [
  {
    slug: "is-fliki-worth-it",
    toolSlug: "fliki",
    updatedAt: "2026-09-03",
    content: {
      en: {
        title: "Is Fliki Worth It in 2026?",
        metaDescription:
          "An honest look at Fliki's pricing, voice quality, and limits — who it's actually worth paying for in 2026.",
        intro: [
          "Fliki turns a script, a topic, or even a blog post URL into a fully narrated video. After testing it against the same criteria we use for every AI tool on RecapAI, the short answer is: yes, if you're a solo creator or small team publishing video regularly — but not if you need cinematic-quality visuals.",
          "At $21–28/month for the Standard plan (or free with a 5-minute/month, watermarked cap to try it first), Fliki's core pitch is speed: paste a blog post URL and get a narrated video draft in minutes, without a camera, mic, or editor.",
        ],
        strongFor: [
          "Repurposing existing content — pasting a blog URL and getting a narrated video draft in under five minutes",
          "Voice quality and localization — 2,000+ voices across 80+ languages is the deepest library we've tested at this price",
          "Solo creators and small teams who need to publish video regularly but don't have filming equipment or time",
        ],
        drawbacks: [
          "Visuals lean on stock footage rather than AI-generated scenes, which can look generic for a specific product or message",
          "Non-English voices are noticeably less consistent in naturalness than the English catalog",
          "The free plan's 5-minute monthly cap and watermark make it a trial tier, not something to build a channel on",
        ],
        notForYouIf: [
          "You need cinematic-quality, custom-generated visuals rather than stock footage",
          "You want a photorealistic talking avatar on screen — that's HeyGen or Synthesia's strength, not Fliki's",
          "You need frame-level timeline editing control",
        ],
        verdict:
          "For the specific job Fliki is built for — fast, narrated video from text, in a lot of languages — it's worth the $21–28/month Standard plan. It isn't trying to be a cinematic video editor, and compared against one it'll lose. Compared against the actual alternative most solo creators face — not publishing video at all, or spending hours filming and editing by hand — the value is clear.",
      },
      fr: {
        title: "Fliki vaut-il le coup en 2026 ?",
        metaDescription:
          "Un avis honnête sur le prix, la qualité des voix et les limites de Fliki — pour qui ça vaut vraiment le coup en 2026.",
        intro: [
          "Fliki transforme un script, un sujet ou même l'URL d'un article de blog en vidéo entièrement narrée. Après l'avoir testé selon les mêmes critères que chaque outil IA sur RecapAI, la réponse courte est : oui, si vous êtes un créateur solo ou une petite équipe qui publie régulièrement des vidéos — mais pas si vous avez besoin de visuels de qualité cinématographique.",
          "À 21–28 $/mois pour le forfait Standard (ou gratuit avec un plafond de 5 minutes/mois et filigrane pour essayer), l'argument principal de Fliki est la rapidité : collez l'URL d'un article de blog et obtenez un brouillon de vidéo narrée en quelques minutes, sans caméra, micro ni monteur.",
        ],
        strongFor: [
          "Réutiliser du contenu existant — coller une URL de blog et obtenir un brouillon de vidéo narrée en moins de cinq minutes",
          "Qualité vocale et localisation — plus de 2 000 voix en 80+ langues, la bibliothèque la plus riche testée à ce prix",
          "Les créateurs solos et petites équipes qui doivent publier régulièrement sans matériel de tournage ni temps",
        ],
        drawbacks: [
          "Les visuels s'appuient sur des images d'archives plutôt que des scènes générées par IA, ce qui peut sembler générique pour un message spécifique",
          "Les voix non anglaises sont nettement moins régulières en naturel que le catalogue anglais",
          "Le plafond gratuit de 5 minutes/mois avec filigrane en fait un palier d'essai, pas de quoi gérer une chaîne",
        ],
        notForYouIf: [
          "Vous avez besoin de visuels sur mesure de qualité cinématographique plutôt que d'images d'archives",
          "Vous voulez un avatar parlant photoréaliste à l'écran — c'est le point fort de HeyGen ou Synthesia, pas de Fliki",
          "Vous avez besoin d'un contrôle de montage image par image",
        ],
        verdict:
          "Pour la mission précise de Fliki — une vidéo narrée rapide à partir d'un texte, en de nombreuses langues — le forfait Standard à 21–28 $/mois en vaut la peine. Ce n'est pas un monteur vidéo cinématographique, et comparé à un tel outil il perdra. Comparé à l'alternative réelle de la plupart des créateurs solos — ne pas publier de vidéo du tout, ou passer des heures à filmer et monter à la main — l'intérêt est clair.",
      },
    },
  },
  {
    slug: "is-popai-worth-it",
    toolSlug: "popai",
    updatedAt: "2026-09-03",
    content: {
      en: {
        title: "Is PopAI Worth It? Our Honest Take",
        metaDescription:
          "PopAI's real strength, its free-tier limits, and when Gamma is the better pick instead — an honest verdict.",
        intro: [
          "PopAI is an AI workspace where building a slide deck sits next to document chat and image generation. Its actual differentiator isn't generating slides from a blank prompt — plenty of tools do that — it's turning a document you already have into a structured deck.",
          "Free plans give you a daily AI-credit allowance (400 to start) shared across slides, chat, and image generation; Pro starts at $5.99–9.99/month, with an Unlimited tier around $40/month for heavy daily use.",
        ],
        strongFor: [
          "Turning an existing PDF, Word doc, or report into a structured first-draft deck — this is PopAI's real strength, not the blank-prompt generator",
          "Real-time collaborative editing built in, useful for team decks",
          "The Pro upgrade is inexpensive relative to dedicated presentation-AI tools",
        ],
        drawbacks: [
          "The free daily credit allowance is shared across slide generation, document chat, and image generation — it runs out fast if you use more than one feature the same day",
          "Design output still benefits from a manual polish pass for anything client-facing",
        ],
        notForYouIf: [
          "You're starting from a blank prompt with no source document — Gamma's default designs are more polished out of the box for that case",
          "You need pixel-perfect custom design control rather than AI-handled layout",
        ],
        verdict:
          "If you regularly need to turn a document, PDF, or report into a presentation, PopAI's document-to-deck workflow is worth the low-cost Pro upgrade — it solves a real, specific problem cheaply. If your decks usually start from a blank page instead, you're better served by a prompt-first tool like Gamma.",
      },
      fr: {
        title: "PopAI vaut-il le coup ? Notre avis honnête",
        metaDescription:
          "La vraie force de PopAI, les limites de son offre gratuite, et quand Gamma est le meilleur choix à la place.",
        intro: [
          "PopAI est un espace de travail IA où la création de diaporamas côtoie le chat de documents et la génération d'images. Sa vraie valeur ajoutée n'est pas de générer des slides à partir d'une consigne vide — beaucoup d'outils le font — mais de transformer un document que vous avez déjà en diaporama structuré.",
          "L'offre gratuite donne un quota quotidien de crédits IA (400 pour commencer) partagé entre slides, chat et génération d'images ; le Pro démarre à 5,99–9,99 $/mois, avec un palier Illimité autour de 40 $/mois pour un usage intensif quotidien.",
        ],
        strongFor: [
          "Transformer un PDF, document Word ou rapport existant en premier jet de diaporama structuré — c'est la vraie force de PopAI, pas le générateur à partir d'une consigne vide",
          "Édition collaborative en temps réel intégrée, utile pour les diaporamas d'équipe",
          "La mise à niveau Pro est peu coûteuse comparée aux outils IA de présentation dédiés",
        ],
        drawbacks: [
          "Le quota quotidien de crédits gratuits est partagé entre génération de slides, chat de documents et génération d'images — il s'épuise vite si vous utilisez plusieurs fonctions le même jour",
          "Le rendu visuel bénéficie encore d'une retouche manuelle pour tout ce qui est destiné à un client",
        ],
        notForYouIf: [
          "Vous partez d'une consigne vide sans document source — les designs par défaut de Gamma sont plus soignés d'emblée dans ce cas",
          "Vous avez besoin d'un contrôle de design sur mesure au pixel près plutôt qu'une mise en page gérée par l'IA",
        ],
        verdict:
          "Si vous devez régulièrement transformer un document, PDF ou rapport en présentation, le flux document-vers-diaporama de PopAI justifie la mise à niveau Pro à faible coût — il résout un vrai problème précis à bas prix. Si vos diaporamas partent généralement d'une page blanche, un outil orienté consigne comme Gamma vous conviendra mieux.",
      },
    },
  },
  {
    slug: "is-toolsaday-really-free",
    toolSlug: "toolsaday",
    updatedAt: "2026-09-03",
    content: {
      en: {
        title: "Is Toolsaday Really Free? What You Get Without Paying",
        metaDescription:
          "We checked whether Toolsaday's free AI writing bundle has a hidden paywall — here's exactly what you get for $0.",
        intro: [
          "Toolsaday bundles a paraphraser, a story generator, a general text generator, and an AI email generator in one place — and unlike most 'free' AI tools, there's no account requirement or usage paywall blocking the core features.",
          "It isn't trying to be a full content platform. The value is in not having to hunt down (or pay for) five different single-purpose tools for occasional writing tasks.",
        ],
        strongFor: [
          "Every core tool — paraphraser, story generator, text generator, email generator — is genuinely free to use, no account or paywall required",
          "The email generator covers both drafting new emails and replying to existing ones",
          "A useful all-in-one bundle instead of separately hunting down single-purpose free tools",
        ],
        drawbacks: [
          "Output tone can read generic and usually needs a manual edit pass before sending anything professional",
          "There's no paid tier with advanced brand-voice or team features if you outgrow the free bundle",
        ],
        notForYouIf: [
          "You need brand-voice consistency across a team — there's no paid tier to grow into here",
          "You're writing something high-stakes where generic AI phrasing needs heavy editing regardless of the tool",
        ],
        verdict:
          "Yes — Toolsaday is genuinely free, not a trial with a hidden paywall. For occasional paraphrasing, a quick email draft, or testing whether AI writing tools fit your workflow before paying for something heavier, it's a reasonable, no-risk starting point.",
      },
      fr: {
        title: "Toolsaday est-il vraiment gratuit ? Ce que vous obtenez sans payer",
        metaDescription:
          "Nous avons vérifié si le pack d'écriture IA gratuit de Toolsaday cache un mur payant — voici exactement ce que vous obtenez pour 0 €.",
        intro: [
          "Toolsaday regroupe un outil de paraphrase, un générateur d'histoires, un générateur de texte général et un générateur d'emails IA en un seul endroit — et contrairement à la plupart des outils IA « gratuits », aucun compte ni mur payant ne bloque les fonctions principales.",
          "Il ne cherche pas à être une plateforme de contenu complète. L'intérêt est de ne pas avoir à chercher (ou payer) cinq outils différents à fonction unique pour des tâches d'écriture ponctuelles.",
        ],
        strongFor: [
          "Chaque outil principal — paraphrase, générateur d'histoires, générateur de texte, générateur d'emails — est réellement gratuit, sans compte ni mur payant",
          "Le générateur d'emails couvre à la fois la rédaction de nouveaux emails et les réponses",
          "Un pack tout-en-un utile plutôt que de chercher séparément des outils gratuits à fonction unique",
        ],
        drawbacks: [
          "Le ton du texte généré peut sembler générique et nécessite souvent une relecture manuelle avant tout envoi professionnel",
          "Aucun palier payant avec des fonctions avancées de voix de marque ou d'équipe si vous dépassez le pack gratuit",
        ],
        notForYouIf: [
          "Vous avez besoin d'une cohérence de voix de marque au sein d'une équipe — il n'y a pas de palier payant vers lequel évoluer ici",
          "Vous rédigez quelque chose à fort enjeu où un ton IA générique nécessite de toute façon une lourde relecture",
        ],
        verdict:
          "Oui — Toolsaday est réellement gratuit, pas un essai avec un mur payant caché. Pour paraphraser occasionnellement, rédiger rapidement un email, ou tester si les outils d'écriture IA conviennent à votre façon de travailler avant de payer pour quelque chose de plus lourd, c'est un point de départ raisonnable et sans risque.",
      },
    },
  },
  {
    slug: "is-snov-io-worth-it",
    toolSlug: "snov-io",
    updatedAt: "2026-09-04",
    content: {
      en: {
        title: "Is Snov.io Worth It in 2026?",
        metaDescription:
          "Snov.io's real strength, where its email accuracy falls short of specialists like Hunter.io, and who should pay for it.",
        intro: [
          "Snov.io bundles an email finder, verifier, outreach sequences, LinkedIn automation, inbox warm-up, and a CRM into one subscription. After comparing it against the specialist alternatives, the short answer is: yes, if you're a small sales team or solo founder who wants one tool for the whole outbound workflow — but not if raw email-finding accuracy is your top priority.",
          "Paid plans start around $30–39/month for 1,000 credits, with a free tier available to test email finding and verification before committing.",
        ],
        strongFor: [
          "Consolidating an entire outbound workflow — finding, verifying, sequencing, and tracking leads in a CRM — into one subscription instead of four separate tools",
          "SMB sales teams and solo founders who want a noticeably cheaper entry point than single-purpose specialist tools",
          "Built-in inbox warm-up and deliverability tools, which most bundled alternatives charge extra for or skip entirely",
        ],
        drawbacks: [
          "Email-finding accuracy (~75–81%) trails dedicated specialist tools like Hunter.io (~87%), which matters more the higher-stakes your outreach is",
          "LinkedIn automation is a separate paid add-on on top of every plan, not included even at the higher tiers",
        ],
        notForYouIf: [
          "Accurate email finding and verification is your main bottleneck and you don't need the CRM or sequencing features — a specialist tool will serve you better",
          "You already have a CRM and sequencing tool you're happy with and only need email finding — paying for Snov.io's bundle would be redundant",
        ],
        verdict:
          "If you're assembling an outbound sales stack from scratch and want to avoid paying for (and learning) four separate tools, Snov.io's bundle is worth the lower entry price. If email accuracy is what makes or breaks your campaigns and you already have sequencing and CRM covered elsewhere, a specialist finder like Hunter.io is the better investment.",
      },
      fr: {
        title: "Snov.io vaut-il le coup en 2026 ?",
        metaDescription:
          "La vraie force de Snov.io, où sa précision email reste derrière des spécialistes comme Hunter.io, et pour qui ça vaut le coup de payer.",
        intro: [
          "Snov.io regroupe un outil de recherche d'emails, un vérificateur, des séquences de prospection, l'automatisation LinkedIn, le préchauffage de boîte mail et un CRM en un seul abonnement. Après l'avoir comparé aux alternatives spécialisées, la réponse courte est : oui, si vous êtes une petite équipe commerciale ou un fondateur solo qui veut un seul outil pour tout le flux de prospection — mais pas si la précision brute de recherche d'emails est votre priorité absolue.",
          "Les forfaits payants démarrent autour de 30–39 $/mois pour 1 000 crédits, avec une offre gratuite disponible pour tester avant de s'engager.",
        ],
        strongFor: [
          "Regrouper tout un flux de prospection — recherche, vérification, séquences et suivi des leads dans un CRM — en un seul abonnement plutôt que quatre outils séparés",
          "Les petites équipes commerciales et fondateurs solos qui veulent un point d'entrée nettement moins cher que les outils spécialisés à fonction unique",
          "Outils de préchauffage de boîte mail et de délivrabilité inclus, que la plupart des alternatives groupées facturent en plus ou n'ont pas du tout",
        ],
        drawbacks: [
          "La précision de recherche d'emails (~75–81 %) reste derrière des outils spécialisés dédiés comme Hunter.io (~87 %), ce qui compte d'autant plus que votre prospection est à fort enjeu",
          "L'automatisation LinkedIn est une option payante séparée en plus de chaque forfait, non incluse même sur les paliers supérieurs",
        ],
        notForYouIf: [
          "La recherche et vérification précise d'emails est votre principal goulot d'étranglement et vous n'avez pas besoin du CRM ou des séquences — un outil spécialisé vous servira mieux",
          "Vous avez déjà un CRM et un outil de séquences qui vous conviennent et n'avez besoin que de recherche d'emails — payer pour le pack Snov.io serait redondant",
        ],
        verdict:
          "Si vous montez une stack de prospection commerciale à partir de zéro et voulez éviter de payer (et d'apprendre) quatre outils séparés, le pack Snov.io justifie son prix d'entrée plus bas. Si la précision email fait ou défait vos campagnes et que vous avez déjà séquences et CRM ailleurs, un outil de recherche spécialisé comme Hunter.io est le meilleur investissement.",
      },
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
