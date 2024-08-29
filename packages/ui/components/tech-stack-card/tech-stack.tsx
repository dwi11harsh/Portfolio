import { BackEndCard } from "./back-end-card";
import { DatabaseCard } from "./database-card";
import { DevopsCard } from "./devops-card";
import { FrontEndCard } from "./front-end-card";

export const TechStack = () => {
  return (
    <div
      id="tech-stack"
      className="w-fit h-fit mr-auto ml-10 pr-20 bg-gray-50 relative group/card border border-black/[0.1]  rounded-xl p-6 dark:border-white/[0.2] hover:shadow-sm"
    >
      <h1 className="text-3xl font-bold text-neutral-600 dark:text-white m-2">
        Tech Stack
      </h1>
      <div className="md:flex">
        <FrontEndCard />
        <BackEndCard />
        <DatabaseCard />
        <DevopsCard />
      </div>
    </div>
  );
};
