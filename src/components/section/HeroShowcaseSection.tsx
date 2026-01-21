import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { HERO_SHOWCASE_PROJECTS_CONFIG } from "@/utils/constant.ts";

gsap.registerPlugin(ScrollTrigger);

const HeroShowcaseSection = () => {
  // AOS init (for all cards except first)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  // GSAP ONLY for first card
  useGSAP(() => {
    const firstCard = document.querySelector(".project-layout.first-card");
    if (!firstCard) return;

    const image = firstCard.querySelector(".move-down");
    const content = firstCard.querySelector(".project-content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstCard,
        start: "top 40%",
        end: "top 30%",
        scrub: 3,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    // First image animation
    tl.fromTo(
      image,
      {
        y: -300,
        scale: 0.8,
      },
      {
        y: 0,
        scale: 1,
        ease: "none",
      }
    );

    // First content animation
    tl.to(
      content,
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, []);

  return (
    <section id="project" className="hero-showcase-wrapper mx-auto project-section max-w-8xl px-20 py-24 w-full flex flex-col gap-[96px]">
      {HERO_SHOWCASE_PROJECTS_CONFIG.map((project, index) => (
        <div
          key={project.id}
          className={`project-layout relative space-y-10 rounded-3xl ${
            index === 0 ? "first-card" : ""
          }`}
        >
          {/* CONTENT */}
          <div
            className={`project-content space-y-4 text-center mx-auto ${
              index === 0 ? "opacity-0" : ""
            }`}
            {...(index !== 0 && {
              "data-aos": "fade-up",
            })}
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
            className={`mx-auto shadow-2xl rounded-2xl overflow-hidden move-down will-change-transform ${
              index === 0 ? "relative z-10 first-img" : "w-full"
            }`}
            style={{ transformOrigin: "center top" }}
            {...(index !== 0 && {
              "data-aos": "fade-up",
              "data-aos-delay": "150",
            })}
          >
            <img
              src={project.heroImageSrc}
              className="w-full block"
              alt={project.imageAlt}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroShowcaseSection;
