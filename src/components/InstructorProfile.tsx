"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Clock } from "lucide-react";

const skills = [
  {
    Icon: GraduationCap,
    title: "Qualified Educator",
    desc: "Experienced A/L ICT teacher with deep expertise in the national curriculum and modern IT concepts.",
  },
  {
    Icon: BookOpen,
    title: "Bilingual Teaching",
    desc: "Classes conducted in both English and Sinhala mediums to ensure every student can learn effectively.",
  },
  {
    Icon: Clock,
    title: "Flexible Learning",
    desc: "Both online and physical class options available, making quality ICT education accessible island-wide.",
  },
];

export default function InstructorProfile() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
  };

  return (
    <section className="bg-white py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left Column — Portrait */}
          <motion.figure
            className="w-full lg:w-[38%] shrink-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60">
              <Image
                src="/a.png"
                alt="Lead Economics Instructor"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.figure>

          {/* Right Column — Content */}
          <motion.article
            className="flex-1 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4"
            >
              About The Instructor
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Teaching Economics <br className="hidden sm:block" />
              the Right Way.
            </motion.h2>

            {/* Biography */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              Our lead instructor is a dedicated <strong className="text-slate-700 font-semibold">A/L Economics specialist</strong> who has guided thousands of students through Sri Lanka&apos;s national Economics curriculum. With a passion for making complex theory accessible, he combines historical perspective with practical analytical tools to ensure students truly grasp the subject.
            </motion.p>

            {/* Divider */}
            <motion.div variants={fadeUp} className="my-4" />

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              variants={stagger}
            >
              {skills.map(({ Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex flex-col items-start group"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-5 h-5 text-orange-500" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
