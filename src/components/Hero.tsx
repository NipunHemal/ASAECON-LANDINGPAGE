"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartLearning = () => {
    window.location.href = "https://web.asaecon.com";
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Hero */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-8"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            ASA ECON — The Premium Econ Academy
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tighter text-navy leading-[1.1]">
            <span className="font-serif font-normal italic text-primary pr-3">ආස Econ</span>
            <br className="hidden md:block" />
            <span className="font-sans">ලංකාවේ ගුණාත්මකම Econ පංතිය</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Master A/L Economics with Sri Lanka&apos;s leading educator. නවීන ආර්ථික විද්‍යාවේ සංකීර්ණතා ඉතා සරලව.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-4">
            <button 
              onClick={handleStartLearning}
              className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Start Learning
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-slate-700 font-medium hover:text-primary transition-colors group cursor-pointer"
            >
              <PlayCircle className="w-12 h-12 text-slate-200 group-hover:text-primary transition-colors" />
              <span>Watch how it works</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Video Modal Popup */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Watch how it works"
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Hero: Student Cutout */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-square md:aspect-[4/3] w-full flex items-center justify-center">
            {/* Decorative background behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-primary/5 rounded-full blur-3xl -z-10 transform scale-90"></div>

            <Image
              src="/student-hero.png"
              alt="Student learning"
              fill
              className="object-contain z-10 scale-125"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
