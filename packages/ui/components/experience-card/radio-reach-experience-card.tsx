"use client";

import { CardBody, CardContainer, CardItem } from "../3d-cards/3d-card";
import Image from "next/image";
import { experienceLogo } from "../..";
import Link from "next/link";

export const RadioReachExperienceCard = () => {
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
              Experience at Radio Reach
            </CardItem>
            <div className="flex flex-row items-center">
              <CardItem translateZ="20" className="w-full mt-4">
                <Image
                  alt="experience logo"
                  className="rounded-xl group-hover/card:shadow-xl"
                  src="/radioreach.svg"
                  width={800}
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
                  ● Developed a high-performance dashboard monitoring Raspberry
                  Pi devices for thousands of users, reducing system issues by
                  35%.
                </div>
                <div>
                  ● Improved debugging efficiency by 25% through a granular
                  coding approach, reducing codebase by 15%.
                </div>
                <div>
                  ● Decreased data fetch time by 20% by switching to Fetch API,
                  contributing to a 10% overall speed increase.
                </div>
                <div>
                  ● Leveraged AWS RDS Postgres, lowering database costs by 18%
                  while boosting query performance by 22%.
                </div>
                <div>
                  ● Enhanced user engagement by 30% with interactive charts from{" "}
                  <Link
                    href="https://ui.shadcn.dev/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    shadcn/ui
                  </Link>{" "}
                  and a subtle UI design.
                </div>
                <div>
                  ● Streamlined deployment, reducing time to production by 40%
                  using{" "}
                  <Link
                    href="https://vercel.com/"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel
                  </Link>{" "}
                  and{" "}
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
};
