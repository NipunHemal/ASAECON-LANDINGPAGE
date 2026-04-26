"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/* WhatsApp SVG icon — inline to avoid external CDN dependency */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.031 6.172c-2.277 0-4.126 1.849-4.126 4.126 0 2.277 1.849 4.126 4.126 4.126 2.277 0 4.126-1.849 4.126-4.126 0-2.277-1.849-4.126-4.126-4.126zm0 6.602c-1.365 0-2.476-1.111-2.476-2.476s1.111-2.476 2.476-2.476 2.476 1.111 2.476 2.476-1.111 2.476-2.476 2.476zm4.643-9.524c-1.304-.633-2.791-.976-4.32-.976-5.143 0-9.314 4.171-9.314 9.314 0 1.954.603 3.766 1.636 5.259l-1.077 3.929 4.024-1.055c1.42.861 3.086 1.361 4.871 1.361 5.143 0 9.314-4.171 9.314-9.314 0-3.32-1.741-6.233-4.364-7.844zm-4.364 15.526c-1.579 0-3.051-.439-4.307-1.196l-.308-.186-2.404.631.642-2.342-.204-.324c-.791-1.258-1.246-2.753-1.246-4.348 0-4.385 3.568-7.953 7.953-7.953s7.953 3.568 7.953 7.953-3.568 7.953-7.953 7.953z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.58 5.02c.66.47 1.45.78 2.32.86v2.43c-1.28-.04-2.48-.47-3.47-1.16v7.31c0 3.1-2.52 5.62-5.62 5.62S4.2 17.56 4.2 14.46s2.52-5.62 5.62-5.62c.3 0 .6.03.89.07v2.54c-.29-.09-.59-.14-.89-.14-1.7 0-3.08 1.38-3.08 3.08s1.38 3.08 3.08 3.08 3.08-1.38 3.08-3.08V3.5h2.3c.17.6.52 1.13 1.02 1.52Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
    >
      <path
        fill="rgb(255, 0, 0)"
        d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"
      />
    </svg>
  );
}

const socialLinks = {
  facebook: "https://www.facebook.com/share/1EBbuy9nBj/",
  tiktok: "https://www.tiktok.com/@vihanga_econ_academy?_r=1&_t=ZS-95dHCkUgfo2",
  youtube: "https://www.youtube.com/",
} as const;

const whatsappPhone = "94771234567";
const whatsappPrefillMessage =
  "Hi! I’d like to know more details about Asa Econ classes.";

export default function WhatsAppCTA() {
  const whatsappHref = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappPrefillMessage)}`;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
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
                  <CheckCircle2
                    className="w-4 h-4 text-[#25D366]"
                    fill="#25D366"
                    strokeWidth={0}
                  />
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
                පංතියට අදාළ නිවේදන සහ දිනපතා ආර්ථික විද්‍යා කරුණු ඔබගේ දුරකථනයටම
                ගෙන්වා ගන්න.
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
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-[#1ebe5d] hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all group"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Message on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* <p className="text-xs text-slate-400 font-medium">
                  Free · No spam · Unsubscribe anytime
                </p> */}
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Follow us
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg> */}
                  </a>
                  <a
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center"
                  >
                    {/* <Youtube className="w-5 h-5" /> */}
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
