"use client";

import { motion } from "framer-motion";

export default function PrivateJournal() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        className="bg-navy rounded-3xl p-10 md:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
          Subscribe to our <span className="font-serif italic text-gold font-normal">Private Journal</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl relative z-10">
          Econ ලෝකයේ නවතම තොරතුරු සහ විශේෂිත පාඩම් සටහන් සතිපතා ඔබගේ විද්‍යුත් තැපෑලට ලබා ගන්න.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl relative z-10" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 px-6 py-4 rounded-full focus:outline-none focus:border-gold transition-colors"
            required
          />
          <button type="submit" className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-[#eac486] transition-colors whitespace-nowrap shadow-sm">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
