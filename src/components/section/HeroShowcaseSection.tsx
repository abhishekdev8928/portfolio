import React from "react";
import { HERO_SHOWCASE_PROJECTS_CONFIG } from "@/utils/constant.ts";

const HeroShowcaseSection = () => {
  return (
    <section className="project-section max-w-8xl gap-[96px] px-20 flex flex-col py-24 w-full">

      {HERO_SHOWCASE_PROJECTS_CONFIG.map((project, index) => (
        <div
          key={project.id}
          className="project-layout  rounded-3xl relative space-y-10"
        >
          {/* CONTENT */}
          <div
            className={`space-y-4 text-center mx-auto ${
              index === 0 ? "project-content opacity-0" : ""
            }`}
          >
            <h2 className="font-primary font-medium text-black text-[40px] leading-[100%]">
              {project.title}
            </h2>

            <p className="font-secondary text-[#2D2D2D] text-[16px] leading-[1.2]">
              {project.subtitle && (
                <>
                  {project.subtitle}
                  <br />
                </>
              )}
              {project.description}
            </p>

            {/* TAGS */}
            <div className="chips flex justify-center gap-2">
              {project.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="w-fit border border-[#383838] rounded-full font-secondary py-2 px-4 text-xs"
                >
                  {tag.label}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div
            className={`mx-auto shadow-2xl rounded-2xl overflow-hidden ${
              index === 0
                ? "w-[60%] move-down mt-[-300px]"
                : "w-full"
            }`}
          >
            <img
              src={ project.heroImageSrc}
              alt={project.imageAlt}
            />
          </div>
        </div>
      ))}

    </section>
  );
};

export default HeroShowcaseSection;
