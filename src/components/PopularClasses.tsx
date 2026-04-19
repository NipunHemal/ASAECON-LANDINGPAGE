"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Globe, TrendingUp, DollarSign, BookOpen, PieChart } from "lucide-react";
import CourseCard, { type CourseCardData } from "@/components/CourseCard";

const classes: CourseCardData[] = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function PopularClasses() {
  return (
    <section className="bg-[#F9FAFB] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="eyebrow-badge mb-5">
              <span className="eyebrow-badge-dot" />
              Curriculum
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-xl tracking-tight mb-4">
            Popular Classes
          </motion.h2>
          <motion.p variants={fadeUp} className="body-lead max-w-xl mx-auto">
            A selection of our most requested and highly-rated curriculum, curated by expert faculty.
          </motion.p>
        </motion.div>

        {/* Cards Grid:
            Mobile  → 1 col, first 3 visible (cards 4-6 hidden)
            Tablet  → 2 cols, all 6 visible
            Desktop → 3 cols, all 6 visible
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {classes.map((cls, i) => (
            <CourseCard
              key={i}
              data={cls}
              variants={fadeUp}
              className={i >= 3 ? "hidden sm:flex" : "flex"}
            />
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="flex justify-center mt-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <a
            href="/classes"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors group"
          >
            Browse all courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
