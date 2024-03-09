import {
  frontEndTechStackArr,
  recoilLogo,
  tailwindLogo,
  typescriptLogo,
} from "../..";
import { CardBody, CardContainer, CardItem } from "./3d-card-elements";
import { ThreeDCards } from "./3d-cards";

export const TechStack = () => {
  const recoilName = "Recoil";
  const recoilLink = "https://recoiljs.org/";
  return (
    <section className="w-fit h-fit m-10 pr-20 flex flex-col bg-gray-50 relative group/card border border-black/[0.1]  rounded-xl p-6 dark:border-white/[0.2] hover:shadow-sm">
      <h1 className="">Front-end</h1>
      <CardContainer>
        <CardBody>
          <CardItem
            as="h1"
            className="text-3xl font-bold text-neutral-600 dark:text-white m-2"
          >
            Front-end
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ThreeDCards name={recoilName} link={recoilLink} image={recoilLogo} />
          <ThreeDCards
            name="TypeScript"
            link="https://www.typescriptlang.org/d"
            image={typescriptLogo}
          />
        </div>
        <ThreeDCards
          name="Tailwindcss"
          link="https://tailwindcss.com/"
          image={tailwindLogo}
        />
      </div>
    </section>
  );
};
