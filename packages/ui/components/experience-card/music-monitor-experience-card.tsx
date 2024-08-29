// Updated musicmonitor-experience-card.tsx
"use client";

import { CardBody, CardContainer, CardItem } from "../3d-cards/3d-card";
import Image from "next/image";
import { experienceLogo } from "../..";
import Link from "next/link";

export const MusicMonitorExperienceCard = () => {
  try {
    return (
      <>
        <div className="md:w-2/3 p-10" id="music-monitor-experience">
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
                    src="/musicmonitor.svg"
                    width={400}
                    height={400}
                    priority
                  />
                </CardItem>
                <CardItem
                  as="div"
                  className="flex-col text-slate-600 items-center p-4 m-4 w-full hidden sm:block"
                  translateZ="50"
                >
                  <div>
                    ● Engineered and deployed a dashboard app processing over
                    100,000 data entries, directly contributing to a successful
                    funding round for the client.
                  </div>
                  <div>
                    ● Reduced build times by 30% and improved code management
                    efficiency by 25% using{" "}
                    <Link
                      href="https://turbo.build/"
                      className="underline underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Turborepo
                    </Link>{" "}
                    for monorepo structuring.
                  </div>
                  <div>
                    ● Increased design productivity by 40% and reduced
                    stylesheet size by 60% using{" "}
                    <Link
                      href="https://tailwindcss.com/"
                      className="underline underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tailwind CSS
                    </Link>
                    .
                  </div>
                  <div>
                    ● Boosted user engagement by 20% through the integration of{" "}
                    <Link
                      href="https://developers.google.com/maps"
                      className="underline underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps API
                    </Link>{" "}
                    and d3.js for dynamic data visualization.
                  </div>
                  <div>
                    ● Cut query costs by over 40% and increased query speed by
                    25% by developing a custom module with{" "}
                    <Link
                      href="https://node-postgres.com/api/pool"
                      className="underline underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pg-pool
                    </Link>{" "}
                    for Redshift DB.
                  </div>
                  <div>
                    ● Reduced deployment time by 50% and minimized server
                    downtime by 30% through CI/CD integration with{" "}
                    <Link
                      href="https://github.com/"
                      className="underline underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>{" "}
                    and deployment on{" "}
                    <Link
                      href="https://aws.amazon.com/pm/ec2/"
                      className="underline underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AWS EC2
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
  } catch (e) {
    console.log(e);
  }
};
