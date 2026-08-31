#!/usr/bin/env python3
"""Generate one illustration image via the Gemini image model and save it as PNG.

Usage:
    python3 gen-news-image.py --prompt "..." --out ../public/news/slug.png
"""
import argparse
import os
import sys
from pathlib import Path


def load_env():
    for env_path in [
        Path.home() / ".claude" / "skills" / ".env",
        Path.home() / ".claude" / ".env",
    ]:
        if env_path.exists():
            for line in env_path.read_text().splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ.setdefault(key, value.strip("\"'"))


load_env()

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Error: google-genai not installed. Run: pip3 install --user google-genai")
    sys.exit(1)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--out", required=True)
    parser.add_argument("--model", default="gemini-2.5-flash-image")
    parser.add_argument("--aspect-ratio", default="16:9")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not set")
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
        model=args.model,
        contents=args.prompt,
        config=types.GenerateContentConfig(
            response_modalities=["Image"],
            image_config=types.ImageConfig(aspect_ratio=args.aspect_ratio),
        ),
    )

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    saved = False
    for part in response.candidates[0].content.parts:
        if getattr(part, "inline_data", None) is not None:
            out_path.write_bytes(part.inline_data.data)
            saved = True
            break

    if not saved:
        print("Error: no image data in response")
        print(response)
        sys.exit(1)

    print(f"Saved: {out_path}")


if __name__ == "__main__":
    main()
