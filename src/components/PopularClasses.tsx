"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Globe, TrendingUp, Coins, Sparkles, PieChart } from "lucide-react";
import CourseCard, { type CourseCardData } from "@/components/CourseCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function PopularClasses() {
  const [courses, setCourses] = useState<CourseCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularCourses = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Using https as requested and required for most browsers
        const response = await fetch("https://api.asaecon.com/api/courses?limit=6&page=1");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        console.log("Popular Classes API Response:", json);

        if (json.success) {
          const mapped = json.data.map((c: any) => {
            let icon = BarChart2;
            let iconColor = "#4C3BCF";
            let iconBg = "#EEF0FF";

            const titleLower = (c.title || "").toLowerCase();
            if (titleLower.includes("macro") || titleLower.includes("සාර්ව")) {
              icon = Globe;
              iconColor = "#0EA5E9";
              iconBg = "#E0F4FF";
            } else if (titleLower.includes("micro") || titleLower.includes("ක්ෂුද්‍ර")) {
              icon = BarChart2;
              iconColor = "#4C3BCF";
              iconBg = "#EEF0FF";
            } else if (titleLower.includes("bank") || titleLower.includes("බැංකු")) {
              icon = Coins;
              iconColor = "#F59E0B";
              iconBg = "#FEF3C7";
            } else if (titleLower.includes("paper") || titleLower.includes("ප්‍රශ්න")) {
              icon = TrendingUp;
              iconColor = "#EF4444";
              iconBg = "#FEE2E2";
            } else if (titleLower.includes("revision") || titleLower.includes("පුනරීක්ෂණ")) {
              icon = Sparkles;
              iconColor = "#7C5CFC";
              iconBg = "#F0EDFF";
            }

            return {
              id: c.id,
              slug: c.slug,
              thumbnailUrl: c.thumbnailUrl,
              icon,
              iconColor,
              iconBg,
              title: c.title || "Untitled Course",
              teacher: "A/L Econ Panel",
              duration: c.totalDurationSec > 0 ? `${Math.ceil(c.totalDurationSec / 3600)} Hours` : "12+ Hours",
              rating: parseFloat(c.rating) || 4.8,
              reviews: c.enrollmentCount || 0,
              tag: c.level === "ALL_LEVELS" ? "Theory" : (c.level || "Theory"),
              tagColor: "bg-emerald-50 text-emerald-700",
            };
          });
          setCourses(mapped);
        } else {
          setError(json.message || "Failed to load courses");
        }
      } catch (err) {
        console.error("Failed to fetch popular courses:", err);
        setError("Connection failed. Please check if the API is reachable.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularCourses();
  }, []);

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
              Our Curriculum
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-xl tracking-tight mb-4">
            Popular Classes & Modules
          </motion.h2>
          <motion.p variants={fadeUp} className="body-lead max-w-xl mx-auto">
            අපගේ සිසුන් වඩාත්ම කැමති සහ ඉහළම ශ්‍රේණිගත කිරීම් සහිත පාඩම් පෙළක් මෙහි දැක්වේ.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 h-[360px] animate-pulse" />
            ))
          ) : error ? (
            <div className="col-span-full py-12 text-center bg-red-50 rounded-2xl border border-red-100">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          ) : (
            courses.map((cls, i) => (
              <CourseCard
                key={cls.id || i}
                data={cls}
                variants={fadeUp}
                className={i >= 3 ? "hidden sm:flex" : "flex"}
              />
            ))
          )}
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
            Browse all modules / සියලුම පාඩම් බලන්න
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

