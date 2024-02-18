import Image from "next/image";
import { logo } from "../../public";

export const AboutMe = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container flex flex-col gap-6 px-4 md:gap-10 md:flex-row md:items-center lg:px-6 xl:gap-20">
        <div className="order-1 flex items-center justify-center w-full text-center md:order-2 md:w-1/2 md:text-left">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm John Doe
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm a passionate and creative web developer with a love for clean
              code and elegant user interfaces.
            </p>
          </div>
        </div>
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-xl aspect-[1/1]">
              <Image
                alt="Avatar"
                className="object-cover rounded-xl"
                height="400"
                src={logo}
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-xl aspect-[2/1]">
              <Image
                alt="Avatar"
                className="object-cover rounded-t-xl"
                height="200"
                src={logo}
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
