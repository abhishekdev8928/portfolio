import Navbar from "./components/Navbar";
import SkillSection from "./components/SkillSection";
import Avatar from "./components/ui/Avatar";
import { AVATAR_LIST_CONFIG } from "./utils/constant";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import ConnectSection from "./components/ConnectSection";
import FooterSection from "./components/FooterSection";
import { Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectCarousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-wrapper",
        start: "30% bottom",
        end: "60% bottom",
        // markers:true,
        scrub: 1.2,
      },
    });

    tl.to(".showecase-img", {
      bottom: 30,
      duration: 1,
      width:"100%",
      ease: "linear",
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* hero section */}
      <section className="relative  ">
        <div className="   w-full pb-[100px] ">
          <div className="h-full pt-[200px] ">
            <div className="hero-content mx-auto mb-8  flex flex-col items-center w-full max-w-6xl">
              <div>Pratham Mhavale · UX Designer · Visual Designer</div>
              <h1 className="tagline leading-none mt-2  text-center font-primary tracking-[-0.02em] text-[64px] font-normal">
                Creating thoughtful designs that <br /> make digital products
                work better.
              </h1>

              <div className="flex gap-2 items-center mt-6">
                <div className="flex px-4 ">
                  <Avatar {...AVATAR_LIST_CONFIG} />
                </div>

                <button className="py-4 px-6 rounded-full bg-[#2D2D2D] flex gap-2.5 items-center">
                  <span className="font-secondary  text-white font-medium text-[16px] leading-none tracking-normal">
                    Connect with me
                  </span>
                  <Mail size="24" color="#fff" />
                </button>
              </div>
            </div>

            <div
              className="
    showecase-img
    z-10
    
    
  left-1/2
  -translate-x-1/2
   

    absolute
  
    w-[50%]

   flex justify-center

   
    
  "
            >
              <img src="/project.png" alt="" className="w-full w-[800px] " />
            </div>
          </div>
        </div>

        <div className=" min-h-[80vh] md:min-h-[1250px]  header-wrapper w-full">
          <div className="max-w-5xl space-y-4 text-center  mx-auto">
            <h2 className="dm-heading-md">TravelBuddy Web</h2>
            <p className="font-secondary text-[#2D2D2D] text-[16px] leading-[1.2] tracking-normal">
              A responsive website for discovering curated travel itineraries.{" "}
              <br /> Designed to simplify trip planning with clear visuals and
              smart filters.
            </p>

            <div className="chips flex justify-center gap-2 ">
              <div className="w-fit border border-[#383838] rounded-full  font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
                UX Design
              </div>

              <div className="w-fit border border-[#383838] rounded-full  font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
                UX Design
              </div>

              <div className="w-fit border border-[#383838] rounded-full  font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
                UX Design
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section pt-12 flex flex-col pb-12 gap-12 px-10 max-w-(-w-8xl) w-full ">
        <div className="project-layout-two relative">
          <div className="max-w-5xl space-y-4 text-center  mx-auto">
            <h2 className="dm-heading-md">TravelBuddy Web</h2>
            <p className="font-secondary text-[#2D2D2D] text-[16px] leading-[1.2] tracking-normal">
              A responsive website for discovering curated travel itineraries.{" "}
              <br /> Designed to simplify trip planning with clear visuals and
              smart filters.
            </p>

            <div className="chips flex justify-center gap-2 ">
              <div className="w-fit border border-[#383838] rounded-full  font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
                UX Design
              </div>

              <div className="w-fit border border-[#383838] rounded-full  font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
                UX Design
              </div>

              <div className="w-fit border border-[#383838] rounded-full  font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
                UX Design
              </div>
            </div>
          </div>

          <div className="w-full mt-4 hover-div h-[600px] rounded-sm bg-stone-200">
            <div className="size-[20px] -translate-x-1/2 -translate-y-1/2  fixed z-[99] circle flex justify-center items-center bg-black rounded-full">
              <span className="font-secondary text-white leading-[1.2] tracking-normal font-medium text-[20px] "></span>
            </div>
          </div>
        </div>
      </section>

      <ProjectSection />

      <SkillSection />
      <IntroSection />

      <ProcessSection />

      <WorkSection />

      <ConnectSection />

      <FooterSection />
    </>
  );
};

export default App;
