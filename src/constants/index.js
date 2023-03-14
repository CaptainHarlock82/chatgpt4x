import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Roadmap",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI MetaHuman Virtual Assistant APP",
    icon: web,
  },
  {
    title: "Integrated Defi Platform",
    icon: mobile,
  },
  {
    title: "XR Compatible",
    icon: backend,
  },
  {
    title: "AI Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Research and Development",
    company_name: "Phase 1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Conduct market research to identify customer pain points and market opportunities",
      "Develop a detailed roadmap for product development and release",
      "Build a team of talented individuals with expertise in crypto, blockchain, and software development",
      "Conduct initial testing of the blockchain infrastructure and refine as needed",
    ],
  },
  {
    title: "Minimum Viable Product (MVP) Release",
    company_name: "Phase 2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Jun 2023",
    points: [
      "Release a minimum viable product that includes basic functionality such as Photorealistic Metahuman Virtual Assistant APP",
      "Gather feedback from early adopters and use it to improve the product",
      "Add new XR features to the product",
      "Conduct thorough testing to ensure that new features are stable and reliable",
    ],
  },
  {
    title: "Platform Expansion",
    company_name: "Phase 3",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2023 - Sep 2023",
    points: [
      "Expand the product to include support for decentralized finance (DeFi) features such as lending, borrowing, and staking",
      "Integrate with other DeFi platforms to provide users with more opportunities to earn and transact with their cryptocurrencies",
      "Explore opportunities for partnerships with other companies in the crypto industry",
    ],
  },
  {
    title: "Scaling and Optimization",
    company_name: "Phase 4",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Okt 2023 - Dec 2023",
    points: [
      "Scale the platform to handle larger user volumes and higher transaction throughput",
      "Optimize the platform for maximum performance and uptime",
      "Continuously monitor and improve the platform's security and privacy measures",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "This project's photorealistic metahuman AI assistant offers a highly responsive and cutting-edge solution in the virtual AI assistant crypto industry.",
    name: "Don Prescott",
    designation: "Analyst",
    company: "LA Capital",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    testimonial:
      "Their integrated DeFi platform, combined with the AI assistant app, provides a seamless and intuitive way to access and manage cryptocurrency assets while leveraging AI technology.",
    name: "Julie Mckinney",
    designation: "Strategist",
    company: "Dice",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
    "Their XR compatibility takes it one step further, providing an immersive and interactive experience that combines the physical and digital worlds, offering endless possibilities.",
    name: "Cassandra Mccoy",
    designation: "CTO",
    company: "422 Enterprises",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const projects = [
  {
    name: "MetaHuman",
    description:
      "Our photorealistic metahuman AI assistant is an innovative solution that combines advanced AI technology with cutting-edge graphics to create a virtual assistant that is both functional and aesthetically pleasing. With its ability to understand natural language, process information, and display human-like facial expressions, our metahuman AI assistant provides an engaging and intuitive user experience. Whether you need help with everyday tasks or just want a friendly conversation partner, our AI assistant is always at your service.",
    tags: [
      {
        name: "Photorealistic",
        color: "blue-text-gradient",
      },
      {
        name: "AI Assistant",
        color: "green-text-gradient",
      },
      {
        name: "APP",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Defi Platform",
    description:
      "Our integrated DeFi platform offers a comprehensive suite of decentralized finance solutions in one place. With features such as lending, borrowing, staking, and more, our platform provides users with a seamless and intuitive way to access and manage their cryptocurrency assets. Our platform is built on top of the blockchain, ensuring that transactions are secure and transparent, and that users have full control over their funds. Our integrated DeFi platform has everything you need to take your cryptocurrency experience to the next level.",
    tags: [
      {
        name: "Defi",
        color: "blue-text-gradient",
      },
      {
        name: "AI Tools",
        color: "green-text-gradient",
      },
      {
        name: "Full-Stack",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "XR Compatible",
    description:
      "Our XR compatible platform is designed to provide an immersive and interactive experience that combines the physical and digital worlds. Using extended reality (XR) technology, our platform offers users a seamless way to access and engage with digital content in a real-world setting. Our XR platform is compatible with a range of devices, including VR headsets, AR glasses, and mobile devices, making it accessible to a wide audience. Whether you're looking to explore a new city, attend a virtual event, or simply immerse yourself in a new world.",
    tags: [
      {
        name: "XR",
        color: "blue-text-gradient",
      },
      {
        name: "Virtual World",
        color: "green-text-gradient",
      },
      {
        name: "Beyond",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
