import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";

const ExperienceSection = dynamic(() => import("@/components/home/ExperienceSection"));
const HighlightsSection = dynamic(() => import("@/components/home/HighlightsSection"));
const ContactSectionV2 = dynamic(() => import("@/components/home/ContactSectionV2"));

export default function Home() {
  return (
    <div className="pb-8 sm:pb-12">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <HighlightsSection />
      <ContactSectionV2 />
    </div>
  );
}
