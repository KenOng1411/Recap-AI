// Companies behind tools we actually review — used for the "AI platforms we
// cover" strip. Real claim, not a fake "as seen on" logo wall: every entry
// here corresponds to a tool with a live review on the site.

export interface Platform {
  name: string;
  domain: string;
}

export const platforms: Platform[] = [
  { name: "OpenAI", domain: "openai.com" },
  { name: "Anthropic", domain: "anthropic.com" },
  { name: "Google", domain: "google.com" },
  { name: "Meta", domain: "meta.com" },
  { name: "xAI", domain: "x.ai" },
  { name: "Mistral AI", domain: "mistral.ai" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Adobe", domain: "adobe.com" },
];
