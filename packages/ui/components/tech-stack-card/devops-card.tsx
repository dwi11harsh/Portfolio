import { devopsTechStackArr } from "../..";
import { CardBody, CardContainer, CardItem } from "./3d-card-elements";
import { ThreeDCard } from "./3d-cards";

export const DevopsCard = () => {
  return (
    <CardContainer className="ml-10 mt-20 pr-20 flex flex-col bg-gray-50 relative group/card border border-black/[0.1]  rounded-xl p-6 dark:border-white/[0.2] hover:shadow-sm">
      <CardBody>
        <CardItem
          className="flex items-center justify-center text-3xl font-bold text-neutral-600 dark:text-white m-2"
          translateZ={50}
        >
          Devops
        </CardItem>
        <div className="flex flex-col">
          {devopsTechStackArr.map((element) => (
            <ThreeDCard
              key={element.name}
              name={element.name}
              link={element.link}
              image={element.image}
              imageHeight={element.imageHeight}
            />
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
};
