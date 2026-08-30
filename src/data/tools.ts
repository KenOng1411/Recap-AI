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
  lastUpdated: string; // ISO date — bump this whenever the review copy changes
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
    content: {
      en: {
        tagline: "AI image generator excelling at accurate text rendering.",
        description:
          "Ideogram stands out for rendering text inside images far more accurately than most competitors. Full review coming soon.",
        pricing: "Free plan available, with paid tiers starting at $8/month",
        pros: ["Strong at rendering text within images", "Free tier to try it out", "Simple, easy-to-use web interface"],
        cons: ["Image detail sometimes trails Midjourney", "Style library not as broad as competitors"],
      },
      fr: {
        tagline: "Générateur d'images IA excellant dans le rendu de texte.",
        description:
          "Ideogram se distingue par un rendu de texte dans les images bien plus précis que la plupart des concurrents. Avis complet à venir.",
        pricing: "Version gratuite disponible, forfaits payants dès 8 $/mois",
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
    lastUpdated: "2026-08-01",
    featured: true,
    content: {
      en: {
        tagline: "A professional AI video generation and editing toolkit.",
        description:
          "Runway offers text/image-to-video AI models alongside an AI-powered video editing suite. Full review coming soon.",
        pricing: "$12/month after a limited free trial",
        pros: ["Many AI video tools in one platform", "Quality improves quickly with each release", "Great fit for filmmakers and content creators"],
        cons: ["Pricing rises quickly with heavier rendering needs", "Takes time to learn the full feature set"],
      },
      fr: {
        tagline: "Une suite professionnelle de génération et montage vidéo par IA.",
        description:
          "Runway propose des modèles IA texte/image vers vidéo ainsi qu'une suite de montage vidéo assistée par IA. Avis complet à venir.",
        pricing: "12 $/mois après un essai gratuit limité",
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
    lastUpdated: "2026-08-01",
    content: {
      en: {
        tagline: "Generate talking AI avatar videos in multiple languages.",
        description:
          "HeyGen creates videos with AI avatars speaking a script, with multilingual voiceover support — great for marketing and training videos. Full review coming soon.",
        pricing: "Free to try in a limited way; full plans from $24/month",
        pros: ["Natural-looking avatars, many options", "Strong multilingual support", "Great for fast marketing/training videos"],
        cons: ["AI voice can still sound slightly robotic", "Free tier limited in video minutes"],
      },
      fr: {
        tagline: "Créez des vidéos avec avatar IA parlant en plusieurs langues.",
        description:
          "HeyGen génère des vidéos avec des avatars IA qui lisent un script, avec voix off multilingue — idéal pour le marketing et la formation. Avis complet à venir.",
        pricing: "Essai gratuit limité ; forfaits complets dès 24 $/mois",
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
    lastUpdated: "2026-08-01",
    featured: true,
    content: {
      en: {
        tagline: "Leading text-to-speech with the most natural AI voices.",
        description:
          "ElevenLabs is a text-to-speech and voice-cloning tool praised for how natural its voices sound. Full review coming soon.",
        pricing: "Try it free; paid plans kick in at $5/month",
        pros: ["Natural voices, minimal robotic feel", "Supports custom voice cloning", "Has an API for developers"],
        cons: ["Free tier limited in monthly characters", "Price scales up fast with heavier usage"],
      },
      fr: {
        tagline: "Synthèse vocale IA de référence, la plus naturelle du marché.",
        description:
          "ElevenLabs est un outil de synthèse vocale et de clonage de voix salué pour le naturel de ses voix. Avis complet à venir.",
        pricing: "Gratuit pour commencer ; les forfaits payants démarrent à 5 $/mois",
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
    lastUpdated: "2026-08-01",
    content: {
      en: {
        tagline: "Generate full songs — music and lyrics — from one short prompt.",
        description:
          "Suno generates both the music and the lyrics from a short text prompt, no musical skills required. Full review coming soon.",
        pricing: "A capped free plan, then $10/month for the full version",
        pros: ["Fast song generation, quality keeps improving", "No music theory knowledge needed", "Active community sharing songs"],
        cons: ["AI music copyright remains a debated topic", "Free tier limited in songs per month"],
      },
      fr: {
        tagline: "Générez des chansons complètes — musique et paroles — en une phrase.",
        description:
          "Suno génère à la fois la musique et les paroles à partir d'une courte description, sans compétences musicales requises. Avis complet à venir.",
        pricing: "Un plan gratuit plafonné, puis 10 $/mois pour la version complète",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
    content: {
      en: {
        tagline: "Generate polished presentation decks from a few lines of text.",
        description:
          "Gamma uses AI to quickly generate slides, docs and web pages, saving a lot of design time. Full review coming soon.",
        pricing: "Has a free tier — upgrade to a paid plan from $8/month for more",
        pros: ["Fast slide generation with good-looking layouts", "Easy to edit without design skills", "Exports to multiple formats"],
        cons: ["Limited AI generations on the free tier", "Deep design customization is limited"],
      },
      fr: {
        tagline: "Générez des présentations soignées à partir de quelques lignes.",
        description:
          "Gamma utilise l'IA pour créer rapidement des diaporamas, documents et pages web, un vrai gain de temps en design. Avis complet à venir.",
        pricing: "Un plan gratuit existe ; passez au payant dès 8 $/mois pour plus",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
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
    lastUpdated: "2026-08-01",
    content: {
      en: {
        tagline: "AI writing and workflow automation for marketing and sales.",
        description:
          "Copy.ai helps write marketing content while also offering automation workflows for sales and marketing teams. Full review coming soon.",
        pricing: "Free to start, $49/month unlocks the paid tier",
        pros: ["Free tier to try before you buy", "Many ready-made automation workflows", "Friendly interface, easy to start"],
        cons: ["Output usually needs further editing", "Paid pricing scales up quickly with usage"],
      },
      fr: {
        tagline: "Rédaction IA et automatisation pour marketing et ventes.",
        description:
          "Copy.ai aide à rédiger du contenu marketing tout en proposant des workflows d'automatisation pour les équipes ventes et marketing. Avis complet à venir.",
        pricing: "Gratuit au départ, 49 $/mois pour débloquer le forfait payant",
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
    lastUpdated: "2026-08-01",
    content: {
      en: {
        tagline: "Automate your workflows with AI-assisted Zapier.",
        description:
          "Zapier bakes AI into its well-known workflow automation platform, connecting thousands of apps without any code. Full review coming soon.",
        pricing: "Capped free usage, $20/month once you outgrow it",
        pros: ["Connects an enormous number of apps", "No coding knowledge required", "AI speeds up building new workflows"],
        cons: ["Price rises quickly with more monthly tasks", "Complex workflows still take time to learn"],
      },
      fr: {
        tagline: "Automatisez vos workflows avec l'IA intégrée à Zapier.",
        description:
          "Zapier intègre l'IA à sa célèbre plateforme d'automatisation, connectant des milliers d'applications sans code. Avis complet à venir.",
        pricing: "Usage gratuit plafonné, 20 $/mois une fois dépassé",
        pros: ["Connecte un nombre impressionnant d'applications", "Aucune compétence en code requise", "L'IA accélère la création de workflows"],
        cons: ["Le prix grimpe vite avec plus de tâches mensuelles", "Les workflows complexes demandent du temps à maîtriser"],
      },
    },
  },
  {
    slug: "grok",
    name: "Grok",
    category: "chatbot",
    website: "https://grok.com",
    affiliateUrl: "https://grok.com",
    rating: 4.2,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "xAI's chatbot, tightly integrated with X (Twitter) and real-time data.",
        description:
          "Grok is xAI's conversational AI, known for a more irreverent tone and access to real-time information via X. Full review coming soon.",
        pricing: "Free tier available; premium via X Premium+ or standalone subscription",
        pros: ["Access to real-time information/trends", "Distinct, less formal personality", "Fast-moving feature updates"],
        cons: ["Free tier usage limits", "Tone won't suit every use case"],
      },
      fr: {
        tagline: "Le chatbot de xAI, étroitement lié à X (Twitter) et aux données en temps réel.",
        description:
          "Grok est l'IA conversationnelle de xAI, reconnue pour un ton plus décontracté et un accès à l'information en temps réel via X. Avis complet à venir.",
        pricing: "Version gratuite disponible ; premium via X Premium+ ou abonnement autonome",
        pros: ["Accès à l'info/tendances en temps réel", "Personnalité distincte, moins formelle", "Mises à jour très fréquentes"],
        cons: ["Limites d'usage en version gratuite", "Ton qui ne conviendra pas à tous les usages"],
      },
    },
  },
  {
    slug: "mistral-le-chat",
    name: "Le Chat by Mistral",
    category: "chatbot",
    website: "https://chat.mistral.ai",
    affiliateUrl: "https://chat.mistral.ai",
    rating: 4.2,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "European AI chatbot from Mistral, fast and privacy-conscious.",
        description:
          "Le Chat is Mistral AI's assistant, built on their own open-weight models and positioned around speed and data privacy. Full review coming soon.",
        pricing: "Free tier available; Pro plan from €14.99/month",
        pros: ["Fast response times", "Strong privacy/EU-hosting positioning", "Built on actively developed open models"],
        cons: ["Smaller plugin/integration ecosystem", "Less brand recognition than US rivals"],
      },
      fr: {
        tagline: "Chatbot IA européen signé Mistral, rapide et soucieux de la confidentialité.",
        description:
          "Le Chat est l'assistant de Mistral AI, construit sur leurs propres modèles ouverts, avec un positionnement axé sur la rapidité et la confidentialité des données. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfait Pro à partir de 14,99 €/mois",
        pros: ["Temps de réponse rapides", "Positionnement fort sur la confidentialité/hébergement UE", "Basé sur des modèles ouverts activement développés"],
        cons: ["Écosystème de plugins/intégrations plus restreint", "Moins de notoriété que les rivaux américains"],
      },
    },
  },
  {
    slug: "meta-ai",
    name: "Meta AI",
    category: "chatbot",
    website: "https://www.meta.ai",
    affiliateUrl: "https://www.meta.ai",
    rating: 4.0,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Meta's free AI assistant, built into Instagram, WhatsApp and Facebook.",
        description:
          "Meta AI is built on Meta's Llama models and embedded across Meta's own apps as well as a standalone site. Full review coming soon.",
        pricing: "Free",
        pros: ["Completely free", "Built into apps people already use daily", "Decent image generation built in"],
        cons: ["Less refined for complex/professional tasks", "Privacy trade-offs given Meta's ad business"],
      },
      fr: {
        tagline: "L'assistant IA gratuit de Meta, intégré à Instagram, WhatsApp et Facebook.",
        description:
          "Meta AI s'appuie sur les modèles Llama de Meta et est intégré dans les applications Meta ainsi que sur un site dédié. Avis complet à venir.",
        pricing: "Gratuit",
        pros: ["Entièrement gratuit", "Intégré aux applications déjà utilisées au quotidien", "Génération d'images intégrée correcte"],
        cons: ["Moins abouti pour les tâches complexes/professionnelles", "Compromis sur la confidentialité vu le modèle publicitaire de Meta"],
      },
    },
  },
  {
    slug: "poe",
    name: "Poe",
    category: "chatbot",
    website: "https://poe.com",
    affiliateUrl: "https://poe.com",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "One subscription, access to nearly every major AI chatbot model.",
        description:
          "Poe (by Quora) is an aggregator that lets you chat with ChatGPT, Claude, Gemini and many more models from a single subscription. Full review coming soon.",
        pricing: "Free plan on offer; paid tiers begin at $19.99/month",
        pros: ["One place to compare answers across models", "Frequently adds new models on day one", "Custom bot creation without code"],
        cons: ["Costs more than using one model directly", "Can be overwhelming with so many model choices"],
      },
      fr: {
        tagline: "Un seul abonnement pour accéder à presque tous les grands modèles de chatbot IA.",
        description:
          "Poe (par Quora) est un agrégateur qui permet de discuter avec ChatGPT, Claude, Gemini et bien d'autres modèles via un seul abonnement. Avis complet à venir.",
        pricing: "Offre gratuite disponible ; forfaits payants à partir de 19,99 $/mois",
        pros: ["Un seul endroit pour comparer les réponses entre modèles", "Ajoute souvent les nouveaux modèles dès leur sortie", "Création de bots personnalisés sans code"],
        cons: ["Coûte plus cher qu'utiliser un seul modèle directement", "Le choix de modèles peut être déroutant"],
      },
    },
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    category: "image",
    website: "https://leonardo.ai",
    affiliateUrl: "https://leonardo.ai",
    rating: 4.4,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI image generator popular for game assets and fine-tuned styles.",
        description:
          "Leonardo AI offers a large library of fine-tuned models and style presets, popular with game developers and designers. Full review coming soon.",
        pricing: "A free tier exists; paid plans start from $12/month",
        pros: ["Large library of fine-tuned style presets", "Strong for game/concept art assets", "Generous free tier to start"],
        cons: ["Interface has a learning curve with so many options", "Best presets often reserved for paid tiers"],
      },
      fr: {
        tagline: "Générateur d'images IA populaire pour les assets de jeu et styles affinés.",
        description:
          "Leonardo AI propose une grande bibliothèque de modèles affinés et de préréglages de style, apprécié des développeurs de jeux et designers. Avis complet à venir.",
        pricing: "Un palier gratuit existe ; forfaits payants dès 12 $/mois",
        pros: ["Grande bibliothèque de préréglages de style", "Excellent pour les assets de jeu/concept art", "Version gratuite généreuse pour démarrer"],
        cons: ["Interface avec une courbe d'apprentissage vu le nombre d'options", "Meilleurs préréglages souvent réservés aux forfaits payants"],
      },
    },
  },
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    category: "image",
    website: "https://firefly.adobe.com",
    affiliateUrl: "https://firefly.adobe.com",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Adobe's AI image generator, trained to be commercially safe and integrated into Creative Cloud.",
        description:
          "Firefly is Adobe's generative AI, built into Photoshop and Illustrator with a focus on commercially-safe training data. Full review coming soon.",
        pricing: "Free tier available; included in some Creative Cloud plans, or from $9.99/month standalone",
        pros: ["Trained on licensed/public domain content for commercial safety", "Deep integration with Photoshop/Illustrator", "Generative Fill is genuinely useful"],
        cons: ["Artistic quality can trail Midjourney", "Full power requires a Creative Cloud subscription"],
      },
      fr: {
        tagline: "Générateur d'images IA d'Adobe, pensé pour un usage commercial sûr et intégré à Creative Cloud.",
        description:
          "Firefly est l'IA générative d'Adobe, intégrée à Photoshop et Illustrator, avec un accent sur des données d'entraînement sûres pour un usage commercial. Avis complet à venir.",
        pricing: "Version gratuite disponible ; inclus dans certains forfaits Creative Cloud, ou dès 9,99 $/mois en autonome",
        pros: ["Entraîné sur du contenu sous licence/domaine public pour un usage commercial sûr", "Intégration poussée avec Photoshop/Illustrator", "Generative Fill vraiment utile"],
        cons: ["Qualité artistique parfois en retrait face à Midjourney", "Plein potentiel nécessite un abonnement Creative Cloud"],
      },
    },
  },
  {
    slug: "stability-ai",
    name: "Stability AI",
    category: "image",
    website: "https://stability.ai",
    affiliateUrl: "https://stability.ai",
    rating: 4.1,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Maker of Stable Diffusion, the open-weight image model family.",
        description:
          "Stability AI develops the Stable Diffusion model family, offered via their own platform and widely used through third-party tools. Full review coming soon.",
        pricing: "Varies by access point; API and membership plans from $9/month",
        pros: ["Open-weight models usable outside their platform", "Huge third-party tool/plugin ecosystem", "Strong for users who want local control"],
        cons: ["Out-of-the-box quality trails closed competitors", "Best results often require technical setup"],
      },
      fr: {
        tagline: "Créateur de Stable Diffusion, la famille de modèles d'image à poids ouverts.",
        description:
          "Stability AI développe la famille de modèles Stable Diffusion, disponible via leur propre plateforme et largement utilisée via des outils tiers. Avis complet à venir.",
        pricing: "Variable selon le point d'accès ; API et abonnements dès 9 $/mois",
        pros: ["Modèles à poids ouverts utilisables hors de leur plateforme", "Immense écosystème d'outils/plugins tiers", "Idéal pour qui veut un contrôle local"],
        cons: ["Qualité par défaut en retrait face aux concurrents fermés", "Meilleurs résultats demandent souvent une config technique"],
      },
    },
  },
  {
    slug: "pika",
    name: "Pika",
    category: "video",
    website: "https://pika.art",
    affiliateUrl: "https://pika.art",
    rating: 4.2,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI video generator known for playful, easy-to-use effects.",
        description:
          "Pika generates and edits short AI videos, with a set of signature one-click effects that made it popular on social media. Full review coming soon.",
        pricing: "Free version available, paid plans from $10/month for heavier use",
        pros: ["Fun, one-click video effects", "Approachable for non-editors", "Fast generation times"],
        cons: ["Shorter clip lengths than some competitors", "Free tier watermarks output"],
      },
      fr: {
        tagline: "Générateur de vidéo IA connu pour ses effets ludiques et faciles à utiliser.",
        description:
          "Pika génère et édite de courtes vidéos IA, avec des effets signature en un clic qui l'ont rendu populaire sur les réseaux sociaux. Avis complet à venir.",
        pricing: "Version gratuite disponible, forfaits payants dès 10 $/mois pour un usage plus intensif",
        pros: ["Effets vidéo amusants en un clic", "Accessible pour les non-monteurs", "Temps de génération rapides"],
        cons: ["Clips plus courts que certains concurrents", "Filigrane sur la version gratuite"],
      },
    },
  },
  {
    slug: "luma-dream-machine",
    name: "Luma Dream Machine",
    category: "video",
    website: "https://lumalabs.ai",
    affiliateUrl: "https://lumalabs.ai",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Luma AI's text/image-to-video model, known for smooth camera motion.",
        description:
          "Dream Machine generates video from text or an image, praised for natural-looking motion and camera movement. Full review coming soon.",
        pricing: "Comes with a free plan; paid tiers start at $9.99/month",
        pros: ["Smooth, natural motion quality", "Good image-to-video results", "Simple, fast interface"],
        cons: ["Limited fine-grained control over the output", "Queue times during peak usage"],
      },
      fr: {
        tagline: "Le modèle texte/image vers vidéo de Luma AI, réputé pour ses mouvements de caméra fluides.",
        description:
          "Dream Machine génère des vidéos à partir de texte ou d'une image, salué pour la fluidité naturelle du mouvement et de la caméra. Avis complet à venir.",
        pricing: "Un plan gratuit est proposé ; forfaits payants dès 9,99 $/mois",
        pros: ["Qualité de mouvement fluide et naturelle", "Bons résultats en image vers vidéo", "Interface simple et rapide"],
        cons: ["Contrôle fin limité sur le résultat", "Temps d'attente aux heures de pointe"],
      },
    },
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    category: "video",
    website: "https://www.synthesia.io",
    affiliateUrl: "https://www.synthesia.io",
    rating: 4.4,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Enterprise-focused AI avatar video for training and corporate content.",
        description:
          "Synthesia creates videos with AI presenters from a script, widely used for corporate training and internal comms. Full review coming soon.",
        pricing: "Paid plans from $18/month, no permanent free tier",
        pros: ["Polished, professional avatar quality", "Strong enterprise features (SSO, brand kits)", "Wide language/voice support"],
        cons: ["No lasting free plan to try fully", "Geared more toward business than individual creators"],
      },
      fr: {
        tagline: "Vidéo IA à avatar orientée entreprise, pour formation et contenu corporate.",
        description:
          "Synthesia crée des vidéos avec des présentateurs IA à partir d'un script, largement utilisé pour la formation en entreprise et la communication interne. Avis complet à venir.",
        pricing: "Forfaits payants dès 18 $/mois, pas de forfait gratuit permanent",
        pros: ["Qualité d'avatar soignée et professionnelle", "Fonctionnalités entreprise solides (SSO, kits de marque)", "Large support de langues/voix"],
        cons: ["Pas de forfait gratuit durable pour tester pleinement", "Plutôt pensé pour les entreprises que les créateurs individuels"],
      },
    },
  },
  {
    slug: "descript",
    name: "Descript",
    category: "audio",
    website: "https://www.descript.com",
    affiliateUrl: "https://www.descript.com",
    rating: 4.5,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Edit audio and video by editing text — plus AI voice cloning.",
        description:
          "Descript lets you edit podcasts and videos like a text document, with AI features like filler-word removal and voice cloning. Full review coming soon.",
        pricing: "Free plan available, with paid tiers starting at $12/month",
        pros: ["Text-based editing is a genuine workflow shift", "Overdub voice cloning works well", "Good for podcasters and video editors alike"],
        cons: ["Can feel heavy for very simple edits", "Higher tiers needed for longer transcription limits"],
      },
      fr: {
        tagline: "Éditez l'audio et la vidéo en éditant du texte — avec clonage de voix IA.",
        description:
          "Descript permet d'éditer podcasts et vidéos comme un document texte, avec des fonctions IA comme la suppression des tics de langage et le clonage de voix. Avis complet à venir.",
        pricing: "Version gratuite disponible, forfaits payants dès 12 $/mois",
        pros: ["L'édition par le texte change vraiment le workflow", "Le clonage de voix Overdub fonctionne bien", "Adapté aux podcasteurs comme aux monteurs vidéo"],
        cons: ["Peut sembler lourd pour des montages très simples", "Forfaits supérieurs nécessaires pour plus de transcription"],
      },
    },
  },
  {
    slug: "murf-ai",
    name: "Murf AI",
    category: "audio",
    website: "https://murf.ai",
    affiliateUrl: "https://murf.ai",
    rating: 4.2,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Text-to-speech voiceovers aimed at presentations and e-learning.",
        description:
          "Murf generates voiceovers from text with a large voice library, positioned for business presentations, e-learning and marketing videos. Full review coming soon.",
        pricing: "Free tier available; paid plans from $19/month (billed annually)",
        pros: ["Large, varied voice library", "Built-in editor for timing/emphasis", "Good fit for corporate/e-learning content"],
        cons: ["Voices slightly less natural than ElevenLabs for some accents", "Commercial usage rights tied to plan tier"],
      },
      fr: {
        tagline: "Voix off text-to-speech pensées pour présentations et e-learning.",
        description:
          "Murf génère des voix off à partir de texte avec une large bibliothèque de voix, positionné pour les présentations d'entreprise, l'e-learning et le marketing vidéo. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfaits payants dès 19 $/mois (facturé annuellement)",
        pros: ["Bibliothèque de voix large et variée", "Éditeur intégré pour le timing/l'emphase", "Bien adapté au contenu corporate/e-learning"],
        cons: ["Voix légèrement moins naturelles qu'ElevenLabs pour certains accents", "Droits d'usage commercial liés au forfait"],
      },
    },
  },
  {
    slug: "udio",
    name: "Udio",
    category: "audio",
    website: "https://www.udio.com",
    affiliateUrl: "https://www.udio.com",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI music generator and Suno's closest direct competitor.",
        description:
          "Udio generates full songs from a text prompt, often compared closely with Suno for output quality and style range. Full review coming soon.",
        pricing: "Try it free; paid plans kick in at $10/month",
        pros: ["High-quality, varied musical output", "Active community and remix features", "Free tier to try before paying"],
        cons: ["Same copyright/licensing questions facing all AI music tools", "Generation credits run out quickly on lower tiers"],
      },
      fr: {
        tagline: "Générateur de musique IA, concurrent direct de Suno.",
        description:
          "Udio génère des chansons complètes à partir d'une description texte, souvent comparé de près à Suno pour la qualité et la variété de styles. Avis complet à venir.",
        pricing: "Gratuit pour commencer ; les forfaits payants démarrent à 10 $/mois",
        pros: ["Résultats musicaux variés et de qualité", "Communauté active et fonctions de remix", "Version gratuite pour tester avant de payer"],
        cons: ["Mêmes questions de droits d'auteur que tous les outils de musique IA", "Crédits de génération limités sur les forfaits d'entrée"],
      },
    },
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    category: "writing",
    website: "https://writesonic.com",
    affiliateUrl: "https://writesonic.com",
    rating: 4.0,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI writing platform bundled with SEO tools like Surfer integration.",
        description:
          "Writesonic offers AI content generation alongside SEO-focused features, aimed at content marketers and agencies. Full review coming soon.",
        pricing: "Free trial available; paid plans from $19/month",
        pros: ["SEO-oriented features built in", "Good range of content templates", "Chatsonic mode for conversational drafting"],
        cons: ["Output often needs a solid editing pass", "Pricing tiers can get confusing"],
      },
      fr: {
        tagline: "Plateforme de rédaction IA avec des outils SEO type Surfer intégrés.",
        description:
          "Writesonic propose de la génération de contenu IA associée à des fonctionnalités orientées SEO, destinée aux marketeurs de contenu et agences. Avis complet à venir.",
        pricing: "Essai gratuit disponible ; forfaits payants dès 19 $/mois",
        pros: ["Fonctionnalités orientées SEO intégrées", "Bon éventail de modèles de contenu", "Mode Chatsonic pour la rédaction conversationnelle"],
        cons: ["Le résultat nécessite souvent une bonne relecture", "Les paliers de prix peuvent prêter à confusion"],
      },
    },
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    category: "productivity",
    website: "https://otter.ai",
    affiliateUrl: "https://otter.ai",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Live meeting transcription and AI summaries for Zoom, Meet and Teams.",
        description:
          "Otter joins meetings to transcribe in real time and generate AI summaries and action items. Full review coming soon.",
        pricing: "Has a free tier — upgrade to a paid plan from $10/month for more",
        pros: ["Accurate real-time transcription", "Auto-generated summaries save real time", "Integrates with major video call tools"],
        cons: ["Free tier limited on monthly transcription minutes", "Accuracy dips with heavy accents or crosstalk"],
      },
      fr: {
        tagline: "Transcription de réunion en direct et résumés IA pour Zoom, Meet et Teams.",
        description:
          "Otter rejoint les réunions pour transcrire en temps réel et générer des résumés IA et des actions à suivre. Avis complet à venir.",
        pricing: "Un plan gratuit existe ; passez au payant dès 10 $/mois pour plus",
        pros: ["Transcription en temps réel précise", "Résumés automatiques qui font gagner du temps", "S'intègre aux principaux outils de visioconférence"],
        cons: ["Version gratuite limitée en minutes de transcription mensuelles", "Précision qui baisse avec accents marqués ou voix qui se chevauchent"],
      },
    },
  },
  {
    slug: "fireflies-ai",
    name: "Fireflies.ai",
    category: "productivity",
    website: "https://fireflies.ai",
    affiliateUrl: "https://fireflies.ai",
    rating: 4.2,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI meeting notetaker with searchable transcripts across your team's calls.",
        description:
          "Fireflies records and transcribes meetings, then makes every call searchable and summarized across your team. Full review coming soon.",
        pricing: "Free to start, $10/seat/month unlocks the paid tier",
        pros: ["Team-wide searchable call archive", "Solid CRM/integration ecosystem", "Useful auto-generated meeting summaries"],
        cons: ["Free tier limited in storage/transcription length", "Can feel like overkill for solo users"],
      },
      fr: {
        tagline: "Preneur de notes IA pour réunions avec transcriptions recherchables pour toute l'équipe.",
        description:
          "Fireflies enregistre et transcrit les réunions, puis rend chaque appel recherchable et résumé pour toute l'équipe. Avis complet à venir.",
        pricing: "Gratuit au départ, 10 $/utilisateur/mois pour débloquer le forfait payant",
        pros: ["Archive d'appels recherchable pour toute l'équipe", "Bon écosystème d'intégrations CRM", "Résumés de réunion automatiques utiles"],
        cons: ["Version gratuite limitée en stockage/durée de transcription", "Peut sembler excessif pour un usage individuel"],
      },
    },
  },
  {
    slug: "replit",
    name: "Replit",
    category: "coding",
    website: "https://replit.com",
    affiliateUrl: "https://replit.com",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "Browser-based coding platform with an AI Agent that builds full apps.",
        description:
          "Replit combines a cloud dev environment with an AI Agent that can scaffold and build entire small apps from a prompt. Full review coming soon.",
        pricing: "Free tier available; Core plan from $20/month",
        pros: ["No local setup — runs entirely in the browser", "Agent can go from prompt to working app", "Good for learning and quick prototypes"],
        cons: ["Agent credits/usage can get expensive at scale", "Less control than a local professional IDE setup"],
      },
      fr: {
        tagline: "Plateforme de code dans le navigateur avec un Agent IA qui construit des applications complètes.",
        description:
          "Replit combine un environnement de développement cloud avec un Agent IA capable de créer et construire de petites applications complètes à partir d'une consigne. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfait Core à partir de 20 $/mois",
        pros: ["Aucune installation locale — tout dans le navigateur", "L'Agent peut aller de la consigne à une app fonctionnelle", "Bien adapté à l'apprentissage et au prototypage rapide"],
        cons: ["Crédits/usage de l'Agent qui peuvent coûter cher à grande échelle", "Moins de contrôle qu'une configuration IDE locale professionnelle"],
      },
    },
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    category: "coding",
    website: "https://windsurf.com",
    affiliateUrl: "https://windsurf.com",
    rating: 4.4,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI-native code editor (formerly Codeium) with agentic coding flows.",
        description:
          "Windsurf is an AI-first code editor built around agentic, multi-step coding workflows across a whole codebase. Full review coming soon.",
        pricing: "Free plan on offer; paid tiers begin at $15/month",
        pros: ["Strong agentic/multi-step task handling", "Fast-moving product with frequent updates", "Competitive free tier"],
        cons: ["Newer product with a smaller community than incumbents", "Some advanced features still maturing"],
      },
      fr: {
        tagline: "Éditeur de code natif IA (anciennement Codeium) avec workflows agentiques.",
        description:
          "Windsurf est un éditeur de code pensé IA d'abord, construit autour de workflows de code agentiques et multi-étapes sur tout un codebase. Avis complet à venir.",
        pricing: "Offre gratuite disponible ; forfaits payants à partir de 15 $/mois",
        pros: ["Bonne gestion des tâches agentiques/multi-étapes", "Produit qui évolue vite avec des mises à jour fréquentes", "Version gratuite compétitive"],
        cons: ["Produit plus récent avec une communauté plus restreinte que les acteurs historiques", "Certaines fonctionnalités avancées encore en maturation"],
      },
    },
  },
  {
    slug: "you-com",
    name: "You.com",
    category: "search",
    website: "https://you.com",
    affiliateUrl: "https://you.com",
    rating: 4.0,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI search engine with customizable, agent-style research modes.",
        description:
          "You.com combines web search with AI chat and configurable research/agent modes for deeper multi-step queries. Full review coming soon.",
        pricing: "Free tier available; Pro plan from $15/month",
        pros: ["Multiple specialized modes (research, code, etc.)", "Good source transparency", "Customizable results/experience"],
        cons: ["Less mainstream recognition than Perplexity", "Interface has more options to learn upfront"],
      },
      fr: {
        tagline: "Moteur de recherche IA avec modes de recherche façon agent, personnalisables.",
        description:
          "You.com combine recherche web et chat IA avec des modes de recherche/agent configurables pour des requêtes multi-étapes plus poussées. Avis complet à venir.",
        pricing: "Version gratuite disponible ; forfait Pro à partir de 15 $/mois",
        pros: ["Plusieurs modes spécialisés (recherche, code, etc.)", "Bonne transparence des sources", "Résultats/expérience personnalisables"],
        cons: ["Moins connu que Perplexity auprès du grand public", "Interface avec plus d'options à apprivoiser au départ"],
      },
    },
  },
  {
    slug: "framer-ai",
    name: "Framer AI",
    category: "design",
    website: "https://www.framer.com",
    affiliateUrl: "https://www.framer.com",
    rating: 4.3,
    lastUpdated: "2026-08-15",
    content: {
      en: {
        tagline: "AI website builder that generates a full, editable site from a prompt.",
        description:
          "Framer's AI tools can generate an entire responsive website from a text prompt, which you can then visually edit further. Full review coming soon.",
        pricing: "A free tier exists; paid plans start from $5/month",
        pros: ["Generates a genuinely editable site, not just a mockup", "Publishing and hosting built in", "Professional design output out of the box"],
        cons: ["Deeper customization still benefits from design skills", "Free tier is limited for a real production site"],
      },
      fr: {
        tagline: "Créateur de site web IA qui génère un site complet et modifiable à partir d'une consigne.",
        description:
          "Les outils IA de Framer peuvent générer un site web responsive complet à partir d'une consigne texte, modifiable ensuite visuellement. Avis complet à venir.",
        pricing: "Un palier gratuit existe ; forfaits payants dès 5 $/mois",
        pros: ["Génère un site réellement modifiable, pas juste une maquette", "Publication et hébergement intégrés", "Rendu design professionnel dès le départ"],
        cons: ["Personnalisation poussée profite quand même de compétences en design", "Version gratuite limitée pour un vrai site en production"],
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
