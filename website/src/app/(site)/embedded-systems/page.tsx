import HeroSub from "@/components/shared/HeroSub";
import EmbeddedSystems from "@/components/Properties/EmbeddedSystems";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Embedded Systems | IOT HUB",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Embedded Systems."
        description="Arduino projects, Raspberry Pi systems, microcontroller
                    programming, FPGA development, embedded C projects, and
                    real-time hardware solutions."
        badge="Embedded Systems"
      />
      <EmbeddedSystems />
    </>
  );
};

export default page;
