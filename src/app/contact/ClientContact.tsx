"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ClientContact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-[#f9f9fb] text-[#1a1c1d] font-sans">
      <Navigation />
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 flex items-center justify-center bg-gradient-to-br from-[#655092] to-[#7e69ac]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fcc030]/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>
        
        <motion.div 
          className="max-w-4xl text-center relative z-10"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
            Get In Touch
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Let&apos;s start a dialogue about <span className="text-[#ffdea2]">value</span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[#d2bcff] max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a curious student or a professional looking to deepen your economic wisdom, we&apos;re here to guide your journey.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info Blocks (Asymmetric Left) */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#655092]/10 rounded-xl flex items-center justify-center text-[#655092]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#655092] mb-2">Digital Inquiry</h3>
                  <a href="mailto:concierge@economia-atelier.com" className="text-[#49454f] font-medium hover:underline">concierge@economia-atelier.com</a>
                  <p className="text-sm text-[#7a7580] mt-1 italic">Our curators respond within 24 hours.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#655092]/10 rounded-xl flex items-center justify-center text-[#655092]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#655092] mb-2">Voice Consultation</h3>
                  <a href="tel:+15553429000" className="text-[#49454f] font-medium hover:underline">+1 (555) 342-9000</a>
                  <p className="text-sm text-[#7a7580] mt-1 italic">Mon—Fri, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#655092]/10 rounded-xl flex items-center justify-center text-[#655092]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#655092] mb-2">The Studio</h3>
                  <p className="text-[#49454f] font-medium">782 Madison Avenue, 4th Floor<br/>New York, NY 10065</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative rounded-xl overflow-hidden h-64 mt-8 group bg-[#111]">
              <div className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 opacity-60">
                {/* Abstract fake map pattern */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/20 rotate-12"></div>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -rotate-6"></div>
                  <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/20 rotate-12"></div>
                  <div className="absolute top-0 left-2/3 w-[1px] h-full bg-white/20 -rotate-12"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#655092]/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-[#655092] font-bold shadow-lg flex items-center gap-2 hover:bg-white transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Open Maps</span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form (Bento Style Right) */}
          <motion.div 
            className="lg:col-span-7 bg-white p-10 md:p-14 rounded-xl shadow-sm border border-[#cbc4d1]/20 my-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#1a1c1d] mb-2">Get In Touch</h2>
              <p className="text-[#49454f]">Share your aspirations or questions with our academic team.</p>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#7a7580]">Full Name</label>
                  <input className="w-full bg-[#f3f3f5] border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#655092] transition-all text-[#1a1c1d] outline-none" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#7a7580]">Email Address</label>
                  <input className="w-full bg-[#f3f3f5] border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#655092] transition-all text-[#1a1c1d] outline-none" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#7a7580]">Area of Interest</label>
                <div className="relative">
                  <select className="w-full bg-[#f3f3f5] border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#655092] transition-all text-[#49454f] outline-none appearance-none cursor-pointer">
                    <option>Macroeconomic Theory</option>
                    <option>Behavioral Economics</option>
                    <option>Financial Markets</option>
                    <option>Course Enrollment Inquiry</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#7a7580]">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#7a7580]">Your Message</label>
                <textarea className="w-full bg-[#f3f3f5] border-none rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#655092] transition-all text-[#1a1c1d] outline-none resize-none" placeholder="Tell us how we can help you..." rows={5}></textarea>
              </div>
              
              <div className="pt-4">
                <button className="w-full md:w-auto bg-[#fcc030] text-[#6d4f00] font-bold px-12 py-5 rounded-xl text-lg hover:scale-[0.98] transition-all flex items-center justify-center space-x-3 shadow-md shadow-[#fcc030]/20" type="submit">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Channel Promo */}
      <section className="bg-[#f3f3f5] py-20 px-6 md:px-12 mb-8">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#cbc4d1]/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full -mr-16 -mt-16"></div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-current text-white" />
              </div>
              <span className="text-xs font-bold text-[#25D366] uppercase tracking-widest">Real-time Updates</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1c1d] mb-4">Join our WhatsApp Insight Channel</h2>
            <p className="text-[#49454f]">Daily economic nuggets and atelier updates delivered straight to your phone.</p>
          </div>
          
          <div className="flex-shrink-0 relative z-10">
            <button className="bg-[#1a1c1d] text-white px-8 py-4 rounded-full font-bold flex items-center space-x-3 hover:bg-[#655092] transition-colors shadow-md">
              <span>Subscribe Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
