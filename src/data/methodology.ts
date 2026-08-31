// Real content for /review-methodology — how reviews are actually produced.
// Keep this in sync with how you actually work; it's one of the few trust
// signals a brand-new site can offer honestly.

import type { Locale } from "@/i18n/config";

interface Criterion {
  title: string;
  description: string;
}

interface MethodologyContent {
  intro: string;
  criteriaTitle: string;
  criteria: Criterion[];
  processTitle: string;
  process: Criterion[]; // reuse the same {title, description} shape for steps
  ratingTitle: string;
  ratingBody: string;
  disclosureTitle: string;
  disclosureBody: string;
}

export const methodology: Partial<Record<Locale, MethodologyContent>> = {
  en: {
    intro:
      "Every tool on RecapAI is evaluated the same way, using the same criteria — whether or not there's an affiliate relationship involved. Here's exactly how.",
    criteriaTitle: "What we evaluate",
    criteria: [
      {
        title: "Features",
        description:
          "What the tool actually does, how complete the feature set is compared to what it claims, and whether the core functionality holds up in practice.",
      },
      {
        title: "Price / value",
        description:
          "Whether the pricing is reasonable for what you get, how the free tier (if any) compares to paid plans, and how it stacks up against similar tools in the same category.",
      },
      {
        title: "Ease of use",
        description:
          "How steep the learning curve is, how clear the interface and onboarding are, and whether you can get useful results without reading documentation.",
      },
      {
        title: "Support & reliability",
        description:
          "Availability of documentation, responsiveness of support channels, and whether the tool behaves consistently (uptime, output quality) over repeated use.",
      },
    ],
    processTitle: "How we test",
    process: [
      {
        title: "Hands-on use",
        description: "We sign up and use the tool directly for its intended purpose, not just skim the marketing page.",
      },
      {
        title: "Compare against alternatives",
        description: "We check the tool against others in the same category so the review reflects relative, not just absolute, quality.",
      },
      {
        title: "Write pros and cons plainly",
        description: "Every review lists genuine strengths and weaknesses — we don't publish a review with no cons.",
      },
      {
        title: "Revisit periodically",
        description: "AI tools change fast. We aim to revisit and update reviews as tools evolve; check the \"Last updated\" date on each article.",
      },
    ],
    ratingTitle: "Star ratings",
    ratingBody:
      "The star rating on each review is our own editorial judgment based on the criteria above — it is not an average of user votes, and it's not for sale.",
    disclosureTitle: "Affiliate relationships don't change scores",
    disclosureBody:
      "Some reviewed tools have an affiliate relationship with RecapAI (see our Affiliate Disclosure) — this never changes the rating or the content of a review. If a tool has real drawbacks, we say so, affiliate link or not.",
  },
  fr: {
    intro:
      "Chaque outil sur RecapAI est évalué de la même façon, avec les mêmes critères — qu'il y ait ou non une relation d'affiliation. Voici exactement comment.",
    criteriaTitle: "Ce que nous évaluons",
    criteria: [
      {
        title: "Fonctionnalités",
        description:
          "Ce que l'outil fait réellement, si l'ensemble des fonctionnalités est à la hauteur de ce qui est annoncé, et si les fonctions principales tiennent la route en pratique.",
      },
      {
        title: "Prix / rapport qualité-prix",
        description:
          "Si le prix est raisonnable pour ce que vous obtenez, comment la version gratuite (le cas échéant) se compare aux offres payantes, et comment l'outil se positionne face à des alternatives similaires.",
      },
      {
        title: "Facilité d'utilisation",
        description:
          "La courbe d'apprentissage, la clarté de l'interface et de l'onboarding, et la possibilité d'obtenir des résultats utiles sans lire la documentation.",
      },
      {
        title: "Support & fiabilité",
        description:
          "Disponibilité de la documentation, réactivité des canaux de support, et cohérence de l'outil dans le temps (disponibilité, qualité des résultats).",
      },
    ],
    processTitle: "Comment nous testons",
    process: [
      {
        title: "Utilisation concrète",
        description: "Nous nous inscrivons et utilisons l'outil directement pour son usage prévu, pas seulement la page marketing.",
      },
      {
        title: "Comparaison avec les alternatives",
        description: "Nous comparons l'outil à d'autres de la même catégorie pour une évaluation relative, pas seulement absolue.",
      },
      {
        title: "Avantages et inconvénients honnêtes",
        description: "Chaque avis liste de vraies forces et faiblesses — nous ne publions jamais un avis sans inconvénient.",
      },
      {
        title: "Révision périodique",
        description: "Les outils IA évoluent vite. Nous visons à revoir et mettre à jour les avis régulièrement ; consultez la date de « dernière mise à jour » de chaque article.",
      },
    ],
    ratingTitle: "Notes en étoiles",
    ratingBody:
      "La note en étoiles de chaque avis est notre propre jugement éditorial basé sur les critères ci-dessus — ce n'est pas une moyenne de votes d'utilisateurs, et elle ne s'achète pas.",
    disclosureTitle: "Les partenariats affiliés ne changent pas les notes",
    disclosureBody:
      "Certains outils évalués ont une relation d'affiliation avec RecapAI (voir notre Divulgation affiliée) — cela ne modifie jamais la note ni le contenu d'un avis. Si un outil a de vrais défauts, nous le disons, lien affilié ou non.",
  },
};
