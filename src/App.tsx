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

import ProjectsCarousel from "./components/section/ProjectsCarousel";
import { PROJECTS_CAROUSEL_CONFIG } from "./utils/constant";
import SkillsSection from "./components/section/SkillSection";

import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import ProcessSection from "./components/ProcessSection";

import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

const App = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroBtnRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

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
        .from(".navbar-wrapper", {
          y: -40,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          split.words,
          {
            y: 80,
            opacity: 0,
            stagger: 0.06,
          },
          "-=0.2",
        )
        // ⛔ UNTOUCHED selector (exactly as you had it)
        .from(
          ".social-links ",
          {
            x: -30,
            opacity: 0,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          heroBtnRef.current,
          {
            opacity: 0,
            scale: 0.8,
            ease: "elastic.out(1, 0.5)",
            duration: 1,
          },
          "-=0.2",
        )
        .from(".first-img", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        });

      return () => {
        split.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <>
      <div className="main-wrapper bg-white relative z-[10] mx-auto">
        <div ref={containerRef}>
          <Navbar />
          


 <section>
            <div className="hero-wrapper w-full max-w-8xl mx-auto pt-[200px] pb-10 h-auto px-10">
              <div className="w-full">
                <div className="hero-content mx-auto mb-8 flex flex-col items-center w-full max-w-[976px]">
                  <h1
                    ref={titleRef}
                    className="tagline leading-none mt-2 text-center font-primary tracking-[-0.02em] text-[64px] font-normal"
                  >
                    Creating thoughtful designs that make digital products work
                    better.
                  </h1>

                  <div className="flex gap-4 items-center mt-6">
                    <div className="flex social-links gap-2 group">
                       <a
                        href="https://x.com/mhavalepratham"
                        target="__blank"
                        className="relative group/icon -ml-6 group-hover:ml-0 "
                      >
                        <img
                          className="size-[50px] rounded-full"
                          src="/social-icon/twitter.png"
                        />
                      </a>
                       <a
                        href="https://www.instagram.com/designsbyprathamm/"
                        target="__blank"
                        className="relative group/icon -ml-6 group-hover:ml-0 "
                      >
                        <img
                          className="size-[50px] rounded-full"
                          src="/social-icon/instagram.png"
                        />
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
                      <a
                        href="https://www.linkedin.com/in/pratham-mhavale/"
                        target="__blank"
                        className="relative group/icon -ml-6 group-hover:ml-0 "
                      >
                        <img
                          className="size-[50px] rounded-full"
                          src="/social-icon/linkedin.png"
                        />
                      </a>

                     
                     

                     
                    </div>

                    <div ref={heroBtnRef}>
                      <a
                        download
                        href="/resume/Pratham_Mhavale_UIUX_Designer_Resume.pdf"
                      >
<button
  className="
w-fit h-[52px]
    flex items-center justify-center gap-[8px]
    bg-[#FF6E00]
    pt-[16px] pr-[8px] pb-[16px] pl-[24px]
    rounded-[100px]
    border border-black
    cursor-pointer
    transition-transform duration-150 ease-out
    hover:translate-x-[3px] hover:translate-y-[4px]
    shadow-[3px_4px_0px_0px_#2D2D2D]
    hover:shadow-none
  "
>
  <span className="whitespace-nowrap font-secondary font-medium text-[16px] leading-[100%] tracking-[0%]
">Let’s Connect</span>
 <div className="size-[40px]  bg-white rounded-full flex justify-center items-center">
   <ArrowUpRight size={20} />
 </div>
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
          <div className=" mx-auto  pb-40 text-black">
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

