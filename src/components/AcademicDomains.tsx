"use client";

import { motion } from "framer-motion";
import { Globe2, ChevronRight, LineChart, BookOpen, ArrowRight } from "lucide-react";

export default function AcademicDomains() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 tracking-tight">Academic Domains</h2>
          <p className="text-slate-600 max-w-2xl text-lg">Explore our specialized concentrations designed for mastery.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Card */}
        <motion.div 
          className="lg:col-span-2 bg-navy rounded-3xl p-10 md:p-14 flex flex-col justify-between group relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <Globe2 className="w-96 h-96 text-white" />
          </div>
          <Globe2 className="w-12 h-12 text-primary mb-16 relative z-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-lg leading-tight tracking-tight">
              Macroeconomics & Global Systems
            </h3>
            <a href="#" className="inline-flex items-center gap-2 text-gold font-medium hover:text-white transition-colors">
              Access Module <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Small Cards Stack */}
        <div className="flex flex-col gap-6">
          <motion.div 
            className="bg-white border border-slate-200 rounded-3xl p-8 flex-1 flex flex-col justify-between hover:border-primary/30 hover:shadow-lg transition-all group"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-12 group-hover:bg-primary/10 transition-colors">
              <LineChart className="w-5 h-5 text-navy group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Quantitative Analysis</h3>
              <a href="#" className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-primary transition-colors text-sm">
                Explore Portfolio <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-slate-200 rounded-3xl p-8 flex-1 flex flex-col justify-between hover:border-primary/30 hover:shadow-lg transition-all group"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-12 group-hover:bg-primary/10 transition-colors">
              <BookOpen className="w-5 h-5 text-navy group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Behavioral Economics</h3>
              <a href="#" className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-primary transition-colors text-sm">
                Explore Portfolio <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
