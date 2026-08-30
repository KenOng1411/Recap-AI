// Content for /partner-with-us. Edit freely — this is your real editorial plan and
// positioning, not fabricated metrics. Deliberately has NO traffic/stats numbers:
// add that block yourself once you have real analytics to show (see the page file
// for where it would go).

import type { Locale } from "@/i18n/config";

interface PartnerTier {
  title: string;
  stage: string;
  benefits: string[];
}

interface MediaKitContent {
  status: string;
  intro: string;
  cadenceLabel: string;
  cadence: string; // TODO: set this to your real, honest publishing cadence.
  focusLabel: string;
  focus: string;
  credibilityTitle: string;
  credibilityBody: string;
  tiersTitle: string;
  tiersIntro: string;
  tiers: PartnerTier[];
}

export const mediaKit: Record<Locale, MediaKitContent> = {
  en: {
    status: "New site, actively growing",
    intro:
      "Toolzi is a young site — we're upfront about that. We'd rather build partnerships on real, verifiable substance (methodology, editorial focus, publishing consistency) than inflate numbers we don't have yet.",
    cadenceLabel: "Publishing cadence",
    // TODO: replace with your real, honest target — only commit to a number you can keep.
    cadence: "Targeting 4+ new in-depth AI tool reviews per month, plus regular Best Of roundup updates.",
    focusLabel: "Niche focus",
    focus:
      "Toolzi covers AI tools exclusively — chatbots, image/video/audio generation, coding assistants, and AI-powered productivity tools. Not a generic software directory: every review is written specifically for an AI-tool audience.",
    credibilityTitle: "How we keep reviews credible",
    credibilityBody:
      "Every review follows the same published methodology — the same criteria, the same testing approach, every time. No pay-to-play scoring.",
    tiersTitle: "Grow with us",
    tiersIntro:
      "We're inviting a small number of early partners to grow alongside Toolzi. Benefits scale up as our readership does — nothing below is tied to a specific traffic number we can't yet verify.",
    tiers: [
      {
        title: "Early Partner",
        stage: "Available now",
        benefits: [
          "A dedicated, in-depth review with a clear affiliate CTA",
          "Inclusion in relevant \"Best Of\" roundup posts where genuinely deserved",
          "Direct line to the founder for product updates/corrections",
        ],
      },
      {
        title: "Growing Partner",
        stage: "As readership grows",
        benefits: [
          "Everything in Early Partner",
          "Priority placement/refresh when reviews are updated",
          "Featured mention in relevant homepage sections",
        ],
      },
      {
        title: "Established Partner",
        stage: "Once the site is established",
        benefits: [
          "Everything in Growing Partner",
          "Deeper comparison / case-study style content",
          "Co-marketing opportunities (joint content, launch coverage)",
        ],
      },
    ],
  },
  fr: {
    status: "Nouveau site, en pleine croissance",
    intro:
      "Toolzi est un jeune site — nous l'assumons pleinement. Nous préférons construire des partenariats sur des bases réelles et vérifiables (méthodologie, ligne éditoriale, régularité de publication) plutôt que de gonfler des chiffres que nous n'avons pas encore.",
    cadenceLabel: "Rythme de publication",
    cadence:
      "Objectif : 4+ nouveaux avis IA approfondis par mois, avec des mises à jour régulières des sélections Best Of.",
    focusLabel: "Positionnement",
    focus:
      "Toolzi couvre exclusivement les outils IA — chatbots, génération d'image/vidéo/audio, assistants de code, outils de productivité IA. Pas un annuaire logiciel généraliste : chaque avis est pensé pour un lectorat intéressé par l'IA.",
    credibilityTitle: "Ce qui rend nos avis crédibles",
    credibilityBody:
      "Chaque avis suit la même méthodologie publiée — les mêmes critères, la même approche de test, à chaque fois. Aucun score acheté.",
    tiersTitle: "Grandir ensemble",
    tiersIntro:
      "Nous invitons un petit nombre de partenaires à grandir avec Toolzi dès maintenant. Les avantages augmentent avec notre audience — rien ci-dessous n'est lié à un chiffre de trafic que nous ne pouvons pas encore prouver.",
    tiers: [
      {
        title: "Partenaire de lancement",
        stage: "Disponible maintenant",
        benefits: [
          "Un avis dédié et approfondi avec un CTA affilié clair",
          "Inclusion dans les sélections « Best Of » pertinentes, quand c'est justifié",
          "Contact direct avec la fondatrice/le fondateur pour mises à jour/corrections",
        ],
      },
      {
        title: "Partenaire en croissance",
        stage: "À mesure que l'audience grandit",
        benefits: [
          "Tout ce qui est inclus dans Partenaire de lancement",
          "Placement prioritaire lors des mises à jour d'avis",
          "Mention mise en avant dans les sections pertinentes de la page d'accueil",
        ],
      },
      {
        title: "Partenaire établi",
        stage: "Une fois le site établi",
        benefits: [
          "Tout ce qui est inclus dans Partenaire en croissance",
          "Contenu comparatif / étude de cas approfondi",
          "Opportunités de co-marketing (contenu conjoint, couverture de lancement)",
        ],
      },
    ],
  },
};
