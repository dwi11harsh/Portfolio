import { CardBody, CardContainer, CardItem } from "./3d-card-elements";
import Image from "next/image";
import { typescriptLogo } from "../..";
import Link from "next/link";

export const ThreeDCards = (link: string, image: any) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] rounded-xl">
        <CardItem translateZ="100" className="mx-2">
          <Link href="#">
            <Image
              src={typescriptLogo}
              height="70"
              width="70"
              className="object-cover rounded-xl group-hover/card:shadow-xl p-1"
              alt="thumbnail"
            />
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
