import {
  AboutMe,
  ExperienceCard,
  FloatingNavbar,
  Navbar,
  ThreeDCardDemo,
} from "@/packages/ui";

export default function Home() {
  return (
    <main>
      <FloatingNavbar />
      <Navbar />
      <AboutMe />
      <ExperienceCard />
    </main>
  );
}
