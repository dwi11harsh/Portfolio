import { CardBody, CardContainer, CardItem } from "./3d-card-elements";
import Image from "next/image";
import { StackType } from "../..";
import Link from "next/link";

export const ThreeDCard = ({ link, image, name, imageHeight }: StackType) => {
  try {
    return (
      <CardContainer className="inter-var">
        <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] rounded-xl">
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
