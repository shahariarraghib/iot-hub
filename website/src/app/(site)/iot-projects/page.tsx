import HeroSub from "@/components/shared/HeroSub";
import IotProjectsList from "@/components/Properties/IotProjects";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IOT Projects | IOT ",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Iot Projects."
        description="Advanced IoT projects including smart home automation,
                    Arduino-based sensors, ESP32 projects, environmental
                    monitoring systems, and real-time data collection."
        badge="The Internet of Things (IoT)"
      />
      <IotProjectsList />
    </>
  );
};

export default page;
