import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="lg:mx-0 mx-auto">
            <Image
              src="/images/faqs/faqsImage.jpg"
              alt="image"
              width={680}
              height={644}
              className="lg:w-full max-h-[660px] rounded-2xl"
              unoptimized={true}
            />
          </div>
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="carbon:iot-connect"
                className="text-2xl text-primary "
              />
              FAQs
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
              Everything you need to know about our IoT, Software, and Robotics
              solutions.
            </p>
            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. What kind of IoT projects do you build?
                  </AccordionTrigger>
                  <AccordionContent>
                    We build smart home systems, industrial IoT solutions,
                    real-time monitoring platforms, and custom IoT dashboards.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. Do you also provide software development services?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We develop full-stack web applications, mobile apps,
                    and cloud-based platforms tailored to your business needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. Do you provide ongoing support after project delivery?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer maintenance, updates, and technical support to
                    ensure your project runs smoothly even after launch.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    4. How can I start my project with you?
                  </AccordionTrigger>
                  <AccordionContent>
                    Simply contact us through the form or button above. We’ll
                    discuss your idea, prepare a proposal, and get started.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
