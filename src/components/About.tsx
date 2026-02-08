import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart } from 'lucide-react';
import profileImage from '../assets/patrick-profile.jpeg';

export function About() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            À propos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Patrick Junior HOUNKPE" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-1 md:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 md:mb-6">
              Étudiant en Data Science & Finance Quantitative, à la recherche d'un stage à partir de Juin 2026
            </h3>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Formé à l'ENSAE Paris et aux Mines Saint-Étienne (3e/73, GPA 4,26/4,33), je mets en pratique 
              mes compétences analytiques et techniques en Python, R, machine learning et modélisation 
              statistique. Expérience en recherche (détection d'anomalies, ACP fonctionnelle) et en analyse 
              (INStaD Benin, mentorat JP Morgan Quantitative Research).
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Baccalauréat classé 1er au niveau national à 16 ans, Lycée Henri IV, puis parcours en Data Science 
              et instruments financiers. Langues : français et éwé (maternelles), anglais C1 (TOEIC 955/990).
            </p>

            <div className="flex items-center text-gray-400 flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>Python, R, C/C++, Java</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>Machine Learning & stats</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>Basket-ball, trading</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 sm:p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Mettre en pratique mes compétences analytiques et techniques en Data Science et Finance Quantitative."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}