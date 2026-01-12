// cardConfig.js
export const SKILL_SECTION_CARDS = [
  {
    id: 1,
    title: "Figma",
    imageSrc: "/path-to-image/dashboard-preview.png",
    alt: "Figma dashboard preview",
  },
  {
    id: 2,
    title: "Prototyping",
    imageSrc: "/path-to-image/dashboard-preview.png",
    alt: "Prototyping dashboard preview",
  },
  {
    id: 3,
    title: "Wireframing",
    imageSrc: "/path-to-image/dashboard-preview.png",
    alt: "Wireframing dashboard preview",
  },
  {
    id: 4,
    title: "Sketching",
    imageSrc: "/path-to-image/dashboard-preview.png",
    alt: "Sketching dashboard preview",
  },
];

export const AVATAR_LIST_CONFIG = {
  imageSrcList: [
    {
      id: 1,
      imageSrc:
        "https://i.pinimg.com/736x/09/6b/d0/096bd010a1e34162baa8ae850fd82b36.jpg",
    },
    {
      id: 2,
      imageSrc:
        "https://i.pinimg.com/736x/6c/48/68/6c4868428c71c47e55c2f0b1b4924d01.jpg",
    },
    {
      id: 3,
      imageSrc:
        "https://i.pinimg.com/1200x/09/44/32/0944324f4dc3b6159533e6750c3625d2.jpg",
    },
    {
      id: 4,
      imageSrc:
        "https://i.pinimg.com/1200x/1a/1b/31/1a1b31d38516e7b14f721485b538df87.jpg",
    },
  ],
};


export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "Before designing, I gather context, identify challenges, and clarify what the product needs to solve.",
  },
  {
    number: "02",
    title: "Brainstorm & Ideation",
    description:
      "Before designing, I gather context, identify challenges, and clarify what the product needs to solve.",
  },
  {
    number: "03",
    title: "Sketch & Wireframe",
    description:
      "Before designing, I gather context, identify challenges, and clarify what the product needs to solve.",
  },
  {
    number: "04",
    title: "Hi-fi Design",
    description:
      "Before designing, I gather context, identify challenges, and clarify what the product needs to solve.",
  },
  {
    number: "05",
    title: "Feedback & Iteration",
    description:
      "Before designing, I gather context, identify challenges, and clarify what the product needs to solve.",
  },
];



export interface Project {
  id: number;
  title: string;
  image: string;
}



export const PROJECTS_CAROUSEL_CONFIG: Project[] = [
  {
    id: 1,
    title: "Project Name",
    image: "/carousel/carousel-top-one.png",
  },
  {
    id: 2,
    title: "TravelBuddy Web",
    image: "/carousel/carousel-top-two.png",
  },
  {
    id: 3,
    title: "TravelBuddy Web",
    image: "/carousel/carousel-top-three.png",
  },
  {
    id: 4,
    title: "TravelBuddy Web",
    image: "/carousel/carousel-top-four.png",
  },
  {
    id: 5,
    title: "TravelBuddy Web",
    image: "/carousel/carousel-top-two.png",
  },
  {
    id: 6,
    title: "TravelBuddy Web",
    image: "/carousel/carousel-top-one.png",
  },
];





export const HERO_SHOWCASE_PROJECTS_CONFIG = [
  {
    id: "1",
    title: "Rivora",
    subtitle:
      "A mobile app concept that helps shoppers find products faster in-store.",
    description:
      "Focused on improving navigation, search, and checkout flow.",

    tags: [
      { id: "ux", label: "UX Design" },
      { id: "mobile", label: "Mobile App" },
      { id: "navigation", label: "Navigation" },
    ],

    heroImageSrc: "/project/project-image-01.webp",
    imageAlt: "The Bridge of Cadio, New Zealand",
  },

  {
    id: "2",
    title: "Canva Cloud",
    subtitle:
      "A mobile app concept that helps shoppers find products faster in-store.",
    description:
      " Focused on improving navigation, search, and checkout flow.",

    tags: [
      { id: "ui", label: "UX Design" },
      { id: "web", label: "Mobile App" },
      {id:"navigation",label:"Navigation"}
    ],

    heroImageSrc: "/project/project-image-02.webp",
    imageAlt: "The Bridge of Cadio, New Zealand",

  },
];
