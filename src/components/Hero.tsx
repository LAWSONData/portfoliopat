import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-x-hidden">
      <div className="text-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 break-words">
            {"PATRICK JUNIOR HOUNKPE".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
                whileHover={{
                  scale: 1.2,
                  rotateY: 360,
                  transition: { duration: 0.5 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-1"
          >
            À la recherche d'un stage 3–4 mois à partir de Juin 2026
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-1"
        >
          Data Science & Finance Quantitative
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:space-x-8 md:gap-0 mb-8 sm:mb-12"
        >
          {[Brain, Cpu, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
              }}
              className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            >
              <Icon className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-2 sm:space-y-4 px-1"
        >
          <div className="text-sm sm:text-base md:text-lg text-gray-400">ENSAE Paris & Mines Saint-Étienne</div>
          <div className="text-blue-400 text-xs sm:text-sm md:text-base flex flex-wrap justify-center gap-x-2 gap-y-1">Python • R • Machine Learning • Modélisation statistique</div>
        </motion.div>
      </div>
    </section>
  );
}