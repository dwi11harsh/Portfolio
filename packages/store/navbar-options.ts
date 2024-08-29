type NavbarOptionsTypes = {
  name: string;
  to: string;
  offset: number;
};

export const NavbarOptions: NavbarOptionsTypes[] = [
  {
    name: "Tech Stack",
    to: "tech-stack",
    offset: 150,
  },
  {
    name: "Experience @MusicMonitor",
    to: "music-monitor-experience",
    offset: -70,
  },
  {
    name: "Experience @RadioReach",
    to: "radio-reach-experience",
    offset: -70,
  },
  {
    name: "Experience @RadioReachAPI",
    to: "radio-reach-api",
    offset: -70,
  },
  {
    name: "Contact",
    to: "contact",
    offset: -70,
  },
];
