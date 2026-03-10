import { Icon } from "@iconify/react";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | IOT HUB",
};

export default function ContactUs() {
  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="mb-16">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <span>
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
            />
          </span>
          <p className="text-base font-semibold text-badge dark:text-white/90">
            Contact us
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            Have questions? ready to help!
          </h3>
          <p className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6">
            Looking for your dream home or ready to sell? Our expert team offers
            personalized guidance and market expertise tailored to you.
          </p>
        </div>
      </div>
      {/* form */}
      <section id="contact" className="overflow-hidden p-3">
        <div className="container max-w-[800px]">
          <div className="mx-4 flex flex-wrap ">
            <div>
              <h1 className="mb-5">
                Get a project? Let’s talk.{" "}
                <Link
                  href="mailto:sr.shahariar3225@gmail.com"
                  aria-label="Email us at sr.shahariar3225@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" linkHoverStyle dark:hidden bggradientcustomyellow "
                >
                  <span>@ sr.shahariar3225@gmail.com</span>
                </Link>
                <Link
                  href="mailto:sr.shahariar3225@gmail.com"
                  aria-label="Email us at sr.shahariar3225@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkHoverStyle hidden dark:inline"
                >
                  <span>@ sr.shahariar3225@gmail.com</span>
                </Link>
              </h1>
              <h1>
                Get In Touch, I Want To Hear From You. send me an email
                <Link
                  href="mailto:sr.shahariar3225@gmail.com"
                  aria-label="Email sr.shahariar3225@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkHoverStyle ml-2 mr-2 dark:hidden bggradientcustomyellow"
                >
                  <span>sr.shahariar3225@gmail.com</span>
                </Link>
                <Link
                  href="mailto:sr.shahariar3225@gmail.com"
                  aria-label="Email sr.shahariar3225@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" linkHoverStyle ml-2 mr-2 hidden dark:inline"
                >
                  <span>sr.shahariar3225@gmail.com</span>
                </Link>
                or whatsapp me <br />
                <Link
                  href="https://wa.me/8801689797288"
                  aria-label="WhatsApp us at +880 1689797288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" linkHoverStyle ml-2 mr-2 dark:hidden bggradientcustomyellow"
                >
                  (+880) 1689797288
                </Link>
                <a
                  href="https://wa.me/8801689797288"
                  aria-label="WhatsApp us at +880 1689797288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" linkHoverStyle ml-2 mr-2 hidden dark:inline"
                >
                  (+880) 1689797288
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
