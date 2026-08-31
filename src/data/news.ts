// AI News — real, verified stories only. Each item was fetched from its cited
// source at write time; summaries below are original, not copied from the
// source article. Update this list periodically with fresh, verified items —
// never invent an item or a date.

export type NewsTopic = "safety" | "legal" | "product" | "research" | "business" | "infrastructure" | "security";

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  body: string[]; // full original write-up, one string per paragraph
  topic: NewsTopic;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string; // ISO date, matches the source's real publish date
  relatedToolSlugs?: string[]; // links to /tools/[slug] on this site, if relevant
  // Domain of the company the story is mainly about — used to show that
  // company's real logo on the card (same favicon technique as ToolIcon,
  // not a copy of the source article's own photo/illustration). We do not
  // use the source article's own photo/illustration — that would be someone
  // else's copyrighted editorial image.
  companyDomain?: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "openai-anthropic-google-call-for-ai-cyberdefense",
    topic: "safety",
    title: "OpenAI, Anthropic and Google join 100+ companies calling for AI-powered cyber defense",
    summary:
      "In a joint open letter, OpenAI, Anthropic, Google and over a hundred other companies and organizations called for a coordinated push to put AI-driven defensive tools in the hands of the teams protecting critical infrastructure, warning that AI-enabled cyberattacks are set to become far more common and sophisticated.",
    body: [
      "Three of the biggest names in consumer AI — OpenAI, Anthropic and Google — put their rivalry aside this week to sign a joint open letter alongside more than a hundred other companies and organizations, calling for a coordinated, industry-wide push toward AI-powered cyber defense.",
      "The core argument: the same AI capabilities that make ChatGPT, Claude and Gemini useful for writing and coding also lower the bar for automated, AI-assisted cyberattacks. The letter frames this as a narrowing window — attackers are starting to use AI to find and exploit vulnerabilities faster than human defenders can patch them — and calls for putting equivalent AI-driven defensive tooling directly into the hands of the teams protecting critical infrastructure, rather than leaving cyber defense as a purely reactive, human-paced effort.",
      "For everyday users of these tools, this isn't a feature announcement — it's a signal of where the major labs think the next real risk sits. It's also a rare moment of coordination between companies that normally compete hard for the same users and enterprise contracts, which is itself worth noting when you're deciding how much to trust any one vendor's safety claims in isolation.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/",
    publishedAt: "2026-08-27",
    relatedToolSlugs: ["chatgpt", "claude", "gemini"],
    companyDomain: "openai.com",
  },
  {
    slug: "sony-warner-sue-anthropic-copyright",
    topic: "legal",
    title: "Sony Music Publishing and Warner Chappell file copyright lawsuit against Anthropic",
    summary:
      "Sony Music Publishing and Warner Chappell have sued Anthropic, alleging the company used copyrighted song lyrics to train its Claude models without permission. It's the latest in a wave of copyright litigation targeting AI labs over training data sourcing.",
    body: [
      "Sony Music Publishing and Warner Chappell — two of the biggest music publishers in the world — have filed a copyright lawsuit against Anthropic, the company behind Claude. The publishers allege Anthropic trained its models on copyrighted song lyrics without a license or permission, and are seeking damages over what they characterize as large-scale, unauthorized use of their catalogs.",
      "This isn't an isolated case. AI labs across the industry — not just Anthropic — have faced a growing wave of copyright suits from publishers, authors, and media companies over how their training data was sourced, and this one adds music rights holders to a list that already includes book publishers and news organizations. The core legal question in all of these cases is largely the same: does training a model on copyrighted material without a license count as infringement, or does it fall under some form of fair use? Courts haven't settled that question yet.",
      "For Claude users, this lawsuit doesn't change anything about the product today — but it's a useful reminder that the legal ground under every major AI model is still being litigated in real time, and outcomes here could eventually affect pricing, licensing costs, or how these companies source training data going forward.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/29/sony-music-warner-sue-anthropic-alleging-a-brazen-campaign-of-intellectual-property-theft/",
    publishedAt: "2026-08-29",
    relatedToolSlugs: ["claude"],
    companyDomain: "anthropic.com",
  },
  {
    slug: "openai-chatgpt-ads-india",
    topic: "product",
    title: "OpenAI begins testing ads on ChatGPT's free and Go tiers in India",
    summary:
      "OpenAI has started showing advertisements to ChatGPT users on its free and lower-cost Go plan in India, a notable shift for a product that has so far relied entirely on subscriptions and API revenue.",
    body: [
      "OpenAI has begun testing advertisements inside ChatGPT for users on its free tier and its lower-cost Go plan in India — the first time the company has introduced ads into its flagship chatbot anywhere. Until now, ChatGPT's business model has rested entirely on subscriptions (Plus, Pro, Team, Enterprise) and API usage fees from developers.",
      "India is a logical place to pilot this: it's one of ChatGPT's largest user bases by raw numbers, but a market where willingness to pay for a premium subscription is lower on average than in the US or Europe. Testing ads there first, rather than rolling them out globally, lets OpenAI gauge the revenue potential and user reaction before deciding whether to expand the approach to other free-tier markets.",
      "If you're a heavy ChatGPT user, this is worth watching — free products that introduce ads often use them to nudge usage patterns or to make the paid tier feel comparatively more attractive. Whether that happens here, and how aggressively, remains to be seen.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/27/openai-to-start-showing-ads-on-chatgpts-free-and-go-tiers-in-india/",
    publishedAt: "2026-08-27",
    relatedToolSlugs: ["chatgpt"],
    companyDomain: "openai.com",
  },
  {
    slug: "anthropic-self-improving-ai-research",
    topic: "research",
    title: "Anthropic researcher previews early work on self-improving AI systems",
    summary:
      "An Anthropic researcher shared early findings on models that can iteratively improve their own performance, offering a glimpse at research the company is exploring around AI systems that refine themselves over successive training runs.",
    body: [
      "An Anthropic researcher offered a rare public preview of internal work on self-improving AI systems — models designed to iteratively refine their own performance across successive training runs, rather than requiring a full separate training cycle with fresh human-curated data every time.",
      "This kind of research sits at the frontier of how labs like Anthropic think about scaling model capability without linearly scaling the human effort and compute cost behind each generation. It's early-stage work, not a product announcement — there's no self-improving version of Claude shipping because of this — but it's a signal of the kind of research direction Anthropic is investing in behind the scenes.",
      "It's also a topic that tends to draw outsized attention (and some anxiety) because \"self-improving AI\" sits close to long-running conversations about AI systems that could accelerate their own development. Anthropic sharing early findings publicly, rather than only internally, is consistent with the company's general posture of favoring visible safety research over quiet development.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/",
    publishedAt: "2026-08-28",
    relatedToolSlugs: ["claude"],
    companyDomain: "anthropic.com",
  },
  {
    slug: "open-weight-ai-acquisition-targets",
    topic: "business",
    title: "Open-weight AI labs become Silicon Valley's hottest acquisition targets",
    summary:
      "Startups building open-weight AI models are increasingly drawing acquisition interest from larger tech companies, as buyers look to secure both talent and openly-licensed model weights rather than building everything from scratch.",
    body: [
      "Companies building open-weight AI models — models whose weights are published for anyone to download, fine-tune, and self-host, as opposed to closed models only accessible through an API — have become some of the most sought-after acquisition targets in the industry right now.",
      "The logic from the buyer's side: acquiring a strong open-weight team gets you both proven research talent and a body of openly-licensed model weights you can build on immediately, instead of spending years and enormous compute budgets training a comparable model from scratch. It's a faster, and often cheaper, way for larger tech companies to catch up on AI capability.",
      "For the open-source AI ecosystem this cuts both ways — more acquisitions can mean more resources behind open-weight research, but it also raises the question of whether newly-acquired teams stay committed to open releases once they're inside a larger company with different incentives. It's a trend worth watching if you rely on open-weight models (like the ones behind some of the tools reviewed on this site) for cost or self-hosting reasons.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/28/open-weight-ai-companies-are-the-valleys-hottest-acquisition-targets/",
    publishedAt: "2026-08-28",
    companyDomain: "huggingface.co",
  },
  {
    slug: "gemini-branding-problem",
    topic: "business",
    title: "Google's Gemini brand still hasn't clicked with mainstream users, report finds",
    summary:
      "Despite Gemini's technical progress, reporting suggests the brand still struggles for mainstream recognition compared to ChatGPT — a challenge the piece frames as symptomatic of a wider naming and positioning problem across the AI industry, not just at Google.",
    body: [
      "Google's Gemini has closed much of the technical gap with ChatGPT over the past couple of years, but reporting suggests the brand itself still hasn't achieved the same level of everyday, top-of-mind recognition — \"just ask ChatGPT\" remains the default phrase for a lot of people, even when Gemini would do the job just as well.",
      "The piece frames this as bigger than a Google-specific problem: across the AI industry, product names change often (models get renamed, rebranded, or folded into other products), assistants are bundled under multiple different labels depending on the surface you meet them in, and the sheer number of competing AI brand names makes it hard for any one of them to become the generic verb the way \"Google it\" or \"ChatGPT it\" have.",
      "For someone choosing between AI tools, brand recognition and actual capability are two different things worth separating — a less mainstream name doesn't necessarily mean a worse tool, and Gemini's integration with Google's own ecosystem (Search, Docs, Workspace) is arguably one of its stronger practical advantages regardless of brand awareness.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/26/googles-gemini-has-a-branding-problem-and-so-does-the-rest-of-ai/",
    publishedAt: "2026-08-26",
    relatedToolSlugs: ["gemini"],
    companyDomain: "google.com",
  },
  {
    slug: "meta-executive-leaves-for-openai",
    topic: "business",
    title: "Senior Meta executive departs for OpenAI amid scrutiny in India",
    summary:
      "A senior Meta executive has left to join OpenAI, part of a broader pattern of AI talent movement between major labs, reported alongside growing regulatory scrutiny Meta is facing in the Indian market.",
    body: [
      "A senior Meta executive has departed the company to join OpenAI, adding to a now-familiar pattern of high-profile AI talent moving between the small handful of labs — OpenAI, Anthropic, Google, Meta — that are competing hardest for the top researchers and product leaders in the field.",
      "The move was reported alongside separate coverage of growing regulatory scrutiny Meta is facing in India, one of its largest markets by user count. The two threads aren't necessarily directly connected, but taken together they paint a picture of a company managing pressure on multiple fronts at once — from regulators externally and from competitors poaching talent internally.",
      "Executive and researcher movement between labs is worth tracking loosely if you're trying to read where competitive momentum is heading, though any single departure is rarely decisive on its own — these companies are large enough that no one person's move fundamentally changes their trajectory.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/28/meta-executive-leaves-for-openai-as-the-social-media-giant-faces-growing-scrutiny-in-india/",
    publishedAt: "2026-08-28",
    relatedToolSlugs: ["chatgpt", "meta-ai"],
    companyDomain: "meta.com",
  },
  {
    slug: "nvidia-hugging-face-acquisition",
    topic: "business",
    title: "Nvidia reportedly nears a deal to acquire Hugging Face",
    summary:
      "Nvidia is reported to be closing in on an acquisition of Hugging Face, the widely-used open-source model hosting and machine learning community platform, which would deepen Nvidia's reach into the AI developer tooling stack.",
    body: [
      "Nvidia is reportedly closing in on a deal to acquire Hugging Face, the platform that has become the default hub for hosting, sharing, and discovering open-source AI models — the place most developers go to download an open-weight model, browse datasets, or publish their own fine-tunes.",
      "If it closes, this would be a significant expansion of Nvidia's footprint beyond chips and into the software/developer-tooling layer of the AI stack. Nvidia already sits at the center of AI infrastructure through its GPUs and CUDA software ecosystem; owning the platform where much of the open-source model ecosystem actually lives would give it influence over both the hardware AI runs on and a major distribution channel for the models themselves.",
      "For developers and companies that rely on Hugging Face to host or distribute open models, an acquisition like this is usually followed by questions about independence, pricing, and whether the platform stays neutral toward hardware/cloud providers that compete with the acquirer. Nothing has changed for users yet — this is a reported deal, not a closed one — but it's worth watching if your workflow depends on Hugging Face staying platform-agnostic.",
    ],
    sourceName: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/",
    publishedAt: "2026-08-26",
    companyDomain: "nvidia.com",
  },
  {
    slug: "amazon-triples-nvidia-chip-order",
    topic: "infrastructure",
    title: "Amazon triples its Nvidia chip order as AI infrastructure demand surges",
    summary:
      "Amazon has reportedly tripled the size of its Nvidia chip order, citing surging demand for AI compute — another data point in the ongoing infrastructure buildout underpinning the current generation of AI products.",
    body: [
      "Amazon has reportedly tripled the size of its order of Nvidia chips, citing surging demand for AI compute across its cloud business. Amazon Web Services rents out GPU capacity to a huge share of the companies building and running AI products today, including many of the tools reviewed on this site, so its own hardware purchasing decisions are a useful proxy for how fast real-world AI usage is actually growing.",
      "This kind of order isn't unique to Amazon — every major cloud provider (Microsoft, Google, Amazon) has been aggressively expanding GPU capacity over the past couple of years — but the scale of the increase here (a tripling, not an incremental bump) signals that whatever demand forecasting Amazon is doing internally points to significantly more AI compute consumption ahead, not a plateau.",
      "For anyone using AI tools day to day, this kind of infrastructure buildout is mostly invisible — but it's part of why compute costs, and therefore the pricing of AI products, are shaped as much by chip supply and cloud capacity as by any single company's product decisions.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/26/amazon-just-tripled-its-order-of-nvidia-chips-over-surging-demand/",
    publishedAt: "2026-08-26",
    companyDomain: "amazon.com",
  },
  {
    slug: "openai-hugging-face-breach-report",
    topic: "security",
    title: "OpenAI publishes its official report on the Hugging Face security breach",
    summary:
      "OpenAI released an official report detailing a security breach connected to Hugging Face, outlining what happened and the steps taken in response — part of a broader industry conversation about securing the AI supply chain.",
    body: [
      "OpenAI published an official report detailing a security breach connected to Hugging Face, the open-source model hosting platform widely used across the AI industry. The report lays out what happened and the remediation steps OpenAI took in response, as part of standard incident-disclosure practice.",
      "Security incidents tied to shared infrastructure like Hugging Face matter beyond any single company, because so much of the AI ecosystem — including many of the tools this site reviews — depends on the same handful of platforms for hosting models, datasets, and developer tooling. A breach touching that shared layer is a reminder that AI supply-chain security isn't just about any one company's own servers; it's about every link in the chain of tools and platforms a model passes through before it reaches an end product.",
      "OpenAI choosing to publish an official report rather than handle this quietly is generally a good sign from a transparency standpoint — it gives other companies and researchers concrete detail to check whether they were affected and to harden their own setups against similar issues.",
    ],
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/08/26/openai-releases-its-official-report-on-the-hugging-face-breach/",
    publishedAt: "2026-08-26",
    relatedToolSlugs: ["chatgpt"],
    companyDomain: "openai.com",
  },
];
