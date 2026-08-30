// Standard boilerplate legal content for /privacy-policy, /terms and /disclosure.
// This is generic boilerplate, not legal advice for your specific jurisdiction —
// have a lawyer review it before relying on it, especially the "Governing law"
// section in Terms, which is left as a TODO.

import type { Locale } from "@/i18n/config";
import { CONTACT_EMAIL, siteConfig } from "./site";

export interface LegalSection {
  heading: string;
  body: string[]; // one string per paragraph
}

export interface LegalDoc {
  title: string;
  lastUpdated: string; // ISO date
  intro: string;
  sections: LegalSection[];
}

const LAST_UPDATED = "2026-08-30";

export const privacyPolicy: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: LAST_UPDATED,
    intro: `This Privacy Policy explains what information ${siteConfig.name} collects, how it's used, and the choices you have.`,
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Information you provide directly: if you contact us (e.g. via the partner or contact form), we receive whatever you include — typically your name, email address, and message.",
          "Information collected automatically: standard technical data your browser sends to any website you visit (e.g. approximate location from IP, browser type, pages viewed), if and when we add an analytics tool. As a new site, we may not have analytics running yet — this policy is written to cover it once we do.",
          "Theme preference: if you use the light/dark toggle, that choice is stored only in your browser's local storage. It is never sent to us.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "To operate, maintain, and improve the site.",
          "To respond to messages you send us.",
          `We do not sell your personal information. We only share it where necessary to operate the site (e.g. a hosting provider) or if required by law.`,
        ],
      },
      {
        heading: "Cookies",
        body: [
          "The site itself does not currently use tracking cookies. If we add analytics in the future, this section will be updated to describe it.",
          "Affiliate links take you to third-party sites, which may set their own cookies once you land there. That's covered by their own privacy policy, not ours — see our Affiliate Disclosure for more on how these links work.",
        ],
      },
      {
        heading: "Third-party and affiliate links",
        body: [
          `${siteConfig.name} contains affiliate links to third-party products. We aren't responsible for the privacy practices or content of external sites — please review their own policies.`,
        ],
      },
      {
        heading: "Children's privacy",
        body: [
          "This site is not directed at children, and we do not knowingly collect personal information from children.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on where you live, you may have rights to access, correct, or request deletion of personal information we hold about you (for example, under GDPR or CCPA). To exercise any of these, contact us using the details below.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy as the site grows. The \"last updated\" date at the top will reflect the latest revision.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about this policy? Email us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    lastUpdated: LAST_UPDATED,
    intro: `Cette politique de confidentialité explique quelles informations ${siteConfig.name} collecte, comment elles sont utilisées, et les choix qui s'offrent à vous.`,
    sections: [
      {
        heading: "Informations que nous collectons",
        body: [
          "Informations fournies directement : si vous nous contactez (par exemple via le formulaire partenaire ou contact), nous recevons ce que vous y indiquez — généralement votre nom, votre adresse email et votre message.",
          "Informations collectées automatiquement : données techniques standard envoyées par votre navigateur à tout site que vous visitez (ex. localisation approximative via l'IP, type de navigateur, pages consultées), si et quand nous ajoutons un outil d'analyse. En tant que jeune site, nous n'avons peut-être pas encore d'outil d'analyse actif — cette politique est rédigée pour couvrir ce cas dès sa mise en place.",
          "Préférence de thème : si vous utilisez le bouton clair/sombre, ce choix est stocké uniquement dans le stockage local de votre navigateur. Il ne nous est jamais transmis.",
        ],
      },
      {
        heading: "Comment nous utilisons les informations",
        body: [
          "Pour exploiter, maintenir et améliorer le site.",
          "Pour répondre aux messages que vous nous envoyez.",
          "Nous ne vendons pas vos informations personnelles. Nous ne les partageons que lorsque cela est nécessaire au fonctionnement du site (ex. un hébergeur) ou si la loi l'exige.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Le site n'utilise actuellement pas de cookies de suivi. Si nous ajoutons un outil d'analyse à l'avenir, cette section sera mise à jour en conséquence.",
          "Les liens affiliés vous redirigent vers des sites tiers, qui peuvent déposer leurs propres cookies une fois sur place. Cela relève de leur propre politique de confidentialité, pas de la nôtre — consultez notre page de divulgation affiliée pour en savoir plus sur le fonctionnement de ces liens.",
        ],
      },
      {
        heading: "Liens tiers et affiliés",
        body: [
          `${siteConfig.name} contient des liens affiliés vers des produits tiers. Nous ne sommes pas responsables des pratiques de confidentialité ni du contenu des sites externes — veuillez consulter leurs propres politiques.`,
        ],
      },
      {
        heading: "Confidentialité des mineurs",
        body: [
          "Ce site ne s'adresse pas aux enfants et nous ne collectons pas sciemment d'informations personnelles les concernant.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Selon votre lieu de résidence, vous pouvez disposer de droits d'accès, de rectification ou de suppression des informations personnelles que nous détenons à votre sujet (par exemple au titre du RGPD ou du CCPA). Pour exercer ces droits, contactez-nous via les coordonnées ci-dessous.",
        ],
      },
      {
        heading: "Modifications de cette politique",
        body: [
          "Nous pouvons mettre à jour cette politique à mesure que le site évolue. La date de « dernière mise à jour » en haut de page reflète la révision la plus récente.",
        ],
      },
      {
        heading: "Contact",
        body: [`Des questions sur cette politique ? Écrivez-nous à ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export const termsOfService: Record<Locale, LegalDoc> = {
  en: {
    title: "Terms of Service",
    lastUpdated: LAST_UPDATED,
    intro: `These Terms govern your use of ${siteConfig.name}. By using the site, you agree to them.`,
    sections: [
      {
        heading: "Use of the site",
        body: [
          "The content on this site is for general informational purposes only. You may browse and read it for personal, non-commercial use.",
          "You agree not to misuse the site — including scraping content at scale, attempting to disrupt the site, or misrepresenting your relationship to it.",
        ],
      },
      {
        heading: "Content and accuracy",
        body: [
          "Reviews reflect our genuine opinion at the time of testing, following our published review methodology. AI tools change quickly — pricing, features, and quality can shift after a review is published. Always verify current details on the provider's own site before making a purchase decision.",
          "We update reviews periodically; check the \"Last updated\" date on each article.",
        ],
      },
      {
        heading: "Affiliate links and compensation",
        body: [
          `Some links on ${siteConfig.name} are affiliate links, meaning we may earn a commission if you make a purchase through them, at no extra cost to you. This never influences the substance of our reviews. Full details are on our Affiliate Disclosure page.`,
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          `Original content on ${siteConfig.name} (text, design, layout) belongs to us unless otherwise noted. Third-party tool names, logos, and trademarks referenced in reviews belong to their respective owners and are used for identification purposes only.`,
        ],
      },
      {
        heading: "No professional advice",
        body: [
          "Content on this site is informational and does not constitute professional, legal, or financial advice. Software purchasing decisions are your own responsibility.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          `The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, ${siteConfig.name} is not liable for any damages arising from your use of the site or reliance on its content.`,
        ],
      },
      {
        heading: "Third-party sites",
        body: [
          "This site links to third-party websites (including affiliate links). We don't control and aren't responsible for their content, policies, or practices.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: ["We may update these Terms as the site evolves. Continued use of the site after changes means you accept the revised Terms."],
      },
      {
        heading: "Governing law",
        body: [
          "TODO: state the governing law/jurisdiction that applies to these Terms (e.g. the laws of [your country/state]) once decided.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these Terms? Email us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
  fr: {
    title: "Conditions d'utilisation",
    lastUpdated: LAST_UPDATED,
    intro: `Ces conditions régissent votre utilisation de ${siteConfig.name}. En utilisant le site, vous les acceptez.`,
    sections: [
      {
        heading: "Utilisation du site",
        body: [
          "Le contenu de ce site est fourni à titre d'information générale uniquement. Vous pouvez le consulter et le lire pour un usage personnel et non commercial.",
          "Vous vous engagez à ne pas détourner l'usage du site — y compris l'extraction massive de contenu (scraping), les tentatives de perturbation du site, ou toute fausse déclaration quant à votre relation avec celui-ci.",
        ],
      },
      {
        heading: "Contenu et exactitude",
        body: [
          "Les avis reflètent notre opinion sincère au moment du test, en suivant notre méthodologie d'évaluation publiée. Les outils IA évoluent vite — prix, fonctionnalités et qualité peuvent changer après la publication d'un avis. Vérifiez toujours les informations actuelles sur le site de l'éditeur avant tout achat.",
          "Nous mettons à jour les avis périodiquement ; consultez la date de « dernière mise à jour » de chaque article.",
        ],
      },
      {
        heading: "Liens affiliés et rémunération",
        body: [
          `Certains liens sur ${siteConfig.name} sont des liens affiliés : nous pouvons toucher une commission si vous effectuez un achat via ceux-ci, sans coût supplémentaire pour vous. Cela n'influence jamais le contenu de nos avis. Tous les détails figurent sur notre page de divulgation affiliée.`,
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          `Le contenu original de ${siteConfig.name} (textes, design, mise en page) nous appartient sauf mention contraire. Les noms, logos et marques de tiers mentionnés dans les avis appartiennent à leurs propriétaires respectifs et ne sont utilisés qu'à des fins d'identification.`,
        ],
      },
      {
        heading: "Aucun conseil professionnel",
        body: [
          "Le contenu de ce site est informatif et ne constitue pas un conseil professionnel, juridique ou financier. Les décisions d'achat de logiciels relèvent de votre seule responsabilité.",
        ],
      },
      {
        heading: "Limitation de responsabilité",
        body: [
          `Le site est fourni « tel quel », sans garantie d'aucune sorte. Dans la limite permise par la loi, ${siteConfig.name} ne peut être tenu responsable des dommages résultant de l'utilisation du site ou de la confiance accordée à son contenu.`,
        ],
      },
      {
        heading: "Sites tiers",
        body: [
          "Ce site contient des liens vers des sites tiers (y compris des liens affiliés). Nous ne contrôlons pas et ne sommes pas responsables de leur contenu, de leurs politiques ou de leurs pratiques.",
        ],
      },
      {
        heading: "Modifications de ces conditions",
        body: ["Nous pouvons mettre à jour ces conditions à mesure que le site évolue. Poursuivre l'utilisation du site après modification vaut acceptation des nouvelles conditions."],
      },
      {
        heading: "Droit applicable",
        body: [
          "TODO : indiquer le droit applicable / la juridiction compétente pour ces conditions (ex. les lois de [votre pays/état]) une fois cette décision prise.",
        ],
      },
      {
        heading: "Contact",
        body: [`Des questions sur ces conditions ? Écrivez-nous à ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export const affiliateDisclosure: Record<Locale, LegalDoc> = {
  en: {
    title: "Affiliate Disclosure",
    lastUpdated: LAST_UPDATED,
    intro: `${siteConfig.name} is reader-supported. This page explains, in plain terms, how that works.`,
    sections: [
      {
        heading: "In short",
        body: [
          `Some links on ${siteConfig.name} — mainly the "Visit [Tool]" buttons on review pages — are affiliate links. If you sign up or buy through one, we may earn a commission from the tool's provider, at no extra cost to you.`,
        ],
      },
      {
        heading: "How it works",
        body: [
          "When you click an affiliate link and later take an action the provider counts (like signing up or subscribing), their tracking attributes that action back to us, and they may pay us a commission. You pay the same price either way — the commission comes out of the provider's marketing budget, not your pocket.",
        ],
      },
      {
        heading: "Which links are affiliate links",
        body: [
          'The main call-to-action button on each review page ("Visit [Tool]") is typically an affiliate link, and is always marked with a short disclosure line right above it. Not every link on the site is affiliated — plain text links to a tool\'s homepage for reference, for example, may not be.',
          "Our Deals page, when populated, will mark each offer's affiliate status the same way.",
        ],
      },
      {
        heading: "This doesn't change our opinions",
        body: [
          "Whether or not a tool has an affiliate program with us has no bearing on its star rating or the pros/cons we publish. See our Review Methodology for exactly how we evaluate tools — the same criteria apply to every tool, affiliated or not.",
        ],
      },
      {
        heading: "Questions",
        body: [`If anything here is unclear, email us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
  fr: {
    title: "Divulgation affiliée",
    lastUpdated: LAST_UPDATED,
    intro: `${siteConfig.name} est soutenu par ses lecteurs. Cette page explique simplement comment cela fonctionne.`,
    sections: [
      {
        heading: "En résumé",
        body: [
          `Certains liens sur ${siteConfig.name} — principalement les boutons « Découvrir [Outil] » sur les pages d'avis — sont des liens affiliés. Si vous vous inscrivez ou achetez via l'un d'eux, nous pouvons toucher une commission de l'éditeur de l'outil, sans coût supplémentaire pour vous.`,
        ],
      },
      {
        heading: "Comment ça marche",
        body: [
          "Quand vous cliquez sur un lien affilié et effectuez ensuite une action comptabilisée par l'éditeur (inscription, abonnement...), son système de suivi nous l'attribue, et il peut nous verser une commission. Vous payez le même prix dans tous les cas — la commission provient du budget marketing de l'éditeur, pas de votre poche.",
        ],
      },
      {
        heading: "Quels liens sont affiliés",
        body: [
          "Le bouton d'action principal de chaque page d'avis (« Découvrir [Outil] ») est généralement un lien affilié, toujours signalé par une courte mention juste au-dessus. Tous les liens du site ne sont pas affiliés — un simple lien texte vers le site d'un outil à titre de référence, par exemple, peut ne pas l'être.",
          "Notre page Bons plans, une fois alimentée, indiquera le statut affilié de chaque offre de la même façon.",
        ],
      },
      {
        heading: "Cela ne change pas nos avis",
        body: [
          "Qu'un outil ait ou non un programme d'affiliation avec nous n'a aucune incidence sur sa note ni sur les avantages/inconvénients publiés. Consultez notre Méthodologie d'évaluation pour savoir exactement comment nous évaluons les outils — les mêmes critères s'appliquent à tous, affiliés ou non.",
        ],
      },
      {
        heading: "Questions",
        body: [`Si quelque chose n'est pas clair, écrivez-nous à ${CONTACT_EMAIL}.`],
      },
    ],
  },
};
