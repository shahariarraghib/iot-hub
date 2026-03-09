import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | IOT HUB",
};

const Blog = () => {
  return (
    <>
      <HeroSub
        title="Innovate with IoT, Robotics & Software."
        description="Stay ahead in the IoT world with expert insights, tutorials, and the latest technology updates."
        badge="Blog"
      />
      <BlogList />
    </>
  );
};

export default Blog;
