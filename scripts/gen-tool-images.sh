#!/usr/bin/env bash
# Generates one original hero illustration per tool via the Gemini image script.
# Prompts are varied per tool within each category so entries don't look identical.
set -e
cd "$(dirname "$0")/.."

gen() {
  local slug="$1"
  local prompt="$2"
  if [ -f "public/tools-images/${slug}.png" ]; then
    echo "skip (exists): $slug"
    return
  fi
  echo "generating: $slug"
  python3 scripts/gen-news-image.py --prompt "$prompt" --out "public/tools-images/${slug}.png" >/tmp/genimg.log 2>&1 \
    && echo "  ok: $slug" \
    || { echo "  FAILED: $slug"; cat /tmp/genimg.log; }
}

STYLE="Editorial tech illustration, clean modern flat-vector style with soft gradients, deep blue (#2563eb) and white color palette, minimal, professional, no text, no logos, no real brand names, no human faces, wide 16:9 composition, plenty of clean negative space."

# Chatbots
gen "gemini" "$STYLE Concept: a multicolor prism refracting into a soft glowing orb, representing a multimodal AI assistant, subtle sparkle particles."
gen "grok" "$STYLE Concept: a bold lightning-bolt motif merging into an abstract chat bubble, energetic and fast, real-time data streams as thin light lines."
gen "mistral-le-chat" "$STYLE Concept: a minimalist wind/breeze swirl forming a speech bubble outline, light and airy European tech aesthetic."
gen "meta-ai" "$STYLE Concept: an infinite-loop ribbon forming an abstract chat icon, interconnected nodes, social-network feel."
gen "poe" "$STYLE Concept: several small overlapping chat-bubble silhouettes of different sizes orbiting a central hub, representing many AI models in one place."
gen "character-ai" "$STYLE Concept: a friendly abstract mask/persona icon made of soft gradient shapes, representing customizable AI personalities, playful but professional."
gen "deepseek" "$STYLE Concept: a deep ocean-inspired abstract magnifying glass merged with a neural-network sparkle, representing deep reasoning search."

# Image tools
gen "ideogram" "$STYLE Concept: abstract stylized letterforms morphing out of a paintbrush stroke, representing accurate AI text-in-image rendering."
gen "leonardo-ai" "$STYLE Concept: an artist's palette shape made of glowing gradient blobs, painterly and creative."
gen "adobe-firefly" "$STYLE Concept: a small glowing firefly-like spark trailing light across a blank canvas corner, creative and gentle."
gen "stability-ai" "$STYLE Concept: a stable geometric pyramid/foundation shape with a soft glowing generative burst on top, representing open foundation models."
gen "recraft" "$STYLE Concept: abstract vector shapes assembling like building blocks into a simple icon, representing structured design generation."

# Video tools
gen "runway" "$STYLE Concept: an abstract film-strip/timeline ribbon curving through space with a play-button glow, professional video editing feel."
gen "heygen" "$STYLE Concept: a soft abstract silhouette bust made of gradient light, representing an AI avatar/presenter, no real face detail."
gen "pika" "$STYLE Concept: a small spark/flash icon bursting into motion-blur streaks, playful and energetic short-video feel."
gen "luma-dream-machine" "$STYLE Concept: a dreamy swirling nebula cloud forming a soft play-button shape, cinematic and atmospheric."
gen "synthesia" "$STYLE Concept: an abstract layered silhouette figure made of translucent gradient panels, representing synthetic video presenters, no real face."
gen "invideo-ai" "$STYLE Concept: a stack of abstract video frame rectangles fanned out like a deck of cards, template-driven video feel."

# Audio tools
gen "elevenlabs" "$STYLE Concept: a smooth glowing soundwave forming an abstract speaker/voice shape, warm and natural."
gen "suno" "$STYLE Concept: musical soundwave bars arranged like an equalizer forming a simple abstract melody icon."
gen "descript" "$STYLE Concept: an audio waveform transitioning into text-line shapes, representing transcription and audio editing."
gen "murf-ai" "$STYLE Concept: a microphone silhouette made of soft gradient waveform ripples, professional voiceover feel."
gen "udio" "$STYLE Concept: layered circular soundwave ripples like a record spinning, music generation feel."
gen "play-ht" "$STYLE Concept: a rounded play-button icon with soundwave ripples emanating outward, simple and clean."

