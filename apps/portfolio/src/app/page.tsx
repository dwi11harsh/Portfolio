import {
  AboutMe,
  MusicMonitorExperienceCard,
  FloatingNavbar,
  Navbar,
  ProjectsCard,
  TechStack,
  RadioReachExperienceCard,
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
