import {
  dockerLogo,
  ec2Logo,
  expressLogo,
  gitLogo,
  githubLogo,
  graphqlLogo,
  nextjs13Logo,
  nginxLogo,
  recoilLogo,
  tailwindLogo,
  trpcLogo,
  typescriptLogo,
  zodLogo,
} from "ui/public";
import { StackType } from "../types";

export const frontEndTechStackArr: StackType[] = [
  {
    link: "https://www.typescriptlang.org/",
    image: typescriptLogo,
    name: "TypeScript",
  },
  {
    link: "https://tailwindcss.com/",
    image: tailwindLogo,
    name: "tailwindcss",
  },
  {
    link: "https://nextjs.org/",
    image: nextjs13Logo,
    name: "NEXT.js",
  },
  {
    link: "https://recoiljs.org/",
    image: recoilLogo,
    name: "Recoil",
  },
];
