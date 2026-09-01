import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <SplashScreen />
      <Header base="" />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <ResearchSection />
        <TimelineSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
