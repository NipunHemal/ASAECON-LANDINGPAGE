"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Clock } from "lucide-react";

const skills = [
  {
    Icon: GraduationCap,
    title: "Qualified Educator",
    desc: "උසස් පෙළ ආර්ථික විද්‍යා විෂය පිළිබඳ මනා පළපුරුද්දක් සහිත, ජාතික විෂය නිර්දේශය පිළිබඳ පුළුල් දැනුමක් ඇති ගුරුවරයෙකි.",
  },
  {
    Icon: BookOpen,
    title: "Bilingual Classes",
    desc: "සිංහල හා ඉංග්‍රීසි මාධ්‍ය දෙකෙන්ම පංති පැවැත්වෙන අතර, සෑම දරුවෙකුටම විෂය කාරණා මනාව අවබෝධ වන පරිදි ඉගැන්වීම් සිදු කෙරේ.",
  },
  {
    Icon: Clock,
    title: "Flexible Learning",
    desc: "ඔන්ලයින් (Online) මෙන්ම භෞතික (Physical) පංති පහසුකම් ද සහිත බැවින්, දිවයින පුරා සිටින දරුවන්ට උසස් මට්ටමේ අධ්‍යාපනයක් ලබා ගැනීමට අවස්ථාව සලසා ඇත.",
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
    <section className="section-base">
      <div className="section-inner">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left Column — Portrait ── */}
          <motion.figure
            className="w-full lg:w-[40%] shrink-0 m-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="instructor-portrait">
              <Image
                src="/a.png"
                alt="Lead Economics Instructor"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.figure>

          {/* ── Right Column — Content ── */}
          <motion.article
            className="flex-1 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Eyebrow — uses global accent colour token */}
            <motion.p variants={fadeUp} className="eyebrow-text-accent mb-4">
              About the Instructor
            </motion.p>

            {/* Headline */}
            <motion.h2 variants={fadeUp} className="heading-xl mb-6">
              Teaching Economics <br className="hidden sm:block" />
              the Right Way.
            </motion.h2>

            {/* Biography */}
            <motion.p variants={fadeUp} className="body-lead max-w-xl">
              අපගේ ප්‍රධාන ගුරුවරයා කැපවීමෙන් යුත්{" "}
              <strong className="text-text-primary font-semibold">උසස් පෙළ ආර්ථික විද්‍යා විශේෂඥයෙක්</strong>{" "}
              වන අතර ඔහු මේ වන විට සිසුන් දහස් ගණනකට ජාතික ආර්ථික විද්‍යා විෂය නිර්දේශය සාර්ථකව උගන්වා ඇත. සංකීර්ණ න්‍යායන් සරලව ඉගැන්වීම කෙරෙහි ඔහු දක්වන උනන්දුව කැපී පෙනේ.
            </motion.p>

            {/* Thin divider */}
            <motion.div variants={fadeUp} className="w-full border-t border-slate-100 my-10" />

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              variants={stagger}
            >
              {skills.map(({ Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="skill-card">
                  <div className="skill-icon-wrap">
                    <Icon className="skill-icon" strokeWidth={1.8} />
                  </div>
                  <h3 className="skill-title">{title}</h3>
                  <p className="skill-desc">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
