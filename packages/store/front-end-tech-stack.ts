import {
  nextjs13Logo,
  recoilLogo,
  tailwindLogo,
  typescriptLogo,
} from "ui/public";
import { StackType } from "../types";

const squareLogoHeight: number = 90;
const nonSquareLogoHeight: number = 40;

export const frontEndTechStackArr: StackType[] = [
  {
    link: "https://www.typescriptlang.org/",
    image: typescriptLogo,
    imageHeight: squareLogoHeight,
    name: "TypeScript",
  },
  {
    link: "https://tailwindcss.com/",
    image: tailwindLogo,
    imageHeight: 30,
    name: "tailwindcss",
  },
  {
    link: "https://nextjs.org/",
    image: nextjs13Logo,
    imageHeight: nonSquareLogoHeight,
    name: "NEXT.js",
  },
  {
    link: "https://recoiljs.org/",
    image: recoilLogo,
    imageHeight: squareLogoHeight,
    name: "Recoil",
  },
];
