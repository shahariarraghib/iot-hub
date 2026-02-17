import Link from "next/link";

const GetInTouch: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden">
          <video
            className="w-full absolute top-0 left-0 object-cover -z-10"
            autoPlay
            loop
            muted
            aria-label="Video background showing luxurious real estate"
          >
            <source src="/images/contactUs/GetInTouch.mp4" type="video/mp4" />
          </video>

          <div className="bg-black/30 lg:py-64 md:py-28 py-10">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium">
                We deliver IoT, Software, and Robotics solutions for your next
                project.
              </h2>
              <Link
                href="#"
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              IoT Projects — Smart devices, smarter decisions{" "}
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Custom Software Development — Web, Mobile & Cloud
            </p>

            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Robotics — Automation for industries & research
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Need a project done? Get in touch with us today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
