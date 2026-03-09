import HeroSub from "@/components/shared/HeroSub";
import Robotics from "@/components/Properties/Robotics";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Robotics | IOT HUB",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Robotics."
        description=" Autonomous robots, robotic arms, drones, line following
                    robots, and industrial automation systems."
        badge="Robotics"
      />
      <Robotics />
    </>
  );
};

export default page;
