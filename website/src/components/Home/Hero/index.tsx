import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className={`relative  h-[100vh] !overflow-hidden !py-0  z-10`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height="100%"
        className="!h-[100%] object-cover "
      >
        <source src="/images/hero/banner.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 h-full w-full bg-black/70"></div>

      <div className="absolute top-0 z-[999] flex h-full w-full flex-col items-center justify-center gap-y-3">
        <div className="mx-auto flex flex-col items-center justify-center gap-y-6 px-4 text-white lg:w-[70%] 2xl:w-[50%]">
          <div className="flex items-center gap-x-2 ">
            <div className="h-0 w-10 border-2 border-primary"></div>
            <h1 className="text-center text-[0.8rem] font-semibold text-primary md:text-lg">
              Innovate with IoT, Robotics & Software
            </h1>
          </div>
          <h2 className="text-center text-2xl font-bold  uppercase md:text-5xl">
            Build, Learn & Share your next big project with the
            <span className="text-primary"> IoT Hub</span>
          </h2>
          <p className="mx-auto text-center text-[.8rem] md:w-[60%] md:text-base">
            A community‑driven hub with ready‑to‑deploy templates, parts lists,
            and step‑by‑step guides optimized for local availability and cost.
          </p>
          <Link
            href="/contactus"
            className="mt-4 flex w-fit items-center gap-x-2  rounded bg-primary px-6 py-3 text-lg font-medium text-white shadow-signUp"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
