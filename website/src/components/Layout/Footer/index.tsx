import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <div>
            <Link href="/">
              <Image
                src={"/images/header/logo.png"}
                alt="logo"
                width={180}
                height={68}
                unoptimized={true}
                className={""}
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://wa.me/+8801689797288 " target="_blank">
              <Icon
                icon="ic:baseline-whatsapp"
                width={28}
                height={28}
                className="text-white hover:text-primary duration-300"
              />
            </Link>
            <Link
              href="https://www.facebook.com/shahariar.raghib/"
              target="_blank"
            >
              <Icon
                icon="ph:facebook-logo-bold"
                width={28}
                height={28}
                className="text-white hover:text-primary duration-300"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="ph:instagram-logo-bold"
                width={28}
                height={28}
                className="text-white hover:text-primary duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                We deliver IoT, Software, and Robotics solutions for your next project.
              </h2>
              <Link
                href="/contactus"
                className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-xm hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-xm hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            ©2025 IOT-HUB - Design And Developed by{" "}
            <Link
              href="https://shahariar-bhuiyan.vercel.app/"
              className="hover:text-primary"
              target="_blanck"
            >
              Shahariar Bhuiyan
            </Link>
          </p>
          {/* <div className="flex gap-8 items-center">
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Terms of service
            </Link>
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Privacy policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
