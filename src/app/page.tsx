import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Home / Hero */}
      <HeroSection />

      {/* 2. About Me */}
      <AboutSection />

      {/* 3. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 4. Skills (Graphical with animated progress bars) */}
      <SkillsSection />

      {/* 5. Education (New Academic Timeline) */}
      <EducationSection />

      {/* 6. Experience (Timeline or Open to Opportunities) */}
      <ExperienceSection />

      {/* 7. Contact (Quick Contact Cards + Form) */}
      <ContactSection />
    </div>
  );
}
