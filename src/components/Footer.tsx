"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-slate-500">
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="font-bold text-lg tracking-tight text-navy">ECONOMIA ATELIER</div>
          <p className="max-w-sm">
            Shaping next-generation economic thought through structured learning and profound analysis.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-navy uppercase tracking-wider mb-2">Connect</h4>
          <a href="#" className="hover:text-primary transition-colors">Curator&apos;s Note</a>
          <a href="#" className="hover:text-primary transition-colors">Faculty Directory</a>
          <a href="#" className="hover:text-primary transition-colors">Admissions</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-navy uppercase tracking-wider mb-2">Legal</h4>
          <a href="#" className="hover:text-primary transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-primary transition-colors">Archive Settings</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Economia Atelier. All intellectual rights reserved.</p>
        <p>Designed with precision.</p>
      </div>
    </footer>
  );
}