# Search tools
gen "perplexity" "$STYLE Concept: a magnifying glass with a glowing neural-network pattern inside the lens, representing AI-powered search and citations."
gen "you-com" "$STYLE Concept: a magnifying glass merged with small abstract app-tile icons around it, representing an all-in-one search and apps hub."
gen "kagi" "$STYLE Concept: a minimalist premium magnifying glass with a subtle shield outline, representing ad-free private search."
gen "andi-search" "$STYLE Concept: a friendly abstract chat-bubble shaped like a magnifying glass, conversational search feel."

# Productivity
gen "notion-ai" "$STYLE Concept: abstract stacked document/block shapes with a glowing sparkle accent, representing AI-assisted notes and docs."
gen "zapier-ai" "$STYLE Concept: interconnected gear and lightning-bolt shapes forming an automation flow between abstract app icons."
gen "otter-ai" "$STYLE Concept: a soundwave transcribing into neat text lines inside a simple notebook shape, meeting-notes feel."
gen "fireflies-ai" "$STYLE Concept: small glowing firefly-like light particles hovering around an abstract meeting/calendar icon."
gen "motion" "$STYLE Concept: an abstract calendar grid with a glowing optimized path/route line moving through it, representing smart scheduling."
gen "reclaim-ai" "$STYLE Concept: an abstract clock face with soft gradient time-blocks being rearranged, representing calendar automation."

# Design
gen "gamma" "$STYLE Concept: abstract stacked presentation-slide rectangles fanning out with a glowing generative spark, slide-deck feel."
gen "canva-ai" "$STYLE Concept: playful abstract overlapping shapes (circle, triangle, rectangle) arranged like a design canvas, colorful but staying in the blue palette."
gen "framer-ai" "$STYLE Concept: an abstract wireframe grid morphing into a smooth glowing website layout, web-design feel."
gen "uizard" "$STYLE Concept: a rough sketch line transforming into a clean abstract UI wireframe, representing sketch-to-design AI."

# Coding
gen "github-copilot" "$STYLE Concept: abstract code-bracket shapes < /> with a soft glowing autocomplete cursor trail, developer feel."
gen "cursor" "$STYLE Concept: an abstract text cursor/caret shape merging with a glowing neural spark, representing an AI-native code editor."
gen "replit" "$STYLE Concept: an abstract browser-window shape with a small glowing play-button and code-bracket accents, in-browser coding feel."
gen "windsurf" "$STYLE Concept: a smooth abstract wave/sail shape merging with code-bracket lines, fluid agentic coding feel."
gen "tabnine" "$STYLE Concept: an abstract keyboard-key/tab shape with a glowing predictive-text trail, autocomplete feel."
gen "v0" "$STYLE Concept: an abstract geometric shape morphing directly into a simple UI component layout, representing generative UI from a prompt."

# Writing
gen "jasper" "$STYLE Concept: an abstract fountain-pen nib made of soft gradient light, forming flowing text lines, brand-marketing writing feel."
gen "copy-ai" "$STYLE Concept: abstract short text-line blocks arranged like ad copy variations fanning out from a glowing spark."
gen "writesonic" "$STYLE Concept: an abstract sound/speed-wave merging into flowing text lines, fast content generation feel."
gen "grammarly" "$STYLE Concept: an abstract checkmark shape woven through flowing text lines, representing writing correction and clarity."
gen "rytr" "$STYLE Concept: a simple abstract pen-tip with minimal flowing text lines, lightweight and simple writing feel."
gen "toolsaday" "$STYLE Concept: several small abstract tool-icon shapes (pen, envelope, text-lines) arranged neatly around a central glowing spark, all-in-one free toolkit feel."

echo "Done."
