import { ProjectType } from "@/types/projectType";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const PropertyCard: React.FC<{ item: ProjectType }> = ({ item }) => {
  const { name, details, beds, baths, area, slug, images } = item;
  const mainImage = images[0]?.src;

  return (
    <div className="h-full">
      <div className="relative flex flex-col h-full rounded-2xl border border-dark/10 dark:border-white/10 group overflow-hidden hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
        
        {/* IMAGE WRAPPER */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {mainImage && (
            <Image
              src={mainImage}
              alt={name}
              fill
              className=" transition duration-500 group-hover:scale-110 group-hover:brightness-75"
              unoptimized
            />
          )}

          {/* ARROW */}
          <Link href={`/projects/${slug}`}>
            <div className="absolute top-4 right-4 p-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-300">
              <Icon
                icon={"solar:arrow-right-linear"}
                width={20}
                height={20}
                className="text-black"
              />
            </div>
          </Link>
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          <Link href={`/projects/${slug}`}>
            <h3 className="text-base font-medium text-black dark:text-white duration-300 group-hover:text-primary">
              {name}
            </h3>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;
