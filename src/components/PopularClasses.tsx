"use client";

import { motion } from "framer-motion";
import { Star, Clock, User, ArrowRight, BarChart2, Globe, TrendingUp } from "lucide-react";

const stats = [
  { metric: "25+", label: "Years of eLearning Education Experience" },
  { metric: "56k", label: "Students Enrolled in LMSZONE Courses" },
  { metric: "170+", label: "Experienced Teacher's service." },
];

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <section className="bg-[#F9FAFB] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ─── SECTION 1: About / Stats ─── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-8">
              About Us
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg md:text-xl font-semibold text-[#0F172A] leading-relaxed">
            We are passionate about empowering learners Worldwide with high-quality, accessible &amp; engaging education. Our mission offering a diverse range of courses.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex flex-col items-center text-center px-10 py-8 ${
                i !== 0 ? "md:border-l border-slate-200" : ""
              }`}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-tighter mb-2">
                {stat.metric}
              </div>
              <div className="text-sm text-slate-500 max-w-[160px] leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-200 mb-20" />

        {/* ─── SECTION 2: Popular Classes ─── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Popular Classes
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            A selection of our most requested and highly-rated curriculum, curated by expert faculty.
          </motion.p>
        </motion.div>

        {/* Class Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {classes.map((cls, i) => {
            const Icon = cls.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white rounded-3xl p-7 flex flex-col gap-5 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div
                  className="w-full h-36 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: cls.iconBg }}
                >
                  <Icon className="w-16 h-16 opacity-70" style={{ color: cls.iconColor }} strokeWidth={1.2} />
                </div>

                {/* Tag */}
                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${cls.tagColor}`}>
                  {cls.tag}
                </span>

                {/* title */}
                <h3 className="text-lg font-bold text-[#0F172A] leading-snug tracking-tight group-hover:text-[#4C3BCF] transition-colors">
                  {cls.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {cls.teacher}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {cls.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <StarRating rating={cls.rating} />
                  <span className="text-xs text-slate-400">({cls.reviews.toLocaleString()})</span>
                </div>

                {/* CTA */}
                <button className="mt-auto w-full flex items-center justify-center gap-2 bg-[#4C3BCF] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#3d2fb5] hover:shadow-lg hover:shadow-[#4C3BCF]/25 transition-all group/btn">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          className="flex justify-center mt-14"
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
