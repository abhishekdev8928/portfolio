

import "swiper/swiper-bundle.css";
import ProjectsCarousel from "./section/ProjectsCarousel";
import { PROJECTS_CAROUSEL_CONFIG } from "../utils/constant";

export default function WorkSection() {
  return (
    <div className="w-full space-y-10  bg-[#161616] text-white py-24  ">
      <div className="skills-container-top max-w-8xl mx-auto px-10">
        <h4
          className="font-primary h-10 border-b border-[#D9D9D9]  font-light text-white text-[24px] leading-[100%] tracking-[0%] capitalize
"
        >
          More Work
        </h4>
      </div>

      <div className="space-y-8">


        <ProjectsCarousel direction="left" projects={PROJECTS_CAROUSEL_CONFIG} />

        <ProjectsCarousel direction="right" projects={PROJECTS_CAROUSEL_CONFIG}  />




        
      </div>
    </div>
  );
}
