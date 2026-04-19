"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "All Class", href: "/classes" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-primary">
          <Link href="/">Economia Atelier</Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`hover:text-primary transition-colors pb-1 ${pathname === link.href ? "text-primary border-b-2 border-primary font-semibold" : ""
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Login
          </Link>
          <button className="hidden md:inline-flex bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-yellow-500 transition-all shadow-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}
