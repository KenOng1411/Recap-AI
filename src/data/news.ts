// AI News — real, verified stories only. Each item was fetched from its cited
// source at write time; summaries below are original, not copied from the
// source article. Update this list periodically with fresh, verified items —
// never invent an item or a date.

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string; // ISO date, matches the source's real publish date
  relatedToolSlugs?: string[]; // links to /tools/[slug] on this site, if relevant
}

export const newsItems: NewsItem[] = [
  {
    slug: "openai-anthropic-google-call-for-ai-cyberdefense",
    title: "OpenAI, Anthropic and Google join 100+ companies calling for AI-powered cyber defense",
    summary:
      "In a joint open letter, OpenAI, Anthropic, Google and over a hundred other companies and organizations called for a coordinated push to put AI-driven defensive tools in the hands of the teams protecting critical infrastructure, warning that AI-enabled cyberattacks are set to become far more common and sophisticated.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/",
    publishedAt: "2026-08-27",
    relatedToolSlugs: ["chatgpt", "claude", "gemini"],
  },
  {
    slug: "sony-warner-sue-anthropic-copyright",
    title: "Sony Music Publishing and Warner Chappell file copyright lawsuit against Anthropic",
    summary:
      "Sony Music Publishing and Warner Chappell have sued Anthropic, alleging the company used copyrighted song lyrics to train its Claude models without permission. It's the latest in a wave of copyright litigation targeting AI labs over training data sourcing.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/29/sony-music-warner-sue-anthropic-alleging-a-brazen-campaign-of-intellectual-property-theft/",
    publishedAt: "2026-08-29",
    relatedToolSlugs: ["claude"],
  },
  {
    slug: "openai-chatgpt-ads-india",
    title: "OpenAI begins testing ads on ChatGPT's free and Go tiers in India",
    summary:
      "OpenAI has started showing advertisements to ChatGPT users on its free and lower-cost Go plan in India, a notable shift for a product that has so far relied entirely on subscriptions and API revenue.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/27/openai-to-start-showing-ads-on-chatgpts-free-and-go-tiers-in-india/",
    publishedAt: "2026-08-27",
    relatedToolSlugs: ["chatgpt"],
  },
  {
    slug: "anthropic-self-improving-ai-research",
    title: "Anthropic researcher previews early work on self-improving AI systems",
    summary:
      "An Anthropic researcher shared early findings on models that can iteratively improve their own performance, offering a glimpse at research the company is exploring around AI systems that refine themselves over successive training runs.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/",
    publishedAt: "2026-08-28",
    relatedToolSlugs: ["claude"],
  },
  {
    slug: "open-weight-ai-acquisition-targets",
    title: "Open-weight AI labs become Silicon Valley's hottest acquisition targets",
    summary:
      "Startups building open-weight AI models are increasingly drawing acquisition interest from larger tech companies, as buyers look to secure both talent and openly-licensed model weights rather than building everything from scratch.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/28/open-weight-ai-companies-are-the-valleys-hottest-acquisition-targets/",
    publishedAt: "2026-08-28",
  },
  {
    slug: "gemini-branding-problem",
    title: "Google's Gemini brand still hasn't clicked with mainstream users, report finds",
    summary:
      "Despite Gemini's technical progress, reporting suggests the brand still struggles for mainstream recognition compared to ChatGPT — a challenge the piece frames as symptomatic of a wider naming and positioning problem across the AI industry, not just at Google.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/26/googles-gemini-has-a-branding-problem-and-so-does-the-rest-of-ai/",
    publishedAt: "2026-08-26",
    relatedToolSlugs: ["gemini"],
  },
  {
    slug: "meta-executive-leaves-for-openai",
    title: "Senior Meta executive departs for OpenAI amid scrutiny in India",
    summary:
      "A senior Meta executive has left to join OpenAI, part of a broader pattern of AI talent movement between major labs, reported alongside growing regulatory scrutiny Meta is facing in the Indian market.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/28/meta-executive-leaves-for-openai-as-the-social-media-giant-faces-growing-scrutiny-in-india/",
    publishedAt: "2026-08-28",
    relatedToolSlugs: ["chatgpt", "meta-ai"],
  },
  {
    slug: "nvidia-hugging-face-acquisition",
    title: "Nvidia reportedly nears a deal to acquire Hugging Face",
    summary:
      "Nvidia is reported to be closing in on an acquisition of Hugging Face, the widely-used open-source model hosting and machine learning community platform, which would deepen Nvidia's reach into the AI developer tooling stack.",
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/",
    publishedAt: "2026-08-26",
  },
  {
    slug: "amazon-triples-nvidia-chip-order",
    title: "Amazon triples its Nvidia chip order as AI infrastructure demand surges",
    summary:
      "Amazon has reportedly tripled the size of its Nvidia chip order, citing surging demand for AI compute — another data point in the ongoing infrastructure buildout underpinning the current generation of AI products.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/26/amazon-just-tripled-its-order-of-nvidia-chips-over-surging-demand/",
    publishedAt: "2026-08-26",
  },
  {
    slug: "openai-hugging-face-breach-report",
    title: "OpenAI publishes its official report on the Hugging Face security breach",
    summary:
      "OpenAI released an official report detailing a security breach connected to Hugging Face, outlining what happened and the steps taken in response — part of a broader industry conversation about securing the AI supply chain.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/",
    publishedAt: "2026-08-26",
    relatedToolSlugs: ["chatgpt"],
  },
];
