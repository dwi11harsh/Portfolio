"use client";

import { CardBody, CardContainer, CardItem } from "../3d-cards/3d-card";
import Image from "next/image";
import { experienceLogo } from "../..";
import Link from "next/link";

export const ExperienceCard = () => {
  return (
    <>
      <div className="md:w-2/3 p-10">
        <CardContainer className="inter-var w-full py-6 md:py-12 lg:py-10">
          <CardBody className="flex flex-col bg-gray-50 relative group/card border border-black/[0.1] h-auto rounded-xl p-6 dark:border-white/[0.2]">
            <CardItem
              as="h1"
              translateZ="10"
              className="text-xl font-bold text-neutral-600 dark:text-white m-2"
            >
              Experience at Music Monitor
            </CardItem>
            <div className="flex flex-row items-center">
              <CardItem translateZ="20" className="w-full mt-4">
                <Image
                  alt="experience logo"
                  className="rounded-xl group-hover/card:shadow-xl"
                  src={experienceLogo}
                  width={400}
                  height={400}
                />
              </CardItem>
              <CardItem
                as="div"
                className="flex-col text-slate-600 items-center p-4 m-4 w-full hidden sm:block"
                translateZ="50"
              >
                <div>
                  ● Built a dashboard web application end to end and deployed
                  it.
                </div>
                <div>
                  ● Used{" "}
                  <Link
                    href="https://turbo.build/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Turborepo
                  </Link>{" "}
                  to structure the project into a monorepo.
                </div>
                <div>
                  ● Used{" "}
                  <Link
                    href="https://tailwindcss.com/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tailwind CSS
                  </Link>{" "}
                  to style the frontend.
                </div>
                <div>
                  ● Incorporated{" "}
                  <Link
                    href="https://developers.google.com/maps"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Maps API
                  </Link>{" "}
                  and used simple chart from d3.js in frontend.
                </div>
                <div>
                  ● Used{" "}
                  <Link
                    href="https://nextjs.org/docs/pages/building-your-application/routing"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NextJS APIs
                  </Link>{" "}
                  for backend
                </div>
                <div>
                  ● Used{" "}
                  <Link
                    href="https://www.prisma.io/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prisma
                  </Link>{" "}
                  to store user's credentials in mongodb.
                </div>
                <div>
                  ● Built a simple ORM of my own as I was unable to find any
                  that could work perfectly with{" "}
                  <Link
                    href="https://aws.amazon.com/redshift/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redshift DB
                  </Link>{" "}
                  as that is where the data was stored by the client.
                </div>
                <div>
                  ● Developed a CI/CD pipeline using git and{" "}
                  <Link
                    href="https://github.com/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>{" "}
                  to deploy the project in an{" "}
                  <Link
                    href="https://aws.amazon.com/pm/ec2/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AWS ec2 instance
                  </Link>
                  .
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};
