import { StackType } from "../types";
import { dockerLogo, ec2Logo, gitLogo, githubLogo, nginxLogo } from "ui/public";

export const devopsTechStackArr: StackType[] = [
  {
    link: "https://www.docker.com/",
    image: dockerLogo,
    name: "docker",
  },
  {
    link: "https://aws.amazon.com/pm/ec2/",
    image: ec2Logo,
    name: "EC2",
  },
  {
    link: "https://git-scm.com/",
    image: gitLogo,
    name: "git",
  },
  {
    link: "https://github.com/",
    image: githubLogo,
    name: "GitHub",
  },
  {
    link: "https://www.nginx.com/",
    image: nginxLogo,
    name: "NGINX",
  },
];
