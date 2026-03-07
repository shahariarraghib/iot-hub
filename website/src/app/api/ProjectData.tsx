import { ProjectType } from "@/types/projectType";

export const ProjectData: ProjectType[] = [
  {
    name: "Design of an Internet of Things based Hysteresis Control system in a Photovoltaic Panel Controller for the Smart use of Solar Electric Energy in Rural Areas",
    slug: "1",
    details:
      "The Internet of Things (IoT) describes the network of physical objects embedded with sensors, software, and other technologies that connect and exchange data with devices and systems over the internet. IoT technology enables remote monitoring of solar panels using connected sensors, allowing real-time performance tracking and output optimization. Photovoltaic (PV) solar energy converts sunlight into electricity and is one of the fastest growing energy sources worldwide due to increasing population and technological development. Solar panels produce direct current (DC), which can be converted into alternating current (AC) using an inverter for home appliances. Hysteresis is a control technique used in photovoltaic panel systems to prevent rapid switching between states caused by fluctuations in light intensity, voltage, or current, ensuring system stability and efficiency. The proposed system integrates hysteresis control in a photovoltaic panel controller to promote solar energy usage in rural areas by connecting to the cloud for real-time monitoring and system updates through a mobile application. Additionally, the photovoltaic panel can rotate from one horizon to another to track the sun’s position for maximum solar energy harvesting, making the system more efficient and smarter.",

    primaryObjectives: [
      "In order to maximize solar energy output from the Sun.",
      "Using Hysteresis technique systems to prevent rapid switching between states near a boundary or threshold.",
      "To design a real-time temperature, current, voltage and sun lux monitoring and remote-control capabilities, encouraging a smart and responsive solar energy system.",
    ],
    baths: 3,
    area: 120,
    images: [
      {
        src: "/images/projects/project1/projectImage.jpg",
      },
      {
        src: "/images/projects/project1/image-2.jpg",
      },
      {
        src: "/images/projects/project1/image-3.jpg",
      },
      {
        src: "/images/projects/project1/image-4.png",
      },
    ],
  },

  {
    name: "IoT Enabled Livestock Monitoring And Management System",
    slug: "2",
    details:
      "The intention of this research is to establish a platform or livestock monitoring and management system. The  IOT  framework  provides  IOT  solutions  in  a  wide range  of  domains and applications in  farming,  livestock, and agricultural front.  The technology stack  is based  on the  Internet  of  Things  (IOT)  with  relevant  sensors available to  determine the dairy monitoring system to be placed on the  animal. This document provides Use Cases (UC) of the domain, and performs evaluations in different conditions  which  are  close  to  real-time  scenarios  and operational  ones.  With  the  IOT  stack,  with  appropriate sensors  for  determining geographical  boundaries, assets, interoperability,  re-usability  and  functionality,  the technical  use-case  is  described  in  terms  of entity/informational  model,  deployment  view,  functional view, business process hierarchy. This document provides detailed analysis of the flow of data and its interactions.",
    primaryObjectives: [
      "Easy tracking of grazing animals to identify their grazing patterns and prevent loss.",
      "Keen monitoring of the health and vitality of livestock, enabling farmers to quickly treat animals and prevent the spread of illness or disease in real-time.",
      "TPreventing the loss of new calves and optimizing breeding practices while monitoring the readiness for mating.",
    ],
    baths: 3,
    area: 120,
    images: [
      {
        src: "/images/projects/project2/projectImage.jpg",
      },
      {
        src: "/images/projects/project2/image-2.jpg",
      },
      {
        src: "/images/projects/project2/image-3.jpg",
      },
      {
        src: "/images/projects/project2/image-4.jpg",
      },
    ],
  },
];
