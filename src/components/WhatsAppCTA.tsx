"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/* WhatsApp SVG icon — inline to avoid external CDN dependency */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.031 6.172c-2.277 0-4.126 1.849-4.126 4.126 0 2.277 1.849 4.126 4.126 4.126 2.277 0 4.126-1.849 4.126-4.126 0-2.277-1.849-4.126-4.126-4.126zm0 6.602c-1.365 0-2.476-1.111-2.476-2.476s1.111-2.476 2.476-2.476 2.476 1.111 2.476 2.476-1.111 2.476-2.476 2.476zm4.643-9.524c-1.304-.633-2.791-.976-4.32-.976-5.143 0-9.314 4.171-9.314 9.314 0 1.954.603 3.766 1.636 5.259l-1.077 3.929 4.024-1.055c1.42.861 3.086 1.361 4.871 1.361 5.143 0 9.314-4.171 9.314-9.314 0-3.32-1.741-6.233-4.364-7.844zm-4.364 15.526c-1.579 0-3.051-.439-4.307-1.196l-.308-.186-2.404.631.642-2.342-.204-.324c-.791-1.258-1.246-2.753-1.246-4.348 0-4.385 3.568-7.953 7.953-7.953s7.953 3.568 7.953 7.953-3.568 7.953-7.953 7.953z" />
    </svg>
  );
}

const perks = [
  "Daily economic insights & analysis",
  "Class schedules & reminders",
  "Exclusive study materials",
];

export default function WhatsAppCTA() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="bg-[#F9FAFB] py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {/* Card */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">

          {/* Decorative blobs */}
          {/* <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#25D366]/8 rounded-full blur-3xl pointer-events-none" /> */}
          {/* <div className="absolute -top-12 -left-12 w-52 h-52 bg-[#4C3BCF]/5 rounded-full blur-3xl pointer-events-none" /> */}

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-0">

            {/* Left — WA icon panel */}
            {/* <div className="lg:w-56 w-full flex-shrink-0 flex items-center justify-center py-10 lg:py-0 bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/5 lg:self-stretch">
              <div className="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center shadow-lg shadow-[#25D366]/25">
                <WhatsAppIcon className="w-10 h-10 text-white" />
              </div>
            </div> */}

            {/* Right — content */}
            <div className="flex-1 p-10 md:p-14 lg:pl-12 text-center">

              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 bg-[#e7f9ee] text-[#075e54] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" fill="#25D366" strokeWidth={0} />
                  Stay Updated
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4"
              >
                Join the ආස Econ <br className="hidden md:block" />
                <span className="text-[#25D366]">WhatsApp Channel</span>
              </motion.h2>

              {/* Sub */}
              <motion.p
                variants={fadeUp}
                className="text-slate-500 text-base md:text-lg leading-relaxed mb-8"
              >
                පංතියට අදාළ නිවේදන සහ දිනපතා ආර්ථික විද්‍යා කරුණු ඔබගේ දුරකථනයටම ගෙන්වා ගන්න.
              </motion.p>

              {/* Perk list */}
              {/* <motion.ul variants={stagger} className="flex flex-col gap-2.5 mb-10 hidden">
                {perks.map((perk) => (
                  <motion.li
                    key={perk}
                    variants={fadeUp}
                    className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#25D366]/12 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    </span>
                    {perk}
                  </motion.li>
                ))}
              </motion.ul> */}

              {/* CTA */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://whatsapp.com/channel/economia-atelier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-[#1ebe5d] hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all group"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Join the Channel
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* <p className="text-xs text-slate-400 font-medium">
                  Free · No spam · Unsubscribe anytime
                </p> */}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
