import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InfoSection from "@/components/InfoSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ScheduleSection from "@/components/ScheduleSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InfoSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <BlogSection />
      <ScheduleSection />
      <FooterSection />
    </div>
  );
};

export default Index;
