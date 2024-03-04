import Image from "next/image";
import { nextjs13Logo } from "../..";
import { ThreeDCards } from "./3d-cards";

export const TechStack = () => {
  return (
    <section className="w-fit h-fit m-10 pr-20 flex flex-col bg-gray-50 relative group/card border border-black/[0.1]  rounded-xl p-6 dark:border-white/[0.2] hover:shadow-sm">
      <h1 className="text-xl font-bold text-neutral-600 dark:text-white m-2">
        Front-end
      </h1>
      <div className="flex flex-row"></div>
    </section>
  );
};
