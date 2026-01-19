import Navbar from "./components/Navbar";
import WorkSection from "./components/WorkSection";
import ConnectSection from "./components/ConnectSection";
import FooterSection from "./components/FooterSection";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IntroSection from "./components/IntroSection";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeroShowcaseSection from "./components/section/HeroShowcaseSection";
import AOS from "aos";

import ProjectsCarousel from "./components/section/ProjectsCarousel";
import { PROJECTS_CAROUSEL_CONFIG } from "./utils/constant";
import SkillsSection from "./components/section/SkillSection";

import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import ProcessSection from "./components/ProcessSection";

import { ArrowUpRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

gsap.registerPlugin(SplitText);
const App = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroBtnRef = useRef<HTMLButtonElement>(null);

 useGSAP(() => {
  // Split heading into words
  const split = new SplitText(titleRef.current, {
    type: "words",
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8,
    },
  });

  tl
    // Navbar
    .from(".navbar-wrapper", {
      y: -40,
      opacity: 0,
      duration: 0.6,
    })

    // Heading words
    .from(
      split.words,
      {
        y: 80,
        opacity: 0,
        stagger: 0.06,
      },
      "-=0.2"
    )

    // Social icons (cascade)
    .from(
      ".social-links ",
      {
        x: -30,
        opacity: 0,
        stagger: 0.12,
      },
      "-=0.3"
    )

    // Button (elastic pop)
    .from(
      heroBtnRef.current,
      {
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.5)",
        duration: 1,
      },
      "-=0.2"
    )

    .from(".first-img",{
 opacity: 0,       
     
      duration: 0.8,    // animation duration
      ease: "power2.out", 
      stagger: 0.1,     
    })

  return () => {
    split.revert();
  };
}, { scope: containerRef });



  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
        mirror: true,
        duration: 900,
        easing: "ease-out-cubic",
        offset: 150, // 👈 important
        anchorPlacement: "top-bottom",
      });

      AOS.refreshHard(); // 👈 VERY IMPORTANT
    };

    // wait for layout + GSAP
    const timeout = setTimeout(initAOS, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* <div className="w-full h-16 mt-[-100vh] fixed bottom-0 left-0 bg-red-900 "></div> */}

      <div className="max-w-8xl main-wrapper bg-white relative z-[10] mx-auto">
       <div ref={containerRef}>
  <Navbar />

  <section>
    <div className="hero-wrapper w-full pt-[100px] pb-10 h-auto px-10">
      <div className="w-full">
        <div className="hero-content mx-auto mb-8 flex flex-col items-center w-full max-w-[976px]">

          <h1
            ref={titleRef}
            className="tagline leading-none mt-2 text-center font-primary tracking-[-0.02em] text-[64px] font-normal"
          >
            Creating thoughtful designs that make digital products work better.
          </h1>

          <div className="flex gap-4 items-center mt-6">

            
<div className="flex social-links gap-2 group">
 
                <a href="https://www.linkedin.com/in/pratham-mhavale/" target="__blank" className="relative group/icon -ml-6 group-hover:ml-0 ">
      <img className="size-[50px] rounded-full" src="/social-icon/linkedin.png" />
      
    </a>


    <a href="https://www.instagram.com/victorblade07/" target="__blank" className="relative group/icon -ml-6 group-hover:ml-0 ">
      <img className="size-[50px] rounded-full" src="/social-icon/instagram.png" />
      
    </a>

    <a
  href="mailto:prathammhavale38@gmail.com"
  className="relative group/icon -ml-6   group-hover:ml-0"
>
  <img
    className="size-[50px]  rounded-full"
   src="/social-icon/gmail.webp"
    alt="Email"
  />
 
</a>


     <a href="https://www.instagram.com/whateverisee00/" target="__blank" className="relative group/icon -ml-6 group-hover:ml-0 ">
      <img className="size-[50px] rounded-full" src="/social-icon/twitter.png" />
     
    </a>


</div>



           <div ref={heroBtnRef} >
            <a download href="/resume/Pratham_Mhavale_UIUX_Designer_Resume.pdf">
             <button
              
              className="bg-[#FF6E00] py-4 pl-[32px] pr-6 cursor-pointer justify-center rounded-full flex gap-2 items-center hover:translate-x-[3px] hover:translate-y-[4px] transition-all duration-150 ease-out  hover:shadow-none border border-black shadow-[3px_4px_0px_0px_#2D2D2D]"
            >
              Let’s Connect
              <ArrowUpRight size={20} />
            </button>
            </a>
           </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="hero-showcase-wrapper  ">
          <HeroShowcaseSection />
        </section>
</div>


        

        <section>
          <div className=" pb-40 text-black">
            <ProjectsCarousel projects={PROJECTS_CAROUSEL_CONFIG} />
          </div>
        </section>

        <SkillsSection />

        <IntroSection />

        {/* <ProcessSection /> */}

        <ProcessSection />

        <WorkSection />

        <ConnectSection />

        <FooterSection />
      </div>
    </>
  );
};

export default App;

export const skillsData = [
  {
    title: "UI/UX Design",
    items: ["User-Centered Design", "Problem-Solving <br /> Usability-Focused"],
  },
  {
    title: "Visual Design",
    items: [
      "Typography",
      "Hierarchy",
      "Color Theory",
      "Whitespacing",
      "Alignment <br /> Responsiveness",
    ],
  },
  {
    title: "UX Writing",
    items: [
      "Clear & Concise Copy",
      "Form Helper Text",
      "Action-Oriented CTAs <br /> Error & Empty States <br /> Content Clarity & Tone",
    ],
  },
];

export const designPrinciplesData = [
  {
    title: "Information Architecture",
    items: [
      "Content Hierarchy",
      "Sitemap",
      "Menu & Label Naming",
      "Page Organization <br /> Grouping",
    ],
  },
  {
    title: "WCAG",
    items: [
      "Color Contrast Compliance",
      "Readable Text",
      "Readable Text | Inclusive Content Design",
      "Accessible CTA & Forms",
      "Clarity Over Decoration",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Canva", "ChatGPT", "Gemini", "Framer", "Spline"],
  },
];
