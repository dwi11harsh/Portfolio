// Updated page.tsx
import {
  AboutMe,
  MusicMonitorExperienceCard,
  FloatingNavbar,
  Navbar,
  TechStack,
  RadioReachExperienceCard,
  ContactMe,
} from "@/packages/ui";

export default function Home() {
  return (
    <main>
      <FloatingNavbar />
      <Navbar />
      <AboutMe />
      <TechStack />
      <MusicMonitorExperienceCard />
      <RadioReachExperienceCard />
    </main>
  );
}
