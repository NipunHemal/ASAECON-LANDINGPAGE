"use client";

import { motion } from "framer-motion";
import { Star, Clock, User, ArrowRight, BarChart2, Globe, TrendingUp, DollarSign, BookOpen, PieChart } from "lucide-react";

const classes = [
  {
    icon: BarChart2,
    iconColor: "#4C3BCF",
    iconBg: "#EEF0FF",
    title: "Macroeconomic Theory 101",
    teacher: "Dr. Elena Vance",
    duration: "18 hours",
    rating: 4.9,
    reviews: 1243,
    tag: "Beginner",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Globe,
    iconColor: "#0EA5E9",
    iconBg: "#E0F4FF",
    title: "Foundations of Financial Markets",
    teacher: "Prof. James Holloway",
    duration: "22 hours",
    rating: 4.8,
    reviews: 987,
    tag: "Intermediate",
    tagColor: "bg-sky-50 text-sky-700",
  },
  {
    icon: TrendingUp,
    iconColor: "#7C5CFC",
    iconBg: "#F0EDFF",
    title: "Econometrics for Modern Insights",
    teacher: "Dr. Priya Nair",
    duration: "26 hours",
    rating: 4.9,
    reviews: 762,
    tag: "Advanced",
    tagColor: "bg-violet-50 text-violet-700",
  },
  {
    icon: DollarSign,
    iconColor: "#F59E0B",
    iconBg: "#FEF3C7",
    title: "Monetary Policy & Central Banking",
    teacher: "Prof. Alan Chen",
    duration: "14 hours",
    rating: 4.7,
    reviews: 634,
    tag: "Intermediate",
    tagColor: "bg-amber-50 text-amber-700",
  },
  {
    icon: BookOpen,
    iconColor: "#10B981",
    iconBg: "#D1FAE5",
    title: "Development Economics",
    teacher: "Dr. Sasha Williams",
    duration: "20 hours",
    rating: 4.8,
    reviews: 521,
    tag: "Beginner",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: PieChart,
    iconColor: "#EF4444",
    iconBg: "#FEE2E2",
    title: "Game Theory & Strategic Thinking",
    teacher: "Prof. Marco Silva",
    duration: "16 hours",
    rating: 4.9,
    reviews: 890,
    tag: "Advanced",
    tagColor: "bg-red-50 text-red-700",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-3.5 h-3.5"
            fill={star <= Math.floor(rating) ? "#F59E0B" : "none"}
            stroke={star <= Math.floor(rating) ? "#F59E0B" : "#D1D5DB"}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-sm font-bold text-[#0F172A]">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function PopularClasses() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="bg-[#F9FAFB] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4C3BCF]" />
              Curriculum
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Popular Classes
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            A selection of our most requested and highly-rated curriculum, curated by expert faculty.
          </motion.p>
        </motion.div>

        {/* Cards Grid:
            Mobile  → 1 col, first 3 shown (cards 4-6 hidden)
            Tablet  → 2 cols, all 6 visible
            Desktop → 3 cols, all 6 visible
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {classes.map((cls, i) => {
            const Icon = cls.icon;
            // On mobile (< sm), hide cards index 3,4,5
            const mobileHide = i >= 3 ? "hidden sm:flex" : "flex";

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${mobileHide} group bg-white rounded-3xl p-7 flex-col gap-5 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Thumbnail */}
                <div
                  className="w-full h-32 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: cls.iconBg }}
                >
                  <Icon className="w-14 h-14 opacity-70" style={{ color: cls.iconColor }} strokeWidth={1.2} />
                </div>

                {/* Tag */}
                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${cls.tagColor}`}>
                  {cls.tag}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] leading-snug tracking-tight group-hover:text-[#4C3BCF] transition-colors">
                  {cls.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[120px]">{cls.teacher}</span>
                  </span>
                  <span className="flex items-center gap-1.5 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {cls.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <StarRating rating={cls.rating} />
                  <span className="text-xs text-slate-400">({cls.reviews.toLocaleString()})</span>
                </div>

                {/* CTA */}
                <button className="mt-auto w-full flex items-center justify-center gap-2 bg-[#4C3BCF] text-white font-bold py-3 rounded-xl text-sm hover:bg-[#3d2fb5] hover:shadow-lg hover:shadow-[#4C3BCF]/25 transition-all group/btn">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <a
            href="/classes"
            className="inline-flex items-center gap-2 text-[#4C3BCF] font-bold text-sm border-b-2 border-[#4C3BCF]/30 pb-0.5 hover:border-[#4C3BCF] transition-colors group"
          >
            Browse all courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
