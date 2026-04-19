"use client";

import { Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-slate-500">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg tracking-tight text-primary">ආස Econ</div>
          <p className="max-w-xs leading-relaxed text-slate-500">
            &copy; 2024 ආස Econ. Cultivating economic wisdom through curated learning.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary tracking-wider mb-2">Explore</h4>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary tracking-wider mb-2">Resources</h4>
          <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary tracking-wider mb-2">Connect</h4>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
