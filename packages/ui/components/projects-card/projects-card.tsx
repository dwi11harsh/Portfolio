import { ProjectsArray } from "../..";
import { Project } from "./project";

export const ProjectsCard = () => {
  return (
    <div className="w-fit h-fit mr-auto ml-10 pr-20 bg-gray-50 relative group/card border border-black/[0.1]  rounded-xl p-6 dark:border-white/[0.2] hover:shadow-sm mb-10">
      <h1 className="text-3xl font-bold text-neutral-600 dark:text-white m-2">
        Projects
      </h1>
      <div className="md:flex">
        {ProjectsArray.map((element) => (
          <Project
            key={element.title}
            title={element.title}
            image={element.image}
            imageHeight={element.imageHeight}
            link={element.link}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
};
