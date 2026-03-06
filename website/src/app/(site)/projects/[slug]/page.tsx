"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { testimonials } from "@/app/api/testimonial";
import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "@/app/api/ProjectData";

export default function Details() {
  const { slug } = useParams();

  const item = ProjectData.find((item) => item.slug === slug);
  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-[1.5rem] text-40 font-semibold text-dark dark:text-white">
              {item?.name}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            {item?.images && item?.images[0] && (
              <div className="">
                <Image
                  src={item.images[0]?.src}
                  alt="Main Property Image"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-540"
                  unoptimized={true}
                />
              </div>
            )}
          </div>
          <div className="lg:col-span-4 lg:block hidden">
            {item?.images && item?.images[1] && (
              <Image
                src={item.images[1]?.src}
                alt="Property Image 2"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.images && item?.images[2] && (
              <Image
                src={item.images[2]?.src}
                alt="Property Image 3"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.images && item?.images[3] && (
              <Image
                src={item.images[3]?.src}
                alt="Property Image 4"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">Primary Objectives </h3>
            <div className="flex items-start gap-6 mt-4">
              <div className="flex flex-col gap-3">
                <ul className="text-xm text-dark/60 dark:text-white/60 space-y-2 list-disc pl-10">
                  {item?.primaryObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <p className="text-dark dark:text-white text-xm text-justify ">
                {item?.details}
              </p>
            </div>
            <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
              <h3 className="text-xl font-medium">What IOT-HUB offers</h3>
              <div className="grid grid-cols-3 mt-5 gap-6 ">
                <div className="flex items-center gap-2.5 ">
                  <Icon
                    icon="mdi:puzzle-outline"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    End-to-End IoT Solution
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="mdi:clipboard-outline"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Professional Project Documentation
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="boxicons:circuit-board"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Circuit and System Design
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="mdi:workflow-outline"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Flowchart and Architecture
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="cbi:outdoor-motion-sensor-temperature"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Sensor and Module Integration
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="streamline-sharp:cloud-wifi"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Cloud-Based Monitoring
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="icon-park-outline:code"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Source Code with Explanation
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="material-symbols:rocket-outline"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Deployment Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <Link
                href="/contactus"
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base  hover:cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
