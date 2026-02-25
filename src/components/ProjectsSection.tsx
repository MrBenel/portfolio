"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "PulseFinance CM",
    subtitle: "Application Mobile Fintech",
    description:
      "Application mobile de gestion budgétaire et tontines 100% hors-ligne. Conçue pour les communautés camerounaises sans accès internet stable.",
    tags: ["React Native", "SQLite", "Offline-First", "Tontines"],
    icon: "💰",
    color: "from-blue-600 to-blue-900",
    accentColor: "#4f8ef7",
    stats: [
      { label: "Mode hors-ligne", value: "100%" },
      { label: "Sécurité", value: "AES-256" },
    ],
    size: "col-span-12 md:col-span-7",
    featured: true,
  },
  {
    id: 2,
    title: "Scoring Microfinance",
    subtitle: "Modèle Prédictif ML",
    description:
      "Modèle prédictif de risque de crédit pour les Établissements de Microfinance (EMF) locaux. Réduit les défauts de paiement grâce au Machine Learning.",
    tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas"],
    icon: "🏦",
    color: "from-emerald-600 to-emerald-900",
    accentColor: "#10b981",
    stats: [
      { label: "Précision", value: "87%" },
      { label: "Modèle", value: "XGBoost" },
    ],
    size: "col-span-12 md:col-span-5",
    featured: false,
  },
  {
    id: 3,
    title: "Analyse Retail",
    subtitle: "Optimisation des Stocks",
    description:
      "Optimisation des stocks et ventes pour supermarchés. Dashboards Power BI interactifs et algorithmes de prévision de la demande.",
    tags: ["Power BI", "Python", "SQL", "Forecasting"],
    icon: "🛒",
    color: "from-purple-600 to-purple-900",
    accentColor: "#a855f7",
    stats: [
      { label: "Réduction stocks", value: "-23%" },
      { label: "Ventes +", value: "+18%" },
    ],
    size: "col-span-12 md:col-span-5",
    featured: false,
  },
  {
    id: 4,
    title: "Data Analytics Santé",
    subtitle: "Gestion Prédictive Pharmacie",
    description:
      "Système de gestion prédictive des stocks en pharmacie. Anticipe les ruptures de médicaments critiques grâce à l'analyse des données historiques.",
    tags: ["Python", "Pandas", "Time Series", "Healthcare"],
    icon: "💊",
    color: "from-rose-600 to-rose-900",
    accentColor: "#f43f5e",
    stats: [
      { label: "Ruptures évitées", value: "94%" },
      { label: "Données", value: "RGPD ✓" },
    ],
    size: "col-span-12 md:col-span-7",
    featured: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className={`${project.size} relative rounded-2xl overflow-hidden cursor-pointer group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      style={{
        background: "rgba(15, 31, 61, 0.8)",
        border: `1px solid ${hovered ? project.accentColor + "60" : "rgba(26,58,143,0.25)"}`,
        boxShadow: hovered
          ? `0 8px 40px ${project.accentColor}30, 0 0 0 1px ${project.accentColor}20`
          : "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300`}
        style={{ opacity: hovered ? 0.08 : 0 }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      <div className="relative p-6 sm:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            {project.icon}
          </div>
          {project.featured && (
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: `${project.accentColor}15`,
                border: `1px solid ${project.accentColor}30`,
                color: project.accentColor,
              }}
            >
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-sm font-medium" style={{ color: project.accentColor }}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-5">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 rounded-lg p-3 text-center"
              style={{
                background: `${project.accentColor}08`,
                border: `1px solid ${project.accentColor}20`,
              }}
            >
              <div
                className="text-lg font-bold"
                style={{ color: project.accentColor }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(26,58,143,0.2)",
                border: "1px solid rgba(79,142,247,0.2)",
                color: "#93c5fd",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow on hover */}
        <motion.div
          className="absolute bottom-6 right-6"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: `${project.accentColor}20`,
              border: `1px solid ${project.accentColor}40`,
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke={project.accentColor}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
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
              background: "rgba(26,58,143,0.2)",
              border: "1px solid rgba(79,142,247,0.3)",
              color: "#93c5fd",
            }}
          >
            Mes Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projets{" "}
            <span className="gradient-text">Phares</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Des solutions data concrètes pour les défis de l&apos;Afrique numérique,
            conçues avec rigueur et éthique.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bento-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
