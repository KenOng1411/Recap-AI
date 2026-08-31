import {
  ShieldCheck,
  Scales,
  Rocket,
  Flask,
  Briefcase,
  HardDrives,
  LockKey,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { NewsTopic } from "./news";
import type { Locale } from "@/i18n/config";

export const topicIcons: Record<NewsTopic, Icon> = {
  safety: ShieldCheck,
  legal: Scales,
  product: Rocket,
  research: Flask,
  business: Briefcase,
  infrastructure: HardDrives,
  security: LockKey,
};

export const topicLabels: Record<NewsTopic, Record<Locale, string>> = {
  safety: { en: "Safety", fr: "Sécurité IA", es: "Seguridad", de: "Sicherheit", it: "Sicurezza", pt: "Segurança" },
  legal: { en: "Lawsuit", fr: "Justice", es: "Demanda", de: "Klage", it: "Causa legale", pt: "Ação judicial" },
  product: { en: "Product", fr: "Produit", es: "Producto", de: "Produkt", it: "Prodotto", pt: "Produto" },
  research: { en: "Research", fr: "Recherche", es: "Investigación", de: "Forschung", it: "Ricerca", pt: "Pesquisa" },
  business: { en: "Business", fr: "Affaires", es: "Negocios", de: "Wirtschaft", it: "Business", pt: "Negócios" },
  infrastructure: { en: "Infrastructure", fr: "Infrastructure", es: "Infraestructura", de: "Infrastruktur", it: "Infrastruttura", pt: "Infraestrutura" },
  security: { en: "Security", fr: "Sécurité", es: "Seguridad", de: "Sicherheit", it: "Sicurezza informatica", pt: "Segurança" },
};

export function getTopicLabel(topic: NewsTopic, locale: Locale) {
  return topicLabels[topic][locale];
}
