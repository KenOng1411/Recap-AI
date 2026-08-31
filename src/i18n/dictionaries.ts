import type { Locale } from "./config";

export const dictionaries = {
  en: {
    nav: {
      tools: "All Tools",
      bestOf: "Best Of",
      deals: "Deals",
      about: "About",
      news: "AI News",
      methodology: "Review Methodology",
      partner: "Partner With Us",
      disclosure: "Affiliate Disclosure",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    common: {
      featured: "Featured",
    },
    news: {
      title: "AI News",
      subtitle:
        "Real, verified stories from the AI industry, written by the RecapAI team with the original source linked.",
      readMore: "Read at {source}",
      readArticle: "Read article",
      relatedTools: "Related tools on RecapAI:",
      backToNews: "AI News",
      sourceAttribution: "Originally reported by {source}",
      viewSource: "View original source",
    },
    home: {
      eyebrow: "RecapAI",
      title: "Find the right AI tool in 5 minutes, no fluff",
      subtitle:
        "{author} reviews AI tools honestly, focused on real hands-on experience — clear pros, clear cons, no hype.",
      ctaPrimary: "Explore all tools",
      ctaSecondary: "About the reviewer →",
      statTools: "AI tools reviewed",
      statCategories: "topic categories",
      featuredTitle: "Featured tools",
      featuredSubtitle: "The most talked-about and highest-rated AI tools right now.",
      viewAll: "View all →",
      bestOfTitle: "Best of by topic",
      bestOfDesc: "Curated top AI tools for specific needs — writing, image generation, coding…",
      bestOfCta: "Browse Best Of posts",
      dealsTitle: "Deals & Discounts",
      dealsDesc: "Coupon codes and lifetime deals for AI tools — updated regularly.",
      searchPlaceholder: "Search {count} AI tools…",
      searchCta: "Search",
      allCategories: "All categories",
      trustHandsOn: "Hands-on tested",
      trustCriteria: "Same criteria, every time",
      trustIndependent: "Independent ratings",
      trustTransparent: "Affiliate links disclosed",
      categoriesTitle: "Browse by category",
      categoriesSubtitle: "Top-rated tools in each category, at a glance.",
      platformsTitle: "AI platforms we cover",
      dealsCta: "View deals",
    },
    tools: {
      title: "All AI tools",
      subtitle: "{count} AI tools reviewed, filter by category below.",
      filterAll: "All",
      filterGroup: "Filter by category",
      searchPlaceholder: "Search tools…",
      noResults: "No tools match your search.",
    },
    toolPage: {
      back: "All AI tools",
      description: "Description",
      pros: "Pros",
      cons: "Cons",
      similar: "Similar tools in {category}",
      price: "Price",
      visit: "Visit {name}",
      fullReview: "Read full review",
    },
    affiliate: {
      disclosure:
        "This is an affiliate link. RecapAI may earn a commission if you sign up through this link — at no extra cost to you.",
      articleDisclosure:
        "This article contains affiliate links. We may earn a commission if you purchase through them.",
    },
    review: {
      by: "By",
      lastUpdated: "Last updated: {date}",
    },
    bestOfIndex: {
      title: "Best Of",
      subtitle: "Curated top AI tools by specific topic, updated periodically.",
      updated: "Updated {date}",
      readPost: "Read post",
    },
    bestOfPost: {
      back: "Best Of",
    },
    deals: {
      title: "Deals & Discounts",
      subtitle: "Coupon codes and lifetime deals for notable AI tools, updated regularly.",
      emptyTitle: "No deals yet",
      emptyDesc: "The deals list will be updated soon. Check back later!",
      getDeal: "Get deal",
    },
    about: {
      title: "About",
      intro: "Introduction",
      introBody:
        "Hi, I'm the person behind {site}. This is placeholder intro copy — I'll update it with my real story: why I started reviewing AI tools, my review approach, and what I want to bring readers.",
      experience: "Experience",
      connect: "Connect with me",
      email: "Email",
    },
    footer: {
      navTitle: "Navigate",
      followTitle: "Follow",
      trustTitle: "Trust & Legal",
      disclosure:
        "Some links on {site} are affiliate links. We may earn a commission when you sign up through them, at no extra cost to you. This helps {site} stay running and keep reviewing for free.",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      home: "Back to home",
    },
    theme: {
      toggleToLight: "Switch to light mode",
      toggleToDark: "Switch to dark mode",
    },
    partner: {
      title: "Partner With Us",
      subtitle: "Media kit & partnership info for AI product teams.",
      methodologyLinkText: "Read our full review methodology →",
      contactTitle: "Get in touch",
      contactIntro:
        "Interested in partnering? Tell us a bit about your product and what you're looking for.",
    },
    contactForm: {
      name: "Your name",
      email: "Your email",
      company: "Company (optional)",
      message: "Message",
      submit: "Send via email",
      note: "This opens your email client with your message pre-filled, addressed to us — nothing is submitted to a server.",
    },
    legal: {
      lastUpdated: "Last updated: {date}",
    },
    methodology: {
      title: "Review Methodology",
    },
    langSwitch: "Français",
  },
  fr: {
    nav: {
      tools: "Tous les outils",
      bestOf: "Sélections",
      deals: "Bons plans",
      about: "À propos",
      news: "Actu IA",
      methodology: "Méthodologie",
      partner: "Devenir partenaire",
      disclosure: "Divulgation affiliée",
      privacy: "Confidentialité",
      terms: "Conditions d'utilisation",
    },
    common: {
      featured: "En vedette",
    },
    news: {
      title: "Actu IA",
      subtitle:
        "Des actualités réelles et vérifiées du secteur de l'IA, rédigées par l'équipe RecapAI avec la source originale en lien.",
      readMore: "Lire sur {source}",
      readArticle: "Lire l'article",
      relatedTools: "Outils liés sur RecapAI :",
      backToNews: "Actu IA",
      sourceAttribution: "Rapporté à l'origine par {source}",
      viewSource: "Voir la source originale",
    },
    home: {
      eyebrow: "RecapAI",
      title: "Trouvez le bon outil IA en 5 minutes, sans blabla",
      subtitle:
        "{author} teste les outils IA en toute honnêteté, avec une vraie utilisation concrète — avantages et inconvénients clairs, sans battage.",
      ctaPrimary: "Explorer tous les outils",
      ctaSecondary: "À propos du testeur →",
      statTools: "outils IA testés",
      statCategories: "catégories",
      featuredTitle: "Outils à la une",
      featuredSubtitle: "Les outils IA les plus populaires et les mieux notés du moment.",
      viewAll: "Voir tout →",
      bestOfTitle: "Sélections par thème",
      bestOfDesc: "Les meilleurs outils IA classés par besoin précis — rédaction, image, code…",
      bestOfCta: "Voir les sélections",
      dealsTitle: "Bons plans & Réductions",
      dealsDesc: "Codes promo et offres à vie pour des outils IA — mis à jour régulièrement.",
      searchPlaceholder: "Rechercher parmi {count} outils IA…",
      searchCta: "Rechercher",
      allCategories: "Toutes les catégories",
      trustHandsOn: "Testé en conditions réelles",
      trustCriteria: "Mêmes critères, à chaque fois",
      trustIndependent: "Notes indépendantes",
      trustTransparent: "Liens affiliés signalés",
      categoriesTitle: "Parcourir par catégorie",
      categoriesSubtitle: "Les outils les mieux notés de chaque catégorie, en un coup d'œil.",
      platformsTitle: "Plateformes IA couvertes",
      dealsCta: "Voir les bons plans",
    },
    tools: {
      title: "Tous les outils IA",
      subtitle: "{count} outils IA testés, filtrez par catégorie ci-dessous.",
      filterAll: "Tous",
      filterGroup: "Filtrer par catégorie",
      searchPlaceholder: "Rechercher un outil…",
      noResults: "Aucun outil ne correspond à votre recherche.",
    },
    toolPage: {
      back: "Tous les outils IA",
      description: "Description",
      pros: "Avantages",
      cons: "Inconvénients",
      similar: "Outils similaires en {category}",
      price: "Prix",
      visit: "Découvrir {name}",
      fullReview: "Lire l'avis complet",
    },
    affiliate: {
      disclosure:
        "Ceci est un lien affilié. RecapAI peut toucher une commission si vous vous inscrivez via ce lien — sans coût supplémentaire pour vous.",
      articleDisclosure:
        "Cet article contient des liens affiliés. Nous pouvons toucher une commission si vous achetez via ces liens.",
    },
    review: {
      by: "Par",
      lastUpdated: "Dernière mise à jour : {date}",
    },
    bestOfIndex: {
      title: "Sélections",
      subtitle: "Les meilleurs outils IA classés par thème précis, mis à jour régulièrement.",
      updated: "Mis à jour le {date}",
      readPost: "Lire l'article",
    },
    bestOfPost: {
      back: "Sélections",
    },
    deals: {
      title: "Bons plans & Réductions",
      subtitle: "Codes promo et offres à vie pour des outils IA notables, mis à jour régulièrement.",
      emptyTitle: "Aucun bon plan pour le moment",
      emptyDesc: "La liste des bons plans sera bientôt mise à jour. Revenez plus tard !",
      getDeal: "Profiter de l'offre",
    },
    about: {
      title: "À propos",
      intro: "Présentation",
      introBody:
        "Bonjour, je suis à l'origine de {site}. Ce texte est un contenu temporaire — je le remplacerai par mon vrai parcours : pourquoi j'ai commencé à tester des outils IA, ma façon d'évaluer, et ce que je veux apporter aux lecteurs.",
      experience: "Expérience",
      connect: "Me suivre",
      email: "Email",
    },
    footer: {
      navTitle: "Navigation",
      followTitle: "Suivre",
      trustTitle: "Confiance & Mentions légales",
      disclosure:
        "Certains liens sur {site} sont des liens affiliés. Nous pouvons toucher une commission lors de votre inscription via ces liens, sans coût supplémentaire pour vous. Cela aide {site} à continuer de fonctionner et de proposer des avis gratuits.",
      rights: "Tous droits réservés.",
    },
    notFound: {
      title: "Page introuvable",
      body: "La page que vous cherchez n'existe pas ou a été déplacée.",
      home: "Retour à l'accueil",
    },
    theme: {
      toggleToLight: "Passer en mode clair",
      toggleToDark: "Passer en mode sombre",
    },
    partner: {
      title: "Devenir partenaire",
      subtitle: "Kit média & informations partenariat pour les équipes produit IA.",
      methodologyLinkText: "Lire notre méthodologie d'évaluation complète →",
      contactTitle: "Nous contacter",
      contactIntro:
        "Intéressé par un partenariat ? Parlez-nous un peu de votre produit et de ce que vous recherchez.",
    },
    contactForm: {
      name: "Votre nom",
      email: "Votre email",
      company: "Entreprise (optionnel)",
      message: "Message",
      submit: "Envoyer par email",
      note: "Ceci ouvre votre client email avec votre message pré-rempli, adressé à nous — rien n'est envoyé à un serveur.",
    },
    legal: {
      lastUpdated: "Dernière mise à jour : {date}",
    },
    methodology: {
      title: "Méthodologie d'évaluation",
    },
    langSwitch: "English",
  },
} as const;

// es/de/it/pt aren't translated yet — fall back to English rather than crash.
export function getDictionary(locale: Locale) {
  return dictionaries[locale as "en" | "fr"] ?? dictionaries.en;
}

export function t(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}
