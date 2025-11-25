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
  weavers,
  esolz,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  dst,
  threejs,
  destSite,
  maplessSite,
  shopifySite,
  movieSite,
  creativeSite,
  defenceSite,
  plasticSite,
  loaderImage
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Shopify Developer",
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
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Html Developer",
    company_name: "Weavers Web",
    icon: weavers,
    iconBg: "#fff",
    date: "Sept 2022 - Jan 2023",
    points: [
      "Developed responsive web pages using HTML, CSS, and basic JavaScript.",
      "Converted design mockups into clean, semantic code.",
      "Ensured cross-browser compatibility and mobile responsiveness.",
      "Assisted in content updates and theme customization on WordPress.",
    ],
  },
  {
    title: "Php Wordpress Developer",
    company_name: "Esolz Technology",
    icon: esolz,
    iconBg: "#1011a1",
    date: "Jul 2023 - Oct 2024",
    points: [
      "Converted static HTML/CSS templates into fully functional custom WordPress themes.",
      "Integrated dynamic features using PHP, WordPress loops, and template hierarchy.",
      "Created and registered custom menus, widgets, and theme options for client control.",
      "Implemented ACF for flexible content management within the WordPress admin panel.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Delostylestudio Pvt Ltd",
    icon: dst,
    iconBg: "#fff",
    date: "Nov 2024 - Present",
    points: [
      "Developed dynamic and responsive web applications using React.js and modern JavaScript (ES6+).",
      "Built reusable components and managed application state using hooks and context API.",
      "Integrated REST APIs to fetch and display dynamic data within React components.",
      "Converted UI/UX designs into pixel-perfect front-end interfaces using Tailwind CSS and styled-components.",
      "Optimized performance through code-splitting, lazy loading, and efficient rendering techniques."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our services, but Rick proved me wrong.",
    name: "DR. KEITH NEAMAN",
    designation: "Founder, Board-Certified Plastic Surgeon",
    company: "neamanplasticsurgery",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I'm truly impressed with the creativity and professionalism of the team. They built a service-based website that perfectly reflects our vision and leaves a lasting impact!",
    name: "Karen Adams",
    designation: "Managing Partner | Phenix Salon Suites",
    company: "Phenix Salon Suites",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Huge thanks to OF Esolz and their Team for crafting a unique, impactful website that truly captures our brand and vision!",
    name: "Samuel Rodríguez",
    designation: "CEO OF First Defense AI",
    company: "First Defense AI",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Plastic Surgery Site",
    description:
      "A responsive plastic surgery website featuring service listings for all body procedures, online appointment booking, direct contact options, image gallery, and SEO optimization.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "custom theme",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: plasticSite,
    source_code_link: "https://neamanplasticsurgery.com/",
  },
  
  
  {
    name: "Mapless Marketing",
    description:
      "With Mapless Marketing, we help Phenix Salon Suites businesses attract top stylists, fill their suites, and grow. From lead generation to localized campaigns. Let us handle the strategy so you can focus on running your business.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "custom theme",
        color: "green-text-gradient",
      },
      {
        name: "css, js",
        color: "pink-text-gradient",
      },
    ],
    image: maplessSite,
    source_code_link: "https://maplessmarketing.com/",
  },
  {
    name: "Shopify Buseness Site",
    description:
      "At Common Thread we are Sustainable from Farm to Bed. Focusing on Recycled water usage, no harmful dying or washing chemicals, lower energy consumption, regenerative farming and social wellbeing of our workers.",
    tags: [
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "customze js/css",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shopifySite,
    source_code_link: "https://commonthread.au/",
  },
  {
    name: "Digital Services Site",
    description:
      "At Creative WebGlance, we don't just create digital solutions; we craft experiences that drive success. Our expertise spans Web Development, Mobile App Development, Cloud Computing, UI/UX, Custom Software Development, CRM, ERP Software Development, Devops, API Development, and Maintenance and Support.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php- custom-theme",
        color: "green-text-gradient",
      },
      {
        name: "css, js",
        color: "pink-text-gradient",
      },
    ],
    image: creativeSite,
    source_code_link: "https://www.creativewebglance.com/",
  },
  {
    name: "First Defense AI",
    description:
      "We specialize in the intersection of data compliance, risk management and cybersecurity technology, using the latest techniques to provide effective data security solutions using cutting edge Artificial Intelligence.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php- custom-theme",
        color: "green-text-gradient",
      },
      {
        name: "css, js",
        color: "pink-text-gradient",
      },
    ],
    image: defenceSite,
    source_code_link: "https://www.firstdefense.ai/",
  },
  {
    name: "Movie Search Site",
    description:
      "MovieZone is your ultimate hub for movies and entertainment. Whether you’re searching for trending titles, hidden gems, or box office blockbusters — we’ve got it all in one place. Our mission is to keep movie lovers up-to-date and inspired.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieSite,
    source_code_link: "https://vegaamovies-zone.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
