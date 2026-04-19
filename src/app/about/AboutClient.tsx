"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users, Verified, Play, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ─── Animation Variants ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/* ─── Tutors Data ───────────────────────────────────────────────────── */
const TUTORS = [
  {
    name: "Dr. Nipun Hemal",
    role: "Lead Instructor (ප්‍රධාන දේශක)",
    desc: "With years of proven teaching excellence, he seamlessly guides students to top A/L results. දිවයිනේ ප්‍රමුඛතම ආර්ථික විද්‍යා දේශක.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    color: "bg-[#4C3BCF]/20",
    offset: false,
  },
  {
    name: "Prof. Julian Thorne",
    role: "Practical Training (ප්‍රායෝගික පුහුණුව)",
    desc: "Bridges the gap between complex theory and the real world. සංකීර්ණ ආර්ථික විද්‍යා සිද්ධාන්ත ප්‍රායෝගික ජීවිතයට සම්බන්ද කිරීමේ විශේෂඥයෙකි.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    color: "bg-[#F3D39A]/40",
    offset: true,
  },
  {
    name: "Sarah Jenkins, CFA",
    role: "Paper Supervision (ප්‍රශ්නපත්‍ර අධීක්ෂණ)",
    desc: "Master exam techniques with deep analysis. පසුගිය ප්‍රශ්න පත්‍ර සහ අනුමාන ප්‍රශ්න පත්‍ර හරහා විභාගයට ඉහළම ලකුණක් ලබාගැනීමට සිසුන්ව මෙහෙයවයි.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    color: "bg-[#0EA5E9]/20",
    offset: false,
  },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
];

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-surface font-sans overflow-hidden">
      <Navigation />
      <div className="pt-[72px]" />

      {/* ─── Hero Section: The Intellectual Atelier ─────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <motion.div
            className="lg:col-span-7 z-10 relative"
            initial="hidden" animate="visible" variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs tracking-[0.2em] text-primary font-bold uppercase mb-4 block">
              Our Story (අපගේ කතාව)
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-text-primary leading-[1.1] mb-8">
              Crafting the <span className="text-primary italic font-serif">Economic Mind</span><br className="hidden md:block"/> හෙට දවස වෙනුවෙන්.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-text-muted max-w-xl leading-relaxed mb-10">
              Economia Atelier is Sri Lanka&apos;s premium economics class. ආර්ථික විද්‍යාව යනු හුදෙක් විභාගයක් සමත් වීම සඳහා පමණක් නොව, ලෝකය දැකීමේ කවුළුවක් බව පෙන්වා දීම අපගේ අරමුණයි.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {AVATARS.map((src, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-surface shadow-sm overflow-hidden relative">
                    <img src={src} alt="Student avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-text-muted italic">
                Join 2,500+ students navigating the global flow. (සිසුන් 2,500+ ට අධික පිරිසක් සමගින්)
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative lg:h-[600px] flex items-center justify-center p-8 lg:p-0"
            initial="hidden" animate="visible" variants={scaleUp}
          >
            <div className="relative w-full max-w-md aspect-square bg-primary/5 rounded-[3rem] overflow-hidden">
              {/* Hero Image */}
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
                alt="Students collaborating in modern university" 
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80" 
              />
            </div>

            {/* Playful Illustration Overlay */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold rounded-full blur-[80px] opacity-20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ─── Tutors Section (Asymmetric Bento) ────────────────────────── */}
      <section className="bg-surface-muted py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl">
              <span className="text-xs tracking-[0.2em] text-primary font-bold uppercase mb-4 block">
                The Guiding Minds (අපගේ ආචාර්ය මණ්ඩලය)
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
                Meet Our Expert Faculty
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="hidden md:block">
              <p className="text-text-muted font-medium max-w-xs italic text-right">
                &quot;The best teacher is not the one who knows the most, but the one who inspires the most.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          >
            {TUTORS.map((tutor, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-2 group ${tutor.offset ? 'md:mt-16' : ''}`}
              >
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-8 relative bg-slate-100">
                  <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 ${tutor.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
                  {tutor.name}
                </h3>
                <p className="text-sm font-bold text-primary mb-4 tracking-wide">
                  {tutor.role}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {tutor.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Stats Section: Editorial Layering ─────────────────────────── */}
      <section className="py-24 md:py-32 overflow-hidden relative bg-white">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-muted -z-10 translate-x-1/2 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-text-primary">
                Our Results <br />
                <span className="text-primary italic font-serif">(අපගේ ප්‍රතිඵල)</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-text-muted mb-12 max-w-lg text-lg leading-relaxed">
                We don&apos;t just teach economics; we foster success. අපගේ අරමුණ හුදෙක් විභාගය සමත් කරවීම පමණක් නොව, විෂය පිළිබඳ මනා අවබෝධයක් ඇති දරුවන් පිරිසක් සමාජයට දායාද කිරීමයි.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 lg:gap-8">
                <div className="p-8 rounded-[2rem] bg-surface-muted border border-slate-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                  <Users className="text-primary mb-4 w-8 h-8" />
                  <div className="text-4xl lg:text-5xl font-black text-text-primary mb-2 tracking-tighter">1,200+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-muted">Active Students (සක්‍රීය සිසුරු දරුවන්)</div>
                </div>

                <div className="p-8 rounded-[2rem] bg-gold/10 border border-gold/20 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                  <Verified className="text-[#B45309] mb-4 w-8 h-8" />
                  <div className="text-4xl lg:text-5xl font-black text-[#B45309] mb-2 tracking-tighter">98%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#B45309]/70">Exam Pass Rate (සමත් ප්‍රතිශතය)</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Impact Illustration */}
              <div className="bg-primary p-1.5 rounded-[2.5rem] shadow-2xl shadow-primary/10 overflow-hidden transform md:rotate-2 md:scale-95 transition-transform hover:rotate-0 hover:scale-100 duration-500">
                <div className="w-full aspect-[4/3] rounded-[2.2rem] overflow-hidden bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" 
                    alt="Students in a modern seminar" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 max-w-[260px] border border-slate-100 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Live Now</span>
                </div>
                <p className="text-sm font-medium leading-relaxed italic text-slate-700">
                  &quot;The teaching methodology is unmatched. සංකීර්ණ පාඩම් මතක තියාගන්න හරිම ලේසියි.&quot;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary">A</span>
                  </div>
                  <p className="text-xs text-primary font-bold">Amasha R., Alumnus</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32">
        <motion.div
          className="bg-[#0F172A] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-[#0F172A] to-[#0F172A]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight">
              Are you Ready? <br className="hidden md:block" />
              විභාගයට ලෑස්තිද?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our class and transform your future. අදම අපගේ පංතියට සම්බන්ධ වී ආර්ථික විද්‍යාව විෂය ඉතා සරලව ඉගෙනගන්න.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-gold text-[#0F172A] px-10 py-4 rounded-xl font-bold text-base hover:bg-[#eac486] hover:scale-105 transition-all shadow-lg hover:shadow-gold/20">
                දැන්ම ලියාපදිංචි වන්න (Enroll Now)
              </button>
              <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all">
                වැඩි විස්තර ලබාගන්න (Get Details)
              </button>
            </div>
          </div>

          {/* Abstract Graphics */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
