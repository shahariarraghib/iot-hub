import HeroSub from "@/components/shared/HeroSub";
import ProjectsList from "@/components/Properties/ProjectsList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects | IOT HUB",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Projects."
        description="Explore the most in-demand areas of IoT innovation."
        badge="Projects"
      />
      <ProjectsList />
    </>
  );
};

export default page;
