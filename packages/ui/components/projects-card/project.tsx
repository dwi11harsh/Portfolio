import {
  CardBody,
  CardContainer,
  CardItem,
} from "../tech-stack-card/3d-card-elements";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../..";

export const Project = ({
  title,
  image,
  imageHeight,
  link,
  description,
}: ProjectType) => {
  try {
    return (
      <CardContainer className="inter-var">
        <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] rounded-xl">
          <CardItem as="p">{title}</CardItem>
          <CardItem translateZ="100" className="mx-2">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={image}
                className="object-cover  hover:shadow-xl my-4"
                alt="thumbnail"
                height={imageHeight}
              />
            </Link>
          </CardItem>
        </CardBody>
      </CardContainer>
    );
  } catch (e) {}
};
