import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Page | IOT HUB",
};

const ErrorPage = () => {
  return (
    <>
      <section className="flex justify-center pb-0!">
        <Image
          src="/images/404.png"
          alt="404"
          width={490}
          height={450}
          unoptimized={true}
        />
      </section>
      <section className="text-center bg-cover relative overflow-x-hidden">
        <div className="flex gap-2.5 items-center justify-center">
          <span>
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
            />
          </span>
          <p className="text-base font-semibold text-dark/75 dark:text-white/75">
            Error 404
          </p>
        </div>
        <h2 className="text-dark text-52 relative font-bold dark:text-white ">
          Lost? Let’s Help You Find Home.
        </h2>
        <Link
          href="/"
          className="py-4 px-8 bg-primary text-base leading-4 flex w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300 justify-center mx-auto dark:text-black  dark:hover:text-white"
        >
          Go Home
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
