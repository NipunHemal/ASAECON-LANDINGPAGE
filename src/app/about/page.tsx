import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Economia Atelier",
  description: "Economia Atelier was founded on the belief that economics isn't just a subject—it's a lens to view the world. We've created a scholarly sanctuary where complex theories meet creative application.",
  openGraph: {
    title: "About Us | Economia Atelier",
    description: "Economia Atelier was founded on the belief that economics isn't just a subject—it's a lens to view the world. Join 2,500+ students navigating the global flow.",
    url: "https://economia-atelier.com/about",
    siteName: "Economia Atelier",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
