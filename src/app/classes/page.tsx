import type { Metadata } from "next";
import ClassesClient from "./ClassesClient";

export const metadata: Metadata = {
  title: "All Classes | Economia Atelier",
  description: "Browse all Economics modules — from Microeconomics and Macroeconomic Policy to Behavioral Mechanics and Digital Asset Economics.",
  openGraph: {
    title: "Econ Theory Modules | Economia Atelier",
    description: "Explore our full module catalog — curated by expert faculty for serious scholars.",
    url: "https://economia-atelier.com/classes",
    siteName: "Economia Atelier",
  },
};

export default function ClassesPage() {
  return <ClassesClient />;
}
