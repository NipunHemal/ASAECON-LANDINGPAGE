"use client";

import { motion } from "framer-motion";

const stats = [
  {
    metric: "25+",
    label: "Years Experience",
    sub: "A quarter century of pedagogical excellence in eLearning.",
  },
  {
    metric: "56k",
    label: "Students Enrolled",
    sub: "Learners across all modules — from beginner to advanced.",
  },
  {
    metric: "170+",
    label: "Expert Faculty",
    sub: "Practitioners and researchers from top institutions.",
  },
];

export default function TrustStats() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
  };

  return (
    <section className="bg-white py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Quote / Mission */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#4C3BCF]" />
            Our Mission
          </span>
          <p className="text-xl md:text-2xl font-serif italic text-[#0F172A]/75 leading-relaxed">
            &ldquo;Empowering learners worldwide with high-quality, accessible &amp; engaging education — offering a diverse range of courses.&rdquo;
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`group flex flex-col gap-3 px-8 py-10 md:py-12 relative
                ${i !== 0 ? "md:border-l border-slate-100" : ""}
                hover:bg-[#F8FAFC] transition-colors duration-300 rounded-2xl cursor-default`}
            >
              {/* Metric */}
              <div className="text-6xl md:text-7xl font-extrabold tracking-tighter text-[#0F172A] transition-colors">
                <span className="group-hover:text-[#4C3BCF] transition-colors duration-300">
                  {stat.metric}
                </span>
              </div>

              {/* Label */}
              <div className="font-bold text-[#0F172A] text-base">{stat.label}</div>

              {/* Sub */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-[220px]">{stat.sub}</p>

              {/* Accent underline on hover */}
              <div className="h-0.5 w-0 group-hover:w-12 bg-[#4C3BCF] transition-all duration-500 rounded-full mt-2" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
