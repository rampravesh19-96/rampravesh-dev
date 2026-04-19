import { SiteShell } from "@/components/layout/site-shell";
import { ContactCtaSection } from "@/sections/home/contact-cta-section";
import { CredibilityStripSection } from "@/sections/home/credibility-strip-section";
import { ExperienceSnapshotSection } from "@/sections/home/experience-snapshot-section";
import { HeroSection } from "@/sections/home/hero-section";
import { AboutWorkingStyleSection } from "@/sections/home/about-working-style-section";
import { SelectedWorkSection } from "@/sections/home/selected-work-section";
import { SkillsDepthSection } from "@/sections/home/skills-depth-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <SelectedWorkSection />
      <CredibilityStripSection />
      <ExperienceSnapshotSection />
      <SkillsDepthSection />
      <AboutWorkingStyleSection />
      <ContactCtaSection />
    </SiteShell>
  );
}
