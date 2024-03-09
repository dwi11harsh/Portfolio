import { mongodbLogo, prismaLogo, redshiftLogo } from "ui/public";
import { StackType } from "../types";

const squareLogoHeight: number = 90;
const nonSquareLogoHeight: number = 40;

export const databaseTechStackArr: StackType[] = [
  {
    link: "https://www.mongodb.com/",
    image: mongodbLogo,
    imageHeight: 110,
    name: "MongoDB",
  },
  {
    link: "https://www.prisma.io/",
    image: prismaLogo,
    imageHeight: squareLogoHeight,
    name: "Prisma",
  },
  {
    link: "https://aws.amazon.com/redshift/",
    image: redshiftLogo,
    imageHeight: squareLogoHeight,
    name: "Amazon Redshift",
  },
];
