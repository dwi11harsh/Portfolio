import {
  AboutMe,
  ExperienceCard,
  FloatingNavbar,
  Navbar,
  TechStack,
} from "@/packages/ui";

export default function Home() {
  return (
    <main>
      <FloatingNavbar />
      <Navbar />
      <AboutMe />
      <TechStack />
      <ExperienceCard />
    </main>
  );
}
