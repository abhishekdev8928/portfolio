import Navbar from "./components/Navbar";

import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import ConnectSection from "./components/ConnectSection";
import FooterSection from "./components/FooterSection";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IntroSection from "./components/IntroSection";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeroShowcaseSection from "./components/section/HeroShowcaseSection";
import Button from "./components/ui/Button";

import ProjectsCarousel from "./components/section/ProjectsCarousel";
import { PROJECTS_CAROUSEL_CONFIG } from "./utils/constant";
import SkillsSection from "./components/section/SkillSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-showcase-wrapper ",
        start: "25% 90%",
        end: "30% 90%",
        // markers:true,
        scrub: 3,
      },
    });

    tl.to(".move-down", {
      marginTop: 0,
      duration: 3,
      ease: "linear",
      width:"100%"
    });

    tl.to(".project-content", {
      opacity: 1,
    });
  }, []);

  return (
    <>



   {/* <div className="w-full h-16 mt-[-100vh] fixed bottom-0 left-0 bg-red-900 "></div> */}



      <div className="max-w-8xl bg-white relative z-[10] mx-auto">

        <Navbar />

     
      <section >
        <div className="hero-wrapper  w-full pt-[100px] pb-6 h-auto relative px-10">
          <div className="   w-full">
          <div className="hero-content mx-auto mb-8  flex flex-col items-center w-full max-w-[976px]">
            <h1 className="tagline leading-none mt-2  text-center font-primary tracking-[-0.02em] text-[81px] font-normal">
              Creating thoughtful designs that make digital products work
              better.
            </h1>

            <div className="flex gap-4 items-center mt-6">
            <div className="flex gap-2 group">
  <img
    className="-ml-6 size-12 transition-all duration-300 ease-out group-hover:ml-0"
    src="/social-icon/twitter.png"
    alt="Twitter"
  />

  <img
    className="-ml-6 size-12 transition-all duration-300 ease-out group-hover:ml-0"
    src="/social-icon/instagram.png"
    alt="Instagram"
  />

  <img
    className="-ml-6 size-12 transition-all duration-300 ease-out group-hover:ml-0"
    src="/social-icon/facebook.png"
    alt="Facebook"
  />

  <img
    className="-ml-6 size-12 transition-all duration-300 ease-out group-hover:ml-0"
    src="/social-icon/linkedin.png"
    alt="LinkedIn"
  />
</div>


              <Button
                label={"Let’s Connect "}
                className="bg-[#FF6E00]  py-4 pl-[32px] pr-6"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

<section className="hero-showcase-wrapper ">
  <HeroShowcaseSection />
</section>


     


  <section>

    <div className=" pb-40 text-black">
 <ProjectsCarousel  projects={PROJECTS_CAROUSEL_CONFIG} />

</div>
  </section>

   
      <SkillsSection />

     
   
      <IntroSection />

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
    items: [
      "User-Centered Design",
      "Problem-Solving <br /> Usability-Focused",
    ],
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
    items: [
      "Figma",
      "Canva",
      "ChatGPT",
      "Gemini",
      "Framer",
      "Spline",
    ],
  },
];
