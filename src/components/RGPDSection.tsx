"use client";

import { motion } from "framer-motion";

const principles = [
  {
    icon: "⚖️",
    title: "Conformité RGPD & Loi Camerounaise",
    description:
      "Application rigoureuse des principes de minimisation des données et de « Privacy by Design ». Respect de la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité au Cameroun.",
    color: "#4f8ef7",
    badge: "Loi n° 2010/012",
  },
  {
    icon: "🔐",
    title: "Anonymisation & Chiffrement",
    description:
      "Systèmes de chiffrement AES-256 pour toutes les données sensibles. Anonymisation systématique des jeux de données avant tout traitement analytique.",
    color: "#10b981",
    badge: "AES-256",
  },
  {
    icon: "🌍",
    title: "Souveraineté Numérique Africaine",
    description:
      "Priorité au stockage local et au traitement « Edge » pour garantir la confidentialité totale des utilisateurs. Les données restent sur le continent africain.",
    color: "#a855f7",
    badge: "Edge Computing",
  },
  {
    icon: "🛡️",
    title: "Privacy by Design",
    description:
      "La protection des données est intégrée dès la conception de chaque algorithme, pas ajoutée après coup. Chaque modèle ML est audité pour les biais et la conformité.",
    color: "#f59e0b",
    badge: "By Design",
  },
];

const commitmentText =
  "Je m'engage à respecter la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité au Cameroun, en intégrant la protection des données dès la conception (Privacy by Design) de chaque algorithme.";

export default function RGPDSection() {
  return (
    <section id="ethics" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#34d399",
            }}
          >
            🔒 Éthique & Conformité
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Une Data Science{" "}
            <span className="gradient-text">Responsable & Éthique</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            La confiance se construit par la transparence. Chaque projet est développé
            avec les plus hauts standards de protection des données.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 sm:p-8 overflow-hidden"
              style={{
                background: "rgba(15, 31, 61, 0.8)",
                border: "1px solid rgba(26,58,143,0.25)",
                backdropFilter: "blur(12px)",
              }}
              whileHover={{
                borderColor: principle.color + "50",
                boxShadow: `0 8px 40px ${principle.color}15`,
                transition: { duration: 0.2 },
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${principle.color}, transparent)`,
                }}
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${principle.color}15`,
                    border: `1px solid ${principle.color}30`,
                  }}
                >
                  {principle.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">
                      {principle.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${principle.color}15`,
                        border: `1px solid ${principle.color}30`,
                        color: principle.color,
                      }}
                    >
                      {principle.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl p-8 sm:p-10 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,58,143,0.15) 0%, rgba(16,185,129,0.1) 100%)",
            border: "1px solid rgba(79,142,247,0.2)",
          }}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute top-4 left-6 text-8xl font-serif leading-none pointer-events-none select-none"
            style={{ color: "rgba(79,142,247,0.1)" }}
          >
            &ldquo;
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
            {/* Shield icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(26,58,143,0.3), rgba(16,185,129,0.2))",
                border: "1px solid rgba(79,142,247,0.3)",
              }}
            >
              🏛️
            </div>

            <div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic mb-4">
                &ldquo;{commitmentText}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, #4f8ef7, #10b981)",
                  }}
                />
                <span className="text-sm font-semibold gradient-text">
                  BALALE TCHATCHOUA BENEL
                </span>
                <span className="text-xs text-slate-500">— Engagement personnel</span>
              </div>
            </div>
          </div>

          {/* Compliance badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: "RGPD Compliant", icon: "✅" },
              { label: "Loi 2010/012 CM", icon: "🇨🇲" },
              { label: "AES-256 Encryption", icon: "🔐" },
              { label: "Privacy by Design", icon: "🛡️" },
              { label: "Data Minimization", icon: "📊" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(26,58,143,0.2)",
                  border: "1px solid rgba(79,142,247,0.25)",
                  color: "#93c5fd",
                }}
              >
                <span>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
