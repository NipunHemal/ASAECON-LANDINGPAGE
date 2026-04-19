"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Clock, Brain, Leaf, Coins,
  TrendingUp, Sparkles, ArrowRight, Users, BarChart2, Globe, PieChart
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CourseCard, { type CourseCardData } from "@/components/CourseCard";

/* ─── Data ─────────────────────────────────────────────────────────── */
const FILTERS = ["All Modules", "Micro (ක්ෂුද්‍ර)", "Macro (සාර්ව)", "Banking (බැංකු)", "Revision (පුනරීක්ෂණ)", "Past Papers (ප්‍රශ්න පත්‍ර)"];

interface CourseEntry extends CourseCardData {
  filter: string;
  meta: string;
  MetaIcon: React.ElementType;
}

const COURSES: CourseEntry[] = [
  {
    icon: BarChart2,
    iconColor: "#4C3BCF",
    iconBg: "#EEF0FF",
    title: "ක්ෂුද්‍ර ආර්ථික විද්‍යාව (Microeconomics)",
    desc: "පාරිභෝගික හැසිරීම, වෙළඳපල ව්‍යුහය සහ සම්පත් බෙදාහැරීම පිළිබඳ සම්පූර්ණ න්‍යායාත්මක ආවරණය.",
    tag: "Theory",
    tagColor: "bg-indigo-50 text-indigo-700",
    teacher: "A/L Econ Panel",
    duration: "10 Weeks",
    rating: 4.9,
    reviews: 1243,
    meta: "10 Weeks",
    MetaIcon: Clock,
    filter: "Micro (ක්ෂුද්‍ර)",
  },
  {
    icon: Globe,
    iconColor: "#0EA5E9",
    iconBg: "#E0F4FF",
    title: "සාර්ව ආර්ථික විද්‍යාව (Macroeconomics)",
    desc: "ජාතික ආදායම, ආර්ථික වර්ධනය සහ රජයේ මූල්‍ය ප්‍රතිපත්ති පිළිබඳ ගැඹුරු අධ්‍යයනයක්.",
    tag: "Theory",
    tagColor: "bg-sky-50 text-sky-700",
    teacher: "A/L Econ Panel",
    duration: "12 Weeks",
    rating: 4.8,
    reviews: 987,
    meta: "12 Weeks",
    MetaIcon: Clock,
    filter: "Macro (සාර්ව)",
  },
  {
    icon: Coins,
    iconColor: "#F59E0B",
    iconBg: "#FEF3C7",
    title: "මුදල් හා බැංකු ක්‍රමය (Money & Banking)",
    desc: "ශ්‍රී ලංකාවේ මුදල් පද්ධතිය, මහ බැංකුවේ කාර්යයන් සහ පොලී අනුපාත පිළිබඳ පැහැදිලි අවබෝධයක්.",
    tag: "Banking",
    tagColor: "bg-amber-50 text-amber-700",
    teacher: "A/L Econ Panel",
    duration: "5 Weeks",
    rating: 4.9,
    reviews: 762,
    meta: "Banking",
    MetaIcon: Coins,
    filter: "Banking (බැංකු)",
  },
  {
    icon: Brain,
    iconColor: "#7C5CFC",
    iconBg: "#F0EDFF",
    title: "සම්පූර්ණ පුනරීක්ෂණය (Full Revision)",
    desc: "සියලුම න්‍යාය කොටස් ඉතා කෙටි කාලයකින් නැවත මතක් කරගැනීම සඳහා විශේෂයෙන් සැකසූ පුනරීක්ෂණ මාලාව.",
    tag: "Revision",
    tagColor: "bg-violet-50 text-violet-700",
    teacher: "A/L Econ Panel",
    duration: "Intensive",
    rating: 4.9,
    reviews: 634,
    meta: "Intensive",
    MetaIcon: Brain,
    filter: "Revision (පුනරීක්ෂණ)",
  },
  {
    icon: Leaf,
    iconColor: "#10B981",
    iconBg: "#D1FAE5",
    title: "ජාත්‍යන්තර වෙළඳාම (International Trade)",
    desc: "විදේශ විනිමය අනුපාත, ගෙවුම් ශේෂය සහ ජාත්‍යන්තර වෙළඳපල පිළිබඳ ප්‍රායෝගික සාකච්ඡා.",
    tag: "Exam Prep",
    tagColor: "bg-emerald-50 text-emerald-700",
    teacher: "A/L Econ Panel",
    duration: "4 Weeks",
    rating: 4.8,
    reviews: 521,
    meta: "Exam Prep",
    MetaIcon: Leaf,
    filter: "Macro (සාර්ව)",
  },
  {
    icon: TrendingUp,
    iconColor: "#EF4444",
    iconBg: "#FEE2E2",
    title: "ප්‍රශ්න පත්‍ර සාකච්ඡාව (Past Papers)",
    desc: "පසුගිය විභාග ප්‍රශ්න පත්‍ර සහ අනුමාන ප්‍රශ්න පත්‍ර ගැඹුරින් සාකච්ඡා කිරීමෙන් විභාගයට ඉහළම ලකුණක් ලබාගැනීමට.",
    tag: "Advanced",
    tagColor: "bg-red-50 text-red-700",
    teacher: "A/L Econ Panel",
    duration: "8 Papers",
    rating: 4.9,
    reviews: 890,
    meta: "8 Papers",
    MetaIcon: PieChart,
    filter: "Past Papers (ප්‍රශ්න පත්‍ර)",
  },
];

