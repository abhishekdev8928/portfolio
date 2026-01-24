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
    title: "Art NGO Hero",
    image: "/carousel/Hero-ArtNgo.png",
  },
  {
    id: 2,
    title: "SaaS Illustration Studio",
    image: "/carousel/Hero-SaasIllustrationStudio.png",
  },
  {
    id: 3,
    title: "Travel Hotel",
    image: "/carousel/Hero-TravelHotel.png",
  },
  {
    id: 4,
    title: "Product Features",
    image: "/carousel/Product-Features.png",
  },
  {
    id: 5,
    title: "Pricing Screen",
    image: "/carousel/PricingScreen.png",
  },
  {
    id: 6,
    title: "Testimonials",
    image: "/carousel/Testimonial.png",
  },
  {
    id: 7,
    title: "Testimonial Section",
    image: "/carousel/Testimonial_Section.png",
  },
  {
    id: 8,
    title: "Features Layout",
    image: "/carousel/FEatures01.png",
  },
  {
    id: 9,
    title: "Furniture Verticles",
    image: "/carousel/FurnitureVerticles.png",
  },
  {
    id: 10,
    title: "About Carousel One",
    image: "/carousel/about-carousel-one.png",
  },
  {
    id: 11,
    title: "CTA – Designer",
    image: "/carousel/Cta-Designer.png",
  },
  {
    id: 12,
    title: "CTA – Fitness Community",
    image: "/carousel/Cta-FitnessCommunity.png",
  },
  {
    id: 13,
    title: "CTA – Fitness Community v2",
    image: "/carousel/Cta-FitnessCommunity2.png",
  },
  {
    id: 14,
    title: "404 Page",
    image: "/carousel/404Page.png",
  },
  {
    id: 15,
    title: "Creative Concept 10",
    image: "/carousel/10.png",
  },
  {
    id: 16,
    title: "Creative Concept 11",
    image: "/carousel/11.png",
  },
  {
    id: 17,
    title: "Creative Concept 12",
    image: "/carousel/12.png",
  },
];





export const HERO_SHOWCASE_PROJECTS_CONFIG = [
  {
    id: "1",
    title: "MasterCard – Landing Page Concept",
    subtitle:
      "A modern fintech landing page focused on trust, clarity, and conversion.",
    description:
      "Using strong visual hierarchy and clean layouts to communicate features effectively.",

    tags: [
      { id: "ux", label: "UX Design" },
      { id: "hierarchy", label: "Visual Hierarchy" },
      { id: "fintech", label: "Fintech UI" },
      { id: "conversion", label: "Conversion Design" },
    ],

    heroImageSrc: "/project/Mastercard_hero.webp",
    imageAlt: "MasterCard landing page design",

    prototypeUrl:
      "https://www.figma.com/proto/iqRjdYfKmCmtA7gcV51b1W/IceBack-Landing-Page-%E2%80%93-Pratham-Mhavale?node-id=115-1726&scaling=min-zoom&content-scaling=fixed&page-id=2%3A3&starting-point-node-id=115%3A1726",
  },

  {
    id: "2",
    title: "Manipal University – Homepage Redesign",
    subtitle:
      "A redesigned university homepage improving navigation and information clarity.",
    description:
      "Prioritizing accessibility, structured content, and clear calls to action for students and parents.",

    tags: [
      { id: "ux", label: "UX Design" },
      { id: "ia", label: "Information Architecture" },
      { id: "accessibility", label: "Accessibility" },
      { id: "edu", label: "Educational UI" },
    ],

    heroImageSrc: "/project/manipaluni_hero.webp",
    imageAlt: "Manipal University homepage redesign",

    prototypeUrl:
      "https://www.figma.com/proto/O0A7ZelgfwSa8XdBw0v4Jt/ManipalUni_Homepage_Redesign?node-id=23-901&scaling=min-zoom&content-scaling=fixed&page-id=23%3A900&starting-point-node-id=23%3A901",
  },

  {
    id: "3",
    title: "Caffee Website",
    subtitle:
      "A warm, minimal caffee website designed to reflect brand personality.",
    description:
      "Through imagery, typography, and smooth content flow that enhances the digital dining experience.",

    tags: [
      { id: "ui", label: "UI Design" },
      { id: "brand", label: "Brand Identity" },
      { id: "type", label: "Typography" },
      { id: "emotion", label: "Emotional Design" },
    ],

    heroImageSrc: "/project/Caffee-HeroSection.webp",
    imageAlt: "Cafe website design",

    prototypeUrl:
      "https://www.figma.com/proto/bzeVneGr28Hk0I86t3gDXo/Cafe_website_template?node-id=60-177&scaling=min-zoom&content-scaling=fixed&page-id=17%3A86&starting-point-node-id=60%3A177",
  },

  {
    id: "4",
    title: "Trekking Landing Page",
    subtitle:
      "An immersive trekking landing page designed to inspire adventure.",
    description:
      "Using bold visuals, clear sections, and engaging content to guide users toward exploration.",

    tags: [
      { id: "landing", label: "Landing Page Design" },
      { id: "story", label: "Visual Storytelling" },
      { id: "engagement", label: "User Engagement" },
      { id: "ui", label: "UI Design" },
    ],

    heroImageSrc: "/project/trekkingpage_hero.webp",
    imageAlt: "Trekking landing page design",

    prototypeUrl:
      "https://www.figma.com/proto/Ckd3Iij63zRBIC3AQxO54s/Trekking_LandingPage_PrathamMhavale?node-id=2110-145&scaling=min-zoom&content-scaling=fixed&page-id=12%3A3&starting-point-node-id=2110%3A145",
  },

  {
    id: "5",
    title: "Design Studio Website",
    subtitle:
      "A clean and expressive website for a creative design studio.",
    description:
      "Focused on showcasing work, building credibility, and maintaining strong visual consistency throughout.",

    tags: [
      { id: "portfolio", label: "Portfolio Design" },
      { id: "creative", label: "Creative UI" },
      { id: "layout", label: "Layout Design" },
      { id: "consistency", label: "Visual Consistency" },
    ],

    heroImageSrc: "/project/Monochrome_wedesign.webp",
    imageAlt: "Design studio website",

    prototypeUrl:
      "https://www.figma.com/proto/iqcCxyNGEGvEHyRlOdDhJn/Olio_Assignment?node-id=46-442&scaling=min-zoom&content-scaling=fixed&page-id=8%3A552&starting-point-node-id=46%3A442",
  },
];

