import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/config";

interface StarRatingProps {
  rating: number; // 0 - 5
  size?: number;
  showValue?: boolean;
  locale?: Locale;
}

const ratingLabel: Record<Locale, (rating: string) => string> = {
  en: (rating) => `Rated ${rating} out of 5`,
  fr: (rating) => `Note de ${rating} sur 5`,
  es: (rating) => `Valorado con ${rating} sobre 5`,
  de: (rating) => `Bewertet mit ${rating} von 5`,
  it: (rating) => `Valutato ${rating} su 5`,
  pt: (rating) => `Avaliado com ${rating} de 5`,
};

export function StarRating({ rating, size = 18, showValue = true, locale = "en" }: StarRatingProps) {
  const rounded = Math.round(rating * 2) / 2;
  const stars = Array.from({ length: 5 }, (_, i) => {
    const position = i + 1;
    if (rounded >= position) return "full";
    if (rounded + 0.5 === position) return "half";
    return "empty";
  });

  return (
    <div
      className="inline-flex items-center gap-1.5"
      role="img"
      aria-label={ratingLabel[locale](rating.toFixed(1))}
    >
      <span className="flex items-center gap-0.5 text-star" aria-hidden="true">
        {stars.map((state, i) =>
          state === "half" ? (
            <StarHalf key={i} size={size} weight="fill" />
          ) : (
            <Star key={i} size={size} weight={state === "full" ? "fill" : "regular"} />
          )
        )}
      </span>
      {showValue && (
        <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
