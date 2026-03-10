import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt=""
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
          aria-hidden="true"
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt=""
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
          aria-hidden="true"
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon
                icon="carbon:collapse-categories"
                className="text-2xl text-primary "
              />
              Project Categories
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Explore the most in-demand areas of IoT innovation.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              advance iot projects
            </p>
            <Link
              href="/projects"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300 dark:bg-white dark:text-black dark:hover:bg-dark dark:hover:text-white hover:text-white"
            >
              View projects
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link
                href="/iot-projects"
                className="block relative"
                aria-label="View Internet of Things (IoT) projects"
              >
                <Image
                  src="/images/categories/The Internet of Things (IoT).jpg"
                  alt="Internet of Things category - smart devices and sensors"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
                <span className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500 left-0">
                  <span className="flex justify-end mt-6 mr-6">
                    <span className="bg-white text-dark rounded-full w-fit p-4" aria-hidden="true">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </span>
                  </span>
                  <span className="flex flex-col gap-2.5">
                    <span className="text-white text-2xl font-medium">The Internet of Things (IoT)</span>
                    <span className="text-white/80 text-base leading-6">
                      Advanced IoT projects including smart home automation,
                      Arduino-based sensors, ESP32 projects, environmental
                      monitoring systems, and real-time data collection
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link
                href="/software-Projects"
                className="block relative"
                aria-label="View Software projects"
              >
                <Image
                  src="/images/categories/software Projects.jpg"
                  alt="Software projects - web, mobile and desktop development"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
                <span className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500 left-0">
                  <span className="flex justify-end mt-6 mr-6">
                    <span className="bg-white text-dark rounded-full w-fit p-4" aria-hidden="true">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </span>
                  </span>
                  <span className="flex flex-col gap-2.5">
                    <span className="text-white text-2xl font-medium">software Projects</span>
                    <span className="text-white/80 text-base leading-6">
                      Web applications, mobile apps, desktop software, database
                      systems, and full-stack development projects.
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link
                href="/robotics"
                className="block relative"
                aria-label="View Robotics projects"
              >
                <Image
                  src="/images/categories/Robotics.jpg"
                  alt="Robotics projects - drones and automation"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
                <span className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500 left-0">
                  <span className="flex justify-end mt-6 mr-6">
                    <span className="bg-white text-dark rounded-full w-fit p-4" aria-hidden="true">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </span>
                  </span>
                  <span className="flex flex-col gap-2.5">
                    <span className="text-white text-2xl font-medium">Robotics</span>
                    <span className="text-white/80 text-base leading-6">
                      Autonomous robots, robotic arms, drones, line following
                      robots, and industrial automation systems.
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link
                href="/embedded-systems"
                className="block relative"
                aria-label="View Embedded Systems projects"
              >
                <Image
                  src="/images/categories/Embedded Systems.jpg"
                  alt="Embedded systems - Arduino, Raspberry Pi and microcontrollers"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
                <span className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500 left-0">
                  <span className="flex justify-end mt-6 mr-6">
                    <span className="bg-white text-dark rounded-full w-fit p-4" aria-hidden="true">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </span>
                  </span>
                  <span className="flex flex-col gap-2.5">
                    <span className="text-white text-2xl font-medium">Embedded Systems</span>
                    <span className="text-white/80 text-base leading-6">
                      Arduino projects, Raspberry Pi systems, microcontroller
                      programming, FPGA development, embedded C projects, and
                      real-time hardware solutions.
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
