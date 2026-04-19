"use client";

import { Search } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-navy">
          ECONOMIA ATELIER
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-primary transition-colors">Theory</a>
          <a href="#" className="hover:text-primary transition-colors">Analysis</a>
          <a href="#" className="hover:text-primary transition-colors">Archive</a>
          <a href="#" className="hover:text-primary transition-colors">Journal</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-slate-500 hover:text-navy transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:inline-flex bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-sm">
            Begin Exploration
          </button>
        </div>
      </div>
    </nav>
  );
}
