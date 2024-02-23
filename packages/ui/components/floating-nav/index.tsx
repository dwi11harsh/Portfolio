import { FloatingNav } from "./floating-nav";

export const FloatingNavbar = () => {
  return <FloatingNav navItems={navitems} />;
};

const navitems = [
  {
    name: "Experience",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Let's Discuss",
    link: "#",
  },
  {
    name: "Contact me",
    link: "#",
  },
];
