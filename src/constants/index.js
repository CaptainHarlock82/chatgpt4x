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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
