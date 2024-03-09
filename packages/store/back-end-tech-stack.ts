import { StackType } from "../types";
import {
  expressLogo,
  graphqlLogo,
  nextjs13Logo,
  trpcLogo,
  typescriptLogo,
  zodLogo,
} from "ui/public";

const squareLogoHeight: number = 90;
const nonSquareLogoHeight: number = 40;

export const backEndTechStackArr: StackType[] = [
  {
    link: "https://expressjs.com/",
    image: expressLogo,
    imageHeight: 60,
    name: "Express.js",
  },
  {
    link: "https://graphql.org/",
    image: graphqlLogo,
    imageHeight: squareLogoHeight,
    name: "GraphQL",
  },
  {
    link: "https://nextjs.org/",
    image: nextjs13Logo,
    imageHeight: nonSquareLogoHeight,
    name: "NEXT.js",
  },

  {
    link: "https://trpc.io/",
    image: trpcLogo,
    imageHeight: squareLogoHeight,
    name: "tRPC",
  },
  {
    link: "https://www.typescriptlang.org/",
    image: typescriptLogo,
    imageHeight: squareLogoHeight,
    name: "TypeScript",
  },
  {
    link: "https://zod.dev/",
    image: zodLogo,
    imageHeight: squareLogoHeight,
    name: "Zod",
  },
];
