"use client";
import Image from "next/image";
import { coderLogo } from "../../";
import { TextGenerateEffect } from "../text-generate-effect";

export const AboutMe = () => {
  return (
    <section className="flex items-cener justify-center w-full py-6 md:py-12 lg:py-16">
      <div className="container flex flex-col gap-6 px-4 md:gap-10 md:flex-row md:items-center lg:px-6 xl:gap-20">
        <div className="order-1 flex items-center justify-center w-full text-center md:order-2 md:w-1/2 md:text-left">
          <div className="space-y-3">
            <div className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <TextGenerateEffect words="Hi, I'm Prabhat Dwivedi" />
            </div>
            <div className="flex items-center justify-center mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              <TextGenerateEffect words="Full-Stack developer with experience in building an end-to-end web application and interest in ML." />
            </div>
          </div>
        </div>
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-xl aspect-[1/1]">
              <Image
                alt="Avatar"
                className="object-cover rounded-xl"
                height="400"
                src={coderLogo}
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
          <div className="flex items-center justify-center md:hidden">
            <div className="relative overflow-hidden rounded-xl aspect-[2/1]">
              <Image
                alt="Avatar"
                className="object-cover rounded-t-xl"
                height="200"
                src={coderLogo}
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
