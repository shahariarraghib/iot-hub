import HeroSub from "@/components/shared/HeroSub";
import SoftwareProjects from "@/components/Properties/SoftwareProjects";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "software Projects | IOT HUB",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="software Projects."
        description=" Web applications, mobile apps, desktop software, database
                    systems, and full-stack development projects."
        badge="software"
      />
      <SoftwareProjects />
    </>
  );
};

export default page;
