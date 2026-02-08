import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp, Shield, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "Algorithme de trading Forex",
      description: "Conception et backtesting d'une stratégie algorithmique Forex basée sur la reconnaissance de patterns dans les mouvements de prix. Ratio de Sharpe : 1,29.",
      icon: TrendingUp,
      tech: ["Python", "Backtesting", "Patterns", "Forex"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Gestionnaire de risque",
      description: "Script MQL5 pour gérer les positions dynamiquement, réduire l'exposition selon le risque du compte et la volatilité, et améliorer le contrôle des risques du portefeuille.",
      icon: Shield,
      tech: ["MQL5", "Risk management", "Volatilité"],
      gradient: "from-blue-400 to-purple-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Détection d'anomalies en temps réel",
      description: "Cadre de détection d'anomalies (ACP fonctionnelle, localisation par ondelettes) pour la surveillance de signaux industriels. Précision de détection 100 %, précision > 86 %.",
      icon: LineChart,
      tech: ["Python", "ACP fonctionnelle", "Ondelettes", "Temps réel"],
      gradient: "from-green-400 to-blue-500",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projets
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-1">
            Projets personnels et travaux en Data Science & Finance Quantitative
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300 text-base sm:text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}