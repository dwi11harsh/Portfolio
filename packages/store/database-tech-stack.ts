import { mongodbLogo, prismaLogo, redshiftLogo } from "ui/public";
import { StackType } from "../types";

export const databaseTechStackArr: StackType[] = [
  {
    link: "https://www.mongodb.com/",
    image: mongodbLogo,
    name: "MongoDB",
  },
  {
    link: "https://www.prisma.io/",
    image: prismaLogo,
    name: "Prisma",
  },
  {
    link: "https://aws.amazon.com/redshift/",
    image: redshiftLogo,
    name: "Amazon Redshift",
  },
];
