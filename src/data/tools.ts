// Review data — current copy is placeholder, replace with real content later.
// affiliateUrl currently points to the tool's official website as a placeholder;
// swap in your real affiliate link once you have one.

import type { Locale } from "@/i18n/config";
import type { CategoryKey } from "./categories";

interface ToolContent {
  tagline: string;
  description: string;
  pricing: string;
  pros: string[];
  cons: string[];
}

export interface Tool {
  slug: string;
  name: string;
  category: CategoryKey;
  website: string;
  affiliateUrl: string;
  rating: number; // 0 - 5
  featured?: boolean;
  content: Record<Locale, ToolContent>;
}

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "chatbot",
    website: "https://chat.openai.com",
    affiliateUrl: "https://chat.openai.com",
    rating: 4.7,
    featured: true,
    content: {
      en: {
        tagline: "OpenAI's do-everything AI chatbot, the most popular one out there.",
        description:
          "ChatGPT is OpenAI's conversational AI assistant, handling Q&A, writing, coding, data analysis and more. Full review coming soon.",
        pricing: "Free; Plus plan from $20/month",
        pros: ["Easy to use, fast responses", "Rich plugin/GPTs ecosystem", "Frequent feature updates"],
        cons: ["Free tier has usage limits", "Occasionally hallucinates facts"],
      },
      fr: {
        tagline: "Le chatbot IA polyvalent d'OpenAI, le plus utilisé au monde.",
        description:
          "ChatGPT est l'assistant IA conversationnel d'OpenAI : questions-réponses, rédaction, code, analyse de données et plus encore. Avis complet à venir.",
        pricing: "Gratuit ; forfait Plus à partir de 20 $/mois",
        pros: ["Facile à utiliser, réponses rapides", "Écosystème riche de plugins/GPTs", "Mises à jour fréquentes"],
        cons: ["Version gratuite limitée en usage", "Peut parfois inventer des informations"],
      },
    },
  },
  {
    slug: "claude",
    name: "Claude",
    category: "chatbot",
    website: "https://claude.ai",
    affiliateUrl: "https://claude.ai",
    rating: 4.7,
    featured: true,
    content: {
      en: {
        tagline: "Anthropic's AI assistant, strong at writing and reasoning.",
        description:
          "Claude is Anthropic's model family, known for long-form writing, tight reasoning, and strong instruction-following. Full review coming soon.",
        pricing: "Free; Pro plan from $20/month",
        pros: ["Natural, coherent writing style", "Long context window", "Great for coding and document analysis"],
        cons: ["Free tier limited on an hourly basis", "Fewer third-party plugins than ChatGPT"],
      },
      fr: {
        tagline: "L'assistant IA d'Anthropic, excellent en rédaction et en raisonnement.",
        description:
          "Claude est la famille de modèles d'Anthropic, reconnue pour la rédaction longue, un raisonnement rigoureux et le respect des consignes. Avis complet à venir.",
        pricing: "Gratuit ; forfait Pro à partir de 20 $/mois",
        pros: ["Style d'écriture naturel et cohérent", "Grande fenêtre de contexte", "Excellent pour le code et l'analyse de documents"],
        cons: ["Version gratuite limitée par tranche horaire", "Moins de plugins tiers que ChatGPT"],
      },
    },
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "chatbot",
    website: "https://gemini.google.com",
    affiliateUrl: "https://gemini.google.com",
    rating: 4.4,
    content: {
      en: {
        tagline: "Google's multimodal AI assistant, deeply tied into Workspace.",
        description:
          "Gemini is Google's AI model, tightly integrated with Search, Gmail, Docs and other Google products. Full review coming soon.",
        pricing: "Free; Advanced tier via Google One AI Premium",
        pros: ["Deep Google Workspace integration", "Real-time information updates", "Strong multimodal handling (image, video)"],
        cons: ["Answer quality can be inconsistent", "Interface changes fairly often"],
      },
      fr: {
        tagline: "L'assistant IA multimodal de Google, intégré à Workspace.",
        description:
          "Gemini est le modèle IA de Google, étroitement intégré à Search, Gmail, Docs et d'autres produits Google. Avis complet à venir.",
        pricing: "Gratuit ; palier Advanced via Google One AI Premium",
        pros: ["Intégration poussée avec Google Workspace", "Informations mises à jour en temps réel", "Bonne gestion du multimodal (image, vidéo)"],
        cons: ["Qualité des réponses inégale", "Interface qui change assez souvent"],
      },
    },
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "image",
    website: "https://www.midjourney.com",
    affiliateUrl: "https://www.midjourney.com",
    rating: 4.6,
    featured: true,
    content: {
      en: {
        tagline: "AI image generator with top-tier artistic quality.",
        description:
          "Midjourney is known for producing highly aesthetic AI images, a favorite among designers and artists. Full review coming soon.",
        pricing: "From $10/month, no permanent free tier",
        pros: ["Beautiful, artistic image quality", "Large community and learning resources", "Frequent model updates"],
        cons: ["No free tier", "Discord-based workflow has a learning curve"],
      },
      fr: {
        tagline: "Générateur d'images IA à la qualité artistique de premier plan.",
        description:
          "Midjourney est réputé pour la qualité esthétique de ses images IA, plébiscité par designers et artistes. Avis complet à venir.",
        pricing: "À partir de 10 $/mois, pas de forfait gratuit permanent",
        pros: ["Qualité d'image esthétique et soignée", "Grande communauté et ressources d'apprentissage", "Mises à jour de modèle fréquentes"],
        cons: ["Aucun forfait gratuit", "Prise en main via Discord un peu déroutante au début"],
      },
    },
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    category: "image",
    website: "https://ideogram.ai",
    affiliateUrl: "https://ideogram.ai",
    rating: 4.3,
    content: {
      en: {
        tagline: "AI image generator excelling at accurate text rendering.",
        description:
          "Ideogram stands out for rendering text inside images far more accurately than most competitors. Full review coming soon.",
        pricing: "Free tier available; paid plans from $8/month",
        pros: ["Strong at rendering text within images", "Free tier to try it out", "Simple, easy-to-use web interface"],
        cons: ["Image detail sometimes trails Midjourney", "Style library not as broad as competitors"],
      },
      fr: {
        tagline: "Générateur d'images IA excellant dans le rendu de texte.",
        description:
          "Ideogram se distingue par un rendu de texte dans les images bien plus précis que la plupart des concurrents. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfaits payants dès 8 $/mois",
        pros: ["Excellent rendu du texte dans les images", "Version gratuite pour tester", "Interface web simple et facile à utiliser"],
        cons: ["Détails d'image parfois en retrait face à Midjourney", "Bibliothèque de styles moins riche que les concurrents"],
      },
    },
  },
  {
    slug: "runway",
    name: "Runway",
    category: "video",
    website: "https://runwayml.com",
    affiliateUrl: "https://runwayml.com",
    rating: 4.4,
    featured: true,
    content: {
      en: {
        tagline: "A professional AI video generation and editing toolkit.",
        description:
          "Runway offers text/image-to-video AI models alongside an AI-powered video editing suite. Full review coming soon.",
        pricing: "Limited free tier; paid plans from $12/month",
        pros: ["Many AI video tools in one platform", "Quality improves quickly with each release", "Great fit for filmmakers and content creators"],
        cons: ["Pricing rises quickly with heavier rendering needs", "Takes time to learn the full feature set"],
      },
      fr: {
        tagline: "Une suite professionnelle de génération et montage vidéo par IA.",
        description:
          "Runway propose des modèles IA texte/image vers vidéo ainsi qu'une suite de montage vidéo assistée par IA. Avis complet à venir.",
        pricing: "Forfait gratuit limité ; forfaits payants dès 12 $/mois",
        pros: ["De nombreux outils IA vidéo réunis sur une plateforme", "Qualité qui progresse vite à chaque version", "Idéal pour créateurs de contenu et vidéastes"],
        cons: ["Prix qui grimpe vite avec des besoins de rendu importants", "Prend du temps à maîtriser toutes les fonctionnalités"],
      },
    },
  },
  {
    slug: "heygen",
    name: "HeyGen",
    category: "video",
    website: "https://www.heygen.com",
    affiliateUrl: "https://www.heygen.com",
    rating: 4.3,
    content: {
      en: {
        tagline: "Generate talking AI avatar videos in multiple languages.",
        description:
          "HeyGen creates videos with AI avatars speaking a script, with multilingual voiceover support — great for marketing and training videos. Full review coming soon.",
        pricing: "Limited free tier; paid plans from $24/month",
        pros: ["Natural-looking avatars, many options", "Strong multilingual support", "Great for fast marketing/training videos"],
        cons: ["AI voice can still sound slightly robotic", "Free tier limited in video minutes"],
      },
      fr: {
        tagline: "Créez des vidéos avec avatar IA parlant en plusieurs langues.",
        description:
          "HeyGen génère des vidéos avec des avatars IA qui lisent un script, avec voix off multilingue — idéal pour le marketing et la formation. Avis complet à venir.",
        pricing: "Forfait gratuit limité ; forfaits payants dès 24 $/mois",
        pros: ["Avatars naturels, nombreux choix", "Bon support multilingue", "Idéal pour des vidéos marketing/formation rapides"],
        cons: ["La voix IA peut encore sembler légèrement robotique", "Forfait gratuit limité en minutes de vidéo"],
      },
    },
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    category: "audio",
    website: "https://elevenlabs.io",
    affiliateUrl: "https://elevenlabs.io",
    rating: 4.6,
    featured: true,
    content: {
      en: {
        tagline: "Leading text-to-speech with the most natural AI voices.",
        description:
          "ElevenLabs is a text-to-speech and voice-cloning tool praised for how natural its voices sound. Full review coming soon.",
        pricing: "Free tier available; paid plans from $5/month",
        pros: ["Natural voices, minimal robotic feel", "Supports custom voice cloning", "Has an API for developers"],
        cons: ["Free tier limited in monthly characters", "Price scales up fast with heavier usage"],
      },
      fr: {
        tagline: "Synthèse vocale IA de référence, la plus naturelle du marché.",
        description:
          "ElevenLabs est un outil de synthèse vocale et de clonage de voix salué pour le naturel de ses voix. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfaits payants dès 5 $/mois",
        pros: ["Voix naturelles, peu d'effet robotique", "Clonage de voix personnalisé", "API disponible pour les développeurs"],
        cons: ["Version gratuite limitée en caractères par mois", "Le prix grimpe vite avec un usage intensif"],
      },
    },
  },
  {
    slug: "suno",
    name: "Suno",
    category: "audio",
    website: "https://suno.com",
    affiliateUrl: "https://suno.com",
    rating: 4.4,
    content: {
      en: {
        tagline: "Generate full songs — music and lyrics — from one short prompt.",
        description:
          "Suno generates both the music and the lyrics from a short text prompt, no musical skills required. Full review coming soon.",
        pricing: "Limited free tier; paid plans from $10/month",
        pros: ["Fast song generation, quality keeps improving", "No music theory knowledge needed", "Active community sharing songs"],
        cons: ["AI music copyright remains a debated topic", "Free tier limited in songs per month"],
      },
      fr: {
        tagline: "Générez des chansons complètes — musique et paroles — en une phrase.",
        description:
          "Suno génère à la fois la musique et les paroles à partir d'une courte description, sans compétences musicales requises. Avis complet à venir.",
        pricing: "Forfait gratuit limité ; forfaits payants dès 10 $/mois",
        pros: ["Génération rapide, qualité en progrès constant", "Aucune connaissance musicale requise", "Communauté active qui partage ses créations"],
        cons: ["Le droit d'auteur sur la musique IA reste débattu", "Forfait gratuit limité en chansons par mois"],
      },
    },
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "search",
    website: "https://www.perplexity.ai",
    affiliateUrl: "https://www.perplexity.ai",
    rating: 4.5,
    featured: true,
    content: {
      en: {
        tagline: "AI search engine that answers with clear source citations.",
        description:
          "Perplexity blends web search with AI to answer questions with clear source citations, great for research and quick lookups. Full review coming soon.",
        pricing: "Free tier available; Pro plan from $20/month",
        pros: ["Clear source citations with every answer", "Continuously updated information", "Fast, focused search interface"],
        cons: ["Answers can sometimes lack depth", "Free tier limited on Pro search count"],
      },
      fr: {
        tagline: "Moteur de recherche IA qui cite clairement ses sources.",
        description:
          "Perplexity combine recherche web et IA pour répondre avec des sources claires, idéal pour la recherche et les vérifications rapides. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfait Pro à partir de 20 $/mois",
        pros: ["Sources clairement citées à chaque réponse", "Informations mises à jour en continu", "Interface de recherche rapide et épurée"],
        cons: ["Les réponses peuvent parfois manquer de profondeur", "Forfait gratuit limité en recherches Pro"],
      },
    },
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "productivity",
    website: "https://www.notion.so/product/ai",
    affiliateUrl: "https://www.notion.so/product/ai",
    rating: 4.3,
    featured: true,
    content: {
      en: {
        tagline: "AI assistant built right into your Notion workspace.",
        description:
          "Notion AI helps write, summarize, translate and organize content directly inside Notion, boosting team productivity. Full review coming soon.",
        pricing: "Add-on to a Notion plan, from $8-10/member/month",
        pros: ["Seamlessly built into Notion", "Great for quick drafts and summaries", "Useful for team collaboration"],
        cons: ["Only useful if you already use Notion", "Extra cost scales per team member"],
      },
      fr: {
        tagline: "Assistant IA intégré directement dans votre espace Notion.",
        description:
          "Notion AI aide à rédiger, résumer, traduire et organiser du contenu directement dans Notion, pour plus de productivité en équipe. Avis complet à venir.",
        pricing: "Option additionnelle à un forfait Notion, dès 8-10 $/membre/mois",
        pros: ["Intégration fluide dans Notion", "Pratique pour brouillons et résumés rapides", "Utile pour le travail en équipe"],
        cons: ["Utile seulement si vous utilisez déjà Notion", "Coût supplémentaire par membre d'équipe"],
      },
    },
  },
  {
    slug: "gamma",
    name: "Gamma",
    category: "design",
    website: "https://gamma.app",
    affiliateUrl: "https://gamma.app",
    rating: 4.4,
    content: {
      en: {
        tagline: "Generate polished presentation decks from a few lines of text.",
        description:
          "Gamma uses AI to quickly generate slides, docs and web pages, saving a lot of design time. Full review coming soon.",
        pricing: "Free tier available; paid plans from $8/month",
        pros: ["Fast slide generation with good-looking layouts", "Easy to edit without design skills", "Exports to multiple formats"],
        cons: ["Limited AI generations on the free tier", "Deep design customization is limited"],
      },
      fr: {
        tagline: "Générez des présentations soignées à partir de quelques lignes.",
        description:
          "Gamma utilise l'IA pour créer rapidement des diaporamas, documents et pages web, un vrai gain de temps en design. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfaits payants dès 8 $/mois",
        pros: ["Génération rapide avec des mises en page soignées", "Facile à modifier sans compétences en design", "Export vers plusieurs formats"],
        cons: ["Générations IA limitées en version gratuite", "Personnalisation avancée du design limitée"],
      },
    },
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "coding",
    website: "https://github.com/features/copilot",
    affiliateUrl: "https://github.com/features/copilot",
    rating: 4.5,
    featured: true,
    content: {
      en: {
        tagline: "AI pair programmer right in your editor, context-aware suggestions.",
        description:
          "GitHub Copilot suggests and autocompletes code directly in your IDE, supporting most popular programming languages. Full review coming soon.",
        pricing: "From $10/month, free for students and open-source maintainers",
        pros: ["Deep integration with VS Code, JetBrains", "Suggestions match your project's context well", "Saves time on repetitive code"],
        cons: ["Not free for most individual users", "Suggestions sometimes need logic double-checking"],
      },
      fr: {
        tagline: "Copilote de code IA directement dans votre éditeur, sensible au contexte.",
        description:
          "GitHub Copilot suggère et complète le code directement dans votre IDE, pour la plupart des langages populaires. Avis complet à venir.",
        pricing: "Dès 10 $/mois, gratuit pour étudiants et mainteneurs open source",
        pros: ["Intégration poussée avec VS Code, JetBrains", "Suggestions bien adaptées au contexte du projet", "Gain de temps sur le code répétitif"],
        cons: ["Pas gratuit pour la plupart des utilisateurs individuels", "Suggestions parfois à vérifier côté logique"],
      },
    },
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "coding",
    website: "https://cursor.com",
    affiliateUrl: "https://cursor.com",
    rating: 4.6,
    featured: true,
    content: {
      en: {
        tagline: "A code editor built from the ground up for AI-assisted coding.",
        description:
          "Cursor is a code editor (forked from VS Code) with deep AI integration — chat with your codebase, auto-fix bugs, and refactor. Full review coming soon.",
        pricing: "Limited free tier; Pro plan from $20/month",
        pros: ["Strong understanding of your whole codebase", "Smooth experience since it's built for AI coding", "Ships new features quickly"],
        cons: ["Takes adjustment if you're used to plain VS Code", "Free tier limited on AI requests"],
      },
      fr: {
        tagline: "Un éditeur de code pensé dès le départ pour coder avec l'IA.",
        description:
          "Cursor est un éditeur de code (fork de VS Code) avec une IA profondément intégrée — chat sur votre codebase, correction et refactorisation automatiques. Avis complet à venir.",
        pricing: "Forfait gratuit limité ; forfait Pro à partir de 20 $/mois",
        pros: ["Bonne compréhension de l'ensemble du codebase", "Expérience fluide car pensée pour le code IA", "Nouvelles fonctionnalités livrées rapidement"],
        cons: ["Demande un temps d'adaptation si vous venez de VS Code classique", "Forfait gratuit limité en requêtes IA"],
      },
    },
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    category: "design",
    website: "https://www.canva.com/ai-image-generator/",
    affiliateUrl: "https://www.canva.com/ai-image-generator/",
    rating: 4.4,
    content: {
      en: {
        tagline: "AI design toolkit built into Canva (Magic Studio).",
        description:
          "Canva bundles an AI toolkit (Magic Studio) for image generation, background removal, copywriting and fast design work. Full review coming soon.",
        pricing: "Free tier available; Pro plan from $12/month",
        pros: ["Easy to use, great for non-designers", "Many AI features bundled in", "Huge template library"],
        cons: ["AI usage limited on the free tier", "AI image quality trails dedicated tools"],
      },
      fr: {
        tagline: "Boîte à outils IA intégrée à Canva (Magic Studio).",
        description:
          "Canva regroupe des outils IA (Magic Studio) pour générer des images, détourer, rédiger et concevoir rapidement. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfait Pro à partir de 12 $/mois",
        pros: ["Facile à utiliser, idéal pour les non-designers", "Nombreuses fonctionnalités IA intégrées", "Immense bibliothèque de modèles"],
        cons: ["Usage IA limité en version gratuite", "Qualité d'image IA en retrait face aux outils dédiés"],
      },
    },
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "writing",
    website: "https://www.jasper.ai",
    affiliateUrl: "https://www.jasper.ai",
    rating: 4.2,
    content: {
      en: {
        tagline: "AI content platform built for marketing teams.",
        description:
          "Jasper is an AI writing tool aimed at marketing teams and businesses, focused on keeping a consistent brand voice. Full review coming soon.",
        pricing: "From $39/month, no permanent free tier",
        pros: ["Many marketing content templates", "Brand Voice keeps tone consistent", "Built for team workflows"],
        cons: ["Fairly expensive compared to alternatives", "Steep learning curve at first"],
      },
      fr: {
        tagline: "Plateforme de contenu IA conçue pour les équipes marketing.",
        description:
          "Jasper est un outil de rédaction IA destiné aux équipes marketing et aux entreprises, pensé pour garder une voix de marque cohérente. Avis complet à venir.",
        pricing: "Dès 39 $/mois, pas de forfait gratuit permanent",
        pros: ["Nombreux modèles de contenu marketing", "Brand Voice pour un ton cohérent", "Pensé pour le travail en équipe"],
        cons: ["Assez cher comparé aux alternatives", "Courbe d'apprentissage un peu raide au début"],
      },
    },
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    category: "writing",
    website: "https://www.copy.ai",
    affiliateUrl: "https://www.copy.ai",
    rating: 4.1,
    content: {
      en: {
        tagline: "AI writing and workflow automation for marketing and sales.",
        description:
          "Copy.ai helps write marketing content while also offering automation workflows for sales and marketing teams. Full review coming soon.",
        pricing: "Free tier available; paid plans from $49/month",
        pros: ["Free tier to try before you buy", "Many ready-made automation workflows", "Friendly interface, easy to start"],
        cons: ["Output usually needs further editing", "Paid pricing scales up quickly with usage"],
      },
      fr: {
        tagline: "Rédaction IA et automatisation pour marketing et ventes.",
        description:
          "Copy.ai aide à rédiger du contenu marketing tout en proposant des workflows d'automatisation pour les équipes ventes et marketing. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfaits payants dès 49 $/mois",
        pros: ["Version gratuite pour tester", "Nombreux workflows d'automatisation prêts à l'emploi", "Interface conviviale, prise en main facile"],
        cons: ["Le résultat nécessite généralement des retouches", "Le prix grimpe vite selon l'usage"],
      },
    },
  },
  {
    slug: "zapier-ai",
    name: "Zapier AI",
    category: "productivity",
    website: "https://zapier.com/ai",
    affiliateUrl: "https://zapier.com/ai",
    rating: 4.3,
    content: {
      en: {
        tagline: "Automate your workflows with AI-assisted Zapier.",
        description:
          "Zapier bakes AI into its well-known workflow automation platform, connecting thousands of apps without any code. Full review coming soon.",
        pricing: "Limited free tier; paid plans from $20/month",
        pros: ["Connects an enormous number of apps", "No coding knowledge required", "AI speeds up building new workflows"],
        cons: ["Price rises quickly with more monthly tasks", "Complex workflows still take time to learn"],
      },
      fr: {
        tagline: "Automatisez vos workflows avec l'IA intégrée à Zapier.",
        description:
          "Zapier intègre l'IA à sa célèbre plateforme d'automatisation, connectant des milliers d'applications sans code. Avis complet à venir.",
        pricing: "Forfait gratuit limité ; forfaits payants dès 20 $/mois",
        pros: ["Connecte un nombre impressionnant d'applications", "Aucune compétence en code requise", "L'IA accélère la création de workflows"],
        cons: ["Le prix grimpe vite avec plus de tâches mensuelles", "Les workflows complexes demandent du temps à maîtriser"],
      },
    },
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}

export function getToolsByCategory(): Record<string, Tool[]> {
  return tools.reduce<Record<string, Tool[]>>((acc, tool) => {
    acc[tool.category] = acc[tool.category] ? [...acc[tool.category], tool] : [tool];
    return acc;
  }, {});
}
