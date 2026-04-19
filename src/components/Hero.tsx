"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
            VIHAGA — The Econ Academy
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter text-navy leading-[1.1]">
            <span className="font-serif font-normal italic text-primary pr-3">The Modern</span>
            <br className="hidden md:block" />
            <span className="font-sans">Scholar&apos;s Path.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            Navigate the complexities of modern economics through an intuitive, curated learning environment.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              Start Learning
            </button>
            <button className="flex items-center gap-2 text-slate-700 font-medium hover:text-primary transition-colors group">
              <PlayCircle className="w-12 h-12 text-slate-200 group-hover:text-primary transition-colors" />
              <span>Watch how it works</span>
            </button>
          </motion.div>
        </motion.div>
        
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
              className="object-contain drop-shadow-2xl z-10"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
