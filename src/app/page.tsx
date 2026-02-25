import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import RGPDSection from "@/components/RGPDSection";
import TechSection from "@/components/TechSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Divider */}
      <div className="section-divider" />

      <ProjectsSection />

      {/* Divider */}
      <div className="section-divider" />

      <RGPDSection />

      {/* Divider */}
      <div className="section-divider" />

      <TechSection />

      <Footer />
    </main>
  );
}
