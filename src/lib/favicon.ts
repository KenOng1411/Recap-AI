// We don't host tool logos ourselves — that would mean redistributing copyrighted
// brand assets. Instead we deep-link to Google's public favicon service, the same
// technique browsers/bookmark managers use, so each card shows the tool's real
// official icon pulled live from its own domain.
export function getFaviconUrl(website: string, size = 128): string | null {
  try {
    const { hostname } = new URL(website);
    return `https://www.google.com/s2/favicons?sz=${size}&domain=${hostname}`;
  } catch {
    return null;
  }
}
