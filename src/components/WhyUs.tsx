"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Globe, Users } from "lucide-react";

const whyUsItems = [
  {
    icon: Sparkles,
    title: "Curated Syllabus (විශිෂ්ට ඉගැන්වීම් රටාව)",
    desc: "විෂය නිර්දේශය මුල සිට අගට ඉතා සරලව සහ පැහැදිලිව, ඕනෑම මට්ටමක දරුවෙකුට තේරුම් ගත හැකි පරිදි ආවරණය කිරීම.",
    accent: "#4C3BCF",
    bgAccent: "from-[#4C3BCF]/8 to-transparent",
  },
  {
    icon: Brain,
    title: "Practical Knowledge (ප්‍රායෝගික දැනුම)",
    desc: "හුදු කටපාඩම් කිරීමෙන් ඔබ්බට ගොස්, න්‍යායාත්මක කරුණු ප්‍රායෝගික ලෝකය හා සම්බන්ධ කරමින් ගැඹුරු අවබෝධයක් ලබා දීම.",
    accent: "#7C5CFC",
    bgAccent: "from-[#7C5CFC]/8 to-transparent",
  },
  {
    icon: Globe,
    title: "Past Paper Discussion (ප්‍රශ්න පත්‍ර සාකච්ඡාව)",
    desc: "පසුගිය වසරවල ප්‍රශ්න පත්‍ර සහ අනුමාන ප්‍රශ්න පත්‍ර මගින් විභාගයට ඉහළම ලකුණු ලබාගැනීමට මනා පුහුණුවක් ලබා දීම.",
    accent: "#0EA5E9",
    bgAccent: "from-[#0EA5E9]/8 to-transparent",
  },
  {
    icon: Users,
    title: "Continuous Evaluation (නිරන්තර ඇගයීම)",
    desc: "සෑම පාඩමක් අවසානයේම පරීක්ෂණ පවත්වා දරුවන්ගේ මට්ටම නිරන්තරයෙන් ඇගයීමට ලක් කරමින් නිසි මඟ පෙන්වීම.",
    accent: "#F3D39A",
    bgAccent: "from-[#F3D39A]/20 to-transparent",
  },
];

export default function WhyUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section className="relative bg-[#F8FAFC] py-24 md:py-32 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4C3BCF]/4 rounded-full translate-x-1/2 -translate-y-1/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F3D39A]/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Row */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4C3BCF] animate-pulse" />
              The Methodology
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.08]">
              Why choose{" "}
              <span className="font-serif italic font-normal text-[#4C3BCF]">ආස Econ ?</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed max-w-md lg:text-right border-r-0 lg:border-r-2 lg:border-[#F3D39A] lg:pr-6">
            We believe authentic economic insight requires both historical perspective and modern analytical tools. ආර්ථික විද්‍යාව යනු හුදෙක් විෂයයක් පමණක් නොව එය ලෝකය දකින කවුළුවකි.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
        >
          {whyUsItems.map(({ icon: Icon, title, desc, accent, bgAccent }, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative bg-white border border-slate-100 rounded-3xl p-8 flex flex-col gap-5 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-400"
            >
              {/* Subtle gradient fill on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

              {/* Icon */}
              <div
                className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${accent}15`, color: accent }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3 flex-1">
                <h3
                  className="text-lg font-bold text-[#0F172A] tracking-tight transition-colors duration-300"
                  style={{ }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="relative z-10 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full mt-auto"
                style={{ backgroundColor: accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