/* ─── Animation Variants ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

/* ─── Component ─────────────────────────────────────────────────────── */
export default function ClassesClient() {
  const [activeFilter, setActiveFilter] = useState("All Modules");
  const [query, setQuery] = useState("");

  const filtered = COURSES.filter((c) => {
    const matchFilter = activeFilter === "All Modules" || c.filter === activeFilter;
    const matchQuery =
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      (c.desc ?? "").toLowerCase().includes(query.toLowerCase());
    return matchFilter && matchQuery;
  });

  return (
    <main className="min-h-screen bg-surface-muted font-sans">
      <Navigation />
      <div className="pt-[72px]" />

      <div className="max-w-7xl mx-auto px-6 pb-24">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <motion.header
          className="relative mt-10 mb-20 rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gold/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 md:p-16">
            <motion.div className="flex-1" initial="hidden" animate="visible" variants={stagger}>
              <motion.span variants={fadeUp} className="eyebrow-badge mb-6">
                <span className="eyebrow-badge-dot" />
                Academic Excellence
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-text-primary tracking-tighter leading-[1.05] mb-6">
                All Modules <br />
                <span className="font-serif italic text-primary font-semibold">සියලුම පාඩම්</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="body-lead max-w-lg mb-8">
                Master the foundations of economics. උසස් පෙළ ආර්ථික විද්‍යා විෂය නිර්දේශයේ සියලුම ප්‍රධාන කොටස් මෙහිදී ආවරණය කෙරේ.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["bg-indigo-400", "bg-violet-400", "bg-sky-400"].map((c, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full ${c} border-4 border-white flex items-center justify-center`}>
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-muted font-medium">
                  Join <span className="text-primary font-bold">2,500+</span> students this year
                </p>
              </motion.div>
            </motion.div>

            {/* Right visual */}
            <div className="flex-1 relative w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-primary/8 via-[#7C5CFC]/6 to-gold/10 rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-slate-100">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-64 h-64 rounded-full border-[40px] border-primary" />
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-4 p-8 w-full">
                  {["Micro", "Macro", "Trade", "Banking", "Papers", "Theory"].map((t, i) => (
                    <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl px-3 py-2.5 text-center border border-white shadow-sm">
                      <span className="text-xs font-bold text-text-primary">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-slate-100 hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted tracking-wider uppercase">Exam Pass Rate</p>
                  <p className="text-lg font-extrabold text-text-primary">98.5%</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold p-3 rounded-2xl shadow-lg">
                <Sparkles className="w-6 h-6 text-navy" />
              </div>
            </div>
          </div>
        </motion.header>

        {/* ── Filters & Search ──────────────────────────────────────── */}
        <motion.section
          className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-text-primary mr-2">Module Catalog</h2>
            <div className="hidden md:block h-6 w-px bg-slate-200" />
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`filter-pill ${activeFilter === f ? "filter-pill-active" : "filter-pill-idle"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
              placeholder="Search modules..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </motion.section>

        {/* ── Course Cards Grid using shared CourseCard ─────────────── */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {filtered.map((course) => (
            <CourseCard
              key={course.title}
              data={course}
              variants={fadeUp}
            />
          ))}

          {/* Request a Topic — always shown */}
          <motion.article
            variants={fadeUp}
            className="bg-white rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-12 text-center hover:border-primary/40 transition-all cursor-default group"
          >
            <div className="w-14 h-14 bg-primary/8 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-text-primary mb-3">Cant find a topic?</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              ඔබට අවශ්‍ය අමතර පාඩමක් හෝ Revision එකක් ගැන අපට දන්වන්න. (Request a new module).
            </p>
            <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group/btn">
              Submit Request
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.article>

          {filtered.length === 0 && (
            <div className="col-span-full py-24 text-center text-text-muted">
              <Search className="w-10 h-10 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No modules match your search.</p>
              <button className="mt-3 text-primary font-semibold text-sm hover:underline" onClick={() => { setQuery(""); setActiveFilter("All Modules"); }}>
                Clear filters
              </button>
            </div>
          )}
        </motion.section>

        {/* ── Upsell Banner ─────────────────────────────────────────── */}
        <motion.section
          className="upsell-banner"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/25 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gold/10 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              A/L Economy Bundle: <br className="hidden md:block" />
              <span className="font-serif italic font-normal text-gold">The Master Class</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Enroll in all core Econ Theory modules and Past Paper discussions to save 25%. සියලුම පාඩම් එකට ලබාගන්න.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
            <button className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-full text-base hover:bg-[#eac486] hover:scale-105 transition-all shadow-lg group">
              Claim Bundle Discount
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-slate-600 font-medium">Offer ends in 3 days</p>
          </div>
        </motion.section>

      </div>
      <Footer />
    </main>
  );
}
