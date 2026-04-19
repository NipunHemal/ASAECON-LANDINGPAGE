"use client";

import { motion } from "framer-motion";

export default function TrustStats() {
  const stats = [
    { metric: "25+", label: "Years of eLearning Education Experience" },
    { metric: "56k", label: "Students Enrolled in LMSZONE Courses" },
    { metric: "170+", label: "Experienced Teacher's service." },
  ];

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
    <section className="bg-surface-muted py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <p className="text-2xl md:text-3xl font-serif italic text-navy leading-relaxed">
            "We are passionate about empowering learners Worldwide with high-quality, accessible & engaging education. Our mission offering a diverse range of courses."
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index} variants={fadeUp}
              className={`flex flex-col items-center md:items-start ${index !== 0 ? "md:border-l md:border-slate-200 md:pl-16" : "md:pr-16 md:pl-4"
                }`}
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4 tracking-tighter">
                {stat.metric}
              </div>
              <div className="text-base text-slate-500 max-w-[200px] text-center md:text-left leading-relaxed font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
