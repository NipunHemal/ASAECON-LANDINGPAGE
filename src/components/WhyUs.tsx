"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  const whyUsItems = [
    { num: "01", title: "Curated Excellence", desc: "Expert-led curriculums designed to challenge and elevate your understanding of global models." },
    { num: "02", title: "Intellectual Rigor", desc: "We emphasize analytic depth over superficial concepts, ensuring a robust academic foundation." },
    { num: "03", title: "Global Perspective", desc: "Drawing upon multidisciplinary insight to prepare you for diverse macroeconomic challenges." },
    { num: "04", title: "Premier Community", desc: "Join an elite cohort of scholars and practitioners dedicated to economic advancement." },
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
    <section className="bg-surface-muted py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight">Why the Atelier?</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We believe that authentic economic insight requires both historical perspective and modern analytical tools. Our approach strips away the superficial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {whyUsItems.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col gap-3">
                <span className="text-4xl font-bold font-serif text-slate-200">{item.num}</span>
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
