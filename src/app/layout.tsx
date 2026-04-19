import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Economia Atelier",
  description: "High-quality, accessible & engaging education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="antialiased bg-surface text-slate-900 font-sans selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
