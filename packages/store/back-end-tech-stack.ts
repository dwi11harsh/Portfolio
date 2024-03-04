import { StackType } from "../types";
import {
  expressLogo,
  graphqlLogo,
  nextjs13Logo,
  trpcLogo,
  typescriptLogo,
  zodLogo,
} from "ui/public";

export const backEndTechStackArr: StackType[] = [
  {
    link: "https://expressjs.com/",
    image: expressLogo,
    name: "Express.js",
  },
  {
    link: "https://graphql.org/",
    image: graphqlLogo,
    name: "GraphQL",
  },
  {
    link: "https://nextjs.org/",
    image: nextjs13Logo,
    name: "NEXT.js",
  },

  {
    link: "https://trpc.io/",
    image: trpcLogo,
    name: "tRPC",
  },
  {
    link: "https://www.typescriptlang.org/",
    image: typescriptLogo,
    name: "TypeScript",
  },
  {
    link: "https://zod.dev/",
    image: zodLogo,
    name: "Zod",
  },
];
