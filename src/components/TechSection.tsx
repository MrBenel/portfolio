"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Data Science & ML",
    color: "#4f8ef7",
    icon: "🧠",
    tools: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "Pandas", level: 88, icon: "🐼" },
      { name: "Scikit-Learn", level: 85, icon: "⚙️" },
      { name: "XGBoost", level: 80, icon: "🚀" },
    ],
  },
  {
    category: "Data & Bases de Données",
    color: "#10b981",
    icon: "🗄️",
    tools: [
      { name: "SQL", level: 85, icon: "🗃️" },
      { name: "SQLite", level: 82, icon: "💾" },
      { name: "Power BI", level: 80, icon: "📊" },
      { name: "Excel", level: 88, icon: "📈" },
    ],
  },
  {
    category: "Développement Mobile",
    color: "#a855f7",
    icon: "📱",
    tools: [
      { name: "React Native", level: 78, icon: "⚛️" },
      { name: "JavaScript", level: 80, icon: "🟨" },
      { name: "TypeScript", level: 72, icon: "🔷" },
      { name: "Expo", level: 75, icon: "📦" },
    ],
  },
];

const certifications = [
  {
    title: "IBM Data Science Professional",
    issuer: "IBM / Coursera",
    icon: "🏆",
    color: "#4f8ef7",
    year: "2024",
    description: "Certification professionnelle couvrant l'ensemble du cycle de vie Data Science",
  },
  {
    title: "Certifications Kaggle",
    issuer: "Kaggle",
    icon: "🥇",
    color: "#10b981",
    year: "2024",
    description: "Python, Pandas, Machine Learning, Data Visualization",
  },
  {
    title: "Cursus Ingénieur ENSPY",
    issuer: "École Nationale Supérieure Polytechnique de Yaoundé",
    icon: "🎓",
    color: "#f59e0b",
    year: "En cours",
    description: "Spécialisation Humanités Numériques & Data Science",
  },
];

function SkillBar({
  name,
  level,
  icon,
  color,
  delay,
}: {
  name: string;
  level: number;
  icon: string;
  color: string;
  delay: number;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-sm font-medium text-slate-300">{name}</span>
        </div>
        <span className="text-xs font-semibold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(26,58,143,0.2)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function TechSection() {
  return (
    <section id="tech" className="py-24 relative">
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
            Compétences Techniques
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stack Technique &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Des outils maîtrisés pour transformer les données brutes en insights
            actionnables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tech Stack */}
          <div className="space-y-6">
            {techStack.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(15, 31, 61, 0.8)",
                  border: "1px solid rgba(26,58,143,0.25)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `${category.color}15`,
                      border: `1px solid ${category.color}30`,
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white">{category.category}</h3>
                </div>
                {category.tools.map((tool, toolIndex) => (
                  <SkillBar
                    key={tool.name}
                    {...tool}
                    color={category.color}
                    delay={catIndex * 0.1 + toolIndex * 0.08}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(15, 31, 61, 0.8)",
                border: "1px solid rgba(26,58,143,0.25)",
              }}
            >
              <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <span>🏅</span> Certifications & Formation
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-xl p-4 overflow-hidden"
                    style={{
                      background: `${cert.color}08`,
                      border: `1px solid ${cert.color}20`,
                    }}
                    whileHover={{
                      borderColor: cert.color + "50",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{
                          background: `${cert.color}15`,
                          border: `1px solid ${cert.color}30`,
                        }}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-white text-sm leading-tight">
                            {cert.title}
                          </h4>
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{
                              background: `${cert.color}15`,
                              color: cert.color,
                            }}
                          >
                            {cert.year}
                          </span>
                        </div>
                        <p
                          className="text-xs font-medium mb-1"
                          style={{ color: cert.color }}
                        >
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-slate-500">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools cloud */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(15, 31, 61, 0.8)",
                border: "1px solid rgba(26,58,143,0.25)",
              }}
            >
              <h3 className="font-bold text-white mb-5 flex items-center gap-2">
                <span>🛠️</span> Outils & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "Pandas", "Scikit-Learn", "XGBoost",
                  "SQL", "SQLite", "Power BI", "React Native",
                  "JavaScript", "TypeScript", "Git", "Jupyter",
                  "NumPy", "Matplotlib", "Seaborn", "FastAPI",
                ].map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="tech-badge"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
