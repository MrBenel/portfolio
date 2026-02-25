import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — BALALE TCHATCHOUA BENEL",
  description:
    "Politique de confidentialité et protection des données personnelles conformément au RGPD et à la loi camerounaise n° 2010/012.",
};

const sections = [
  {
    title: "1. Responsable du Traitement",
    content: `BALALE TCHATCHOUA BENEL, élève ingénieur à l'École Nationale Supérieure Polytechnique de Yaoundé (ENSPY), est responsable du traitement des données collectées via ce portfolio professionnel.

Contact : Via WhatsApp ou les réseaux sociaux mentionnés sur ce site.
Localisation : Yaoundé, Cameroun.`,
  },
  {
    title: "2. Données Collectées",
    content: `Ce portfolio ne collecte aucune donnée personnelle de manière automatique. Les seules interactions possibles sont :

• Les clics sur les liens de contact (WhatsApp, LinkedIn, GitHub) qui redirigent vers des plateformes tierces.
• Les formulaires de contact éventuels, qui collectent uniquement le nom et l'adresse email fournis volontairement.

Principe de minimisation des données : Seules les données strictement nécessaires à la prise de contact sont traitées.`,
  },
  {
    title: "3. Finalités du Traitement",
    content: `Les données éventuellement collectées sont utilisées exclusivement pour :

• Répondre aux demandes de contact et de collaboration professionnelle.
• Présenter mes projets et compétences à des fins professionnelles.

Aucune donnée n'est utilisée à des fins commerciales, publicitaires ou de profilage.`,
  },
  {
    title: "4. Base Légale",
    content: `Le traitement des données repose sur :

• Le consentement explicite de l'utilisateur (contact volontaire).
• L'intérêt légitime pour la présentation de mes activités professionnelles.

Conformément à la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité au Cameroun, et au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne.`,
  },
  {
    title: "5. Sécurité des Données",
    content: `Je m'engage à protéger toutes les données avec les mesures suivantes :

• Chiffrement AES-256 pour toutes les données sensibles.
• Stockage local prioritaire (Edge Computing) pour garantir la souveraineté numérique.
• Anonymisation systématique des données dans mes projets analytiques.
• Privacy by Design : la protection est intégrée dès la conception de chaque système.`,
  },
  {
    title: "6. Durée de Conservation",
    content: `Les données de contact sont conservées uniquement le temps nécessaire à la réponse et au suivi de la demande, et supprimées au maximum 12 mois après le dernier échange.`,
  },
  {
    title: "7. Vos Droits",
    content: `Conformément au RGPD et à la législation camerounaise, vous disposez des droits suivants :

• Droit d'accès à vos données personnelles.
• Droit de rectification des données inexactes.
• Droit à l'effacement (« droit à l'oubli »).
• Droit à la portabilité des données.
• Droit d'opposition au traitement.

Pour exercer ces droits, contactez-moi directement via WhatsApp ou LinkedIn.`,
  },
  {
    title: "8. Cookies",
    content: `Ce site n'utilise pas de cookies de traçage ou publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.`,
  },
  {
    title: "9. Transferts Internationaux",
    content: `Aucun transfert de données personnelles vers des pays tiers n'est effectué sans garanties appropriées. La priorité est donnée au stockage et au traitement local (Cameroun / Afrique) conformément au principe de souveraineté numérique africaine.`,
  },
  {
    title: "10. Modifications",
    content: `Cette politique de confidentialité peut être mise à jour. La date de dernière modification est indiquée en bas de page. Je vous encourage à la consulter régulièrement.

Dernière mise à jour : Février 2026.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(26,58,143,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Retour au portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#34d399",
            }}
          >
            🔒 Protection des Données
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Politique de{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4f8ef7, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Confidentialité
            </span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Conformément au RGPD (Règlement Général sur la Protection des Données) et à
            la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la
            cybercriminalité au Cameroun.
          </p>
        </div>

        {/* Commitment banner */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,58,143,0.15), rgba(16,185,129,0.1))",
            border: "1px solid rgba(79,142,247,0.2)",
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🛡️</span>
            <div>
              <h2 className="font-bold text-white mb-2">Engagement de Conformité</h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;Je m&apos;engage à respecter la loi n° 2010/012 du 21 décembre 2010
                relative à la cybersécurité et à la cybercriminalité au Cameroun, en
                intégrant la protection des données dès la conception (Privacy by Design)
                de chaque algorithme.&rdquo;
              </p>
              <p className="text-sm font-semibold mt-2" style={{ color: "#10b981" }}>
                — BALALE TCHATCHOUA BENEL
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(15, 31, 61, 0.6)",
                border: "1px solid rgba(26,58,143,0.2)",
              }}
            >
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <div className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            Fait avec ❤️ à Yaoundé — BALALE BENEL © 2026
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
