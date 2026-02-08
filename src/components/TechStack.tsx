import React from 'react';
import { motion } from 'motion/react';

export function TechStack() {
  const techCategories = [
    {
      category: "Langages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "R", level: 90, icon: "📊" },
        { name: "C/C++", level: 80, icon: "⚙️" },
        { name: "Java", level: 75, icon: "☕" }
      ]
    },
    {
      category: "Data Science & ML",
      skills: [
        { name: "Pandas / NumPy", level: 95, icon: "🐼" },
        { name: "Machine Learning", level: 90, icon: "🧠" },
        { name: "Modélisation statistique", level: 90, icon: "📈" },
        { name: "Scikit-learn", level: 88, icon: "🔬" }
      ]
    },
    {
      category: "Finance & Analyse",
      skills: [
        { name: "Instruments financiers", level: 85, icon: "📉" },
        { name: "Économétrie", level: 85, icon: "📐" },
        { name: "Backtesting", level: 82, icon: "🔄" },
        { name: "MQL5", level: 80, icon: "💹" }
      ]
    },
    {
      category: "Langues",
      skills: [
        { name: "Français", level: 100, icon: "🇫🇷" },
        { name: "Anglais (C1, TOEIC 955)", level: 95, icon: "🇬🇧" },
        { name: "Éwé", level: 100, icon: "🌍" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Compétences
          </h2>
          <p className="text-gray-400 text-lg">
            Langages, Data Science, Finance quantitative et langues
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 sm:p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-2xl"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}