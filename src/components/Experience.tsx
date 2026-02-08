import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Recherche en Data Science",
      company: "Mines de Saint-Étienne",
      period: "Juin 2025 – Août 2025 (3 mois)",
      description: "Développement d'un cadre de détection d'anomalies en temps réel (ACP fonctionnelle, ondelettes). Outils Python pour l'analyse en temps réel et mesures de transport optimales, amélioration des performances de détection de 20 %.",
      icon: Briefcase,
      skills: ["Python", "ACP fonctionnelle", "Détection d'anomalies", "Transport optimal"]
    },
    {
      title: "Analyste Statistique",
      company: "Institut National de la Statistique et de la Démographie (INStaD)",
      period: "Juin 2024 – Août 2024 (3 mois)",
      description: "Traitement et validation de données démographiques et économiques pour les rapports nationaux. Scripts Python/R automatisés, réduction du temps de traitement de 20 %.",
      icon: Briefcase,
      skills: ["Python", "R", "Données démographiques", "Indicateurs économiques"]
    },
    {
      title: "Data Science et Finance Quantitative",
      company: "ENSAE – Institut Polytechnique Paris",
      period: "Sept 2025 – Présent",
      description: "Cours clés : Python pour la Data Science, Instruments financiers, Économétrie, Statistique. Paris, France.",
      icon: GraduationCap,
      skills: ["Python", "Instruments financiers", "Économétrie", "Statistique"]
    },
    {
      title: "Data Science",
      company: "Mines Saint-Étienne – Institut Mines Télécom",
      period: "Sept 2023 – Sept 2025",
      description: "3e sur 73 élèves, GPA 4,26/4,33. Probabilités avancées, R et Python pour la Data Science, théorie des jeux. Saint-Étienne, France.",
      icon: GraduationCap,
      skills: ["Python", "R", "Probabilités", "Théorie des jeux"]
    },
    {
      title: "Préparation en mathématiques et sciences",
      company: "Lycée Henri IV",
      period: "2021 – 2023",
      description: "Formation en mathématiques, physique et informatique. Paris, France.",
      icon: GraduationCap,
      skills: ["Mathématiques", "Physique", "Informatique"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Parcours
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Formation et expériences en Data Science & Finance Quantitative
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - gauche sur mobile, centrée sur desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-10 md:mb-16 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'justify-start md:justify-start' : 'justify-start md:justify-end'
              }`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card - pleine largeur mobile, 5/12 desktop */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 sm:p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-3 md:mr-4 shrink-0">
                      <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400 text-sm sm:text-base">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-xs sm:text-sm mb-2 md:mb-3">{exp.period}</p>
                  <p className="text-gray-300 text-sm sm:text-base mb-3 md:mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}