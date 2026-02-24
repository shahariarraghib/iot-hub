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
    details: "15 s aurora ave, miami",
    primaryObjectives: [
      "In order to maximize solar energy output from the Sun.",
      "Using Hysteresis technique systems to prevent rapid switching between states near a boundary or threshold.",
      "To design a real-time temperature, current, voltage and sun lux monitoring and remote-control capabilities, encouraging a smart and responsive solar energy system.",
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
