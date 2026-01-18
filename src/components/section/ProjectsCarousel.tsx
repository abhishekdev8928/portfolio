import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import ProjectCard from "../cards/ProjectCard";
import type { Project } from "@/utils/constant.ts";

interface ProjectsCarouselProps {
  projects: Project[];
  direction?: "left" | "right";
}

const ProjectsCarousel = ({
  projects,
  direction = "left",
}: ProjectsCarouselProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
    >
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop
        slidesPerView="auto"
        spaceBetween={20}
        speed={3000}
        freeMode={{
          enabled: true,
          momentum: false,
          sticky: false,
        }}
        grabCursor
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction === "right",
        }}
        className="continuous-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={`${project.id}-${index}`}
            style={{ width: "auto" }}
          
          >
            <ProjectCard
              title={project.title}
              image={project.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
