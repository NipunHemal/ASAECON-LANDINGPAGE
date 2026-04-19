import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import AcademicDomains from "@/components/AcademicDomains";
import TrustStats from "@/components/TrustStats";
import PopularClasses from "@/components/PopularClasses";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import InstructorProfile from "@/components/InstructorProfile";
import PrivateJournal from "@/components/PrivateJournal";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* spacer for fixed nav */}
      <div className="pt-[42px]"></div>

      <Hero />
      <WhyUs />
      {/* <AcademicDomains /> */}
      {/* <TrustStats /> */}
      <PopularClasses />
      <WhatsAppCTA />
      <InstructorProfile />
      <PrivateJournal />
      <Footer />
    </main>
  );
}
