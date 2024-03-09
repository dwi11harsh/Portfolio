import { CardBody, CardContainer, CardItem } from "./3d-card-elements";
import Image from "next/image";
import { StackType, typescriptLogo } from "../..";
import Link from "next/link";

export const ThreeDCards = ({ link, image, name }: StackType) => {
  try {
    return (
      <CardContainer className="inter-var">
        <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] rounded-xl">
          <CardItem translateZ="100" className="mx-2">
            <Link href={link}>
              <Image
                src={image}
                className="object-cover  hover:shadow-xl my-4"
                alt="thumbnail"
                height={50}
              />
            </Link>
          </CardItem>
        </CardBody>
      </CardContainer>
    );
  } catch (e) {}
};
