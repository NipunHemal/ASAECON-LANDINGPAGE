import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import AcademicDomains from "@/components/AcademicDomains";
import TrustStats from "@/components/TrustStats";
import PrivateJournal from "@/components/PrivateJournal";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* spacer for fixed nav */}
      <div className="pt-10"></div>

      <Hero />
      <WhyUs />
      <AcademicDomains />
      <TrustStats />
      <PrivateJournal />
      <Footer />
    </main>
  );
}
