import { StackType } from "../types";
import { dockerLogo, ec2Logo, gitLogo, githubLogo, nginxLogo } from "ui/public";

const squareLogoHeight: number = 90;
const nonSquareLogoHeight: number = 40;

export const devopsTechStackArr: StackType[] = [
  {
    link: "https://www.docker.com/",
    image: dockerLogo,
    imageHeight: squareLogoHeight,
    name: "docker",
  },
  {
    link: "https://aws.amazon.com/pm/ec2/",
    image: ec2Logo,
    imageHeight: squareLogoHeight,
    name: "EC2",
  },
  {
    link: "https://git-scm.com/",
    image: gitLogo,
    imageHeight: squareLogoHeight,
    name: "git",
  },
  {
    link: "https://github.com/",
    image: githubLogo,
    imageHeight: squareLogoHeight,
    name: "GitHub",
  },
  {
    link: "https://www.nginx.com/",
    image: nginxLogo,
    imageHeight: squareLogoHeight,
    name: "NGINX",
  },
];
