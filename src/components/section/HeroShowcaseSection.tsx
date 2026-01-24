import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_SHOWCASE_PROJECTS_CONFIG } from "@/utils/constant.ts";

gsap.registerPlugin(ScrollTrigger);

const HeroShowcaseSection = () => {
  useGSAP(() => {
    /* ---------------- FIRST CARD (UNCHANGED LOGIC) ---------------- */
    const firstCard = document.querySelector(".project-layout.first-card");
    if (firstCard) {
      const image = firstCard.querySelector(".move-down");
      const content = firstCard.querySelector(".project-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: firstCard,
          start: "top 40%",
          end: "top 30%",
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        image,
        { y: -300, scale: 0.8 },
        { y: 0, scale: 1, ease: "none" }
      ).to(
        content,
        { opacity: 1, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      );
    }

    /* ---------------- OTHER CARDS (UNCHANGED) ---------------- */
    const cards = gsap.utils.toArray(
      ".project-layout:not(.first-card)"
    );

    cards.forEach((card) => {
      const content = card.querySelector(".project-content");
      const image = card.querySelector(".move-down");

      if (!content || !image) return;

      gsap.from([content, image], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });

    /* ---------------- MOUSE HOVER EFFECT (ONLY ADDITION) ---------------- */
    const imageWrappers = gsap.utils.toArray(".move-down");

    imageWrappers.forEach((wrapper) => {
      const circle = wrapper.querySelector(".hover-circle");

      if (!circle) return;

      const xTo = gsap.quickTo(circle, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(circle, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      wrapper.addEventListener("mouseenter", () => {
        gsap.to(circle, {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "power3.out",
        });
      });

      wrapper.addEventListener("mousemove", (e) => {
        const bounds = wrapper.getBoundingClientRect();
        xTo(e.clientX - bounds.left);
        yTo(e.clientY - bounds.top);
      });

      wrapper.addEventListener("mouseleave", () => {
        gsap.to(circle, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power3.inOut",
        });
      });

    
    });
  }, []);

  return (
    <section
      id="project"
      className="hero-showcase-wrapper  mx-auto project-section max-w-8xl px-20 py-24 w-full flex flex-col gap-[96px]"
    >
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

          {/* IMAGE (STYLE UNCHANGED) */}
          <div
            className={`mx-auto shadow-2xl rounded-2xl overflow-hidden move-down will-change-transform ${
              index === 0 ? "relative z-10 first-img" : "w-full"
            }`}
            style={{ transformOrigin: "center top", position: "relative", cursor: "none" }}
          >
            <img
              src={project.heroImageSrc}
              className="w-full block"
              alt={project.imageAlt}
            />

            {/* HOVER CIRCLE (ABSOLUTE OVERLAY) */}
           <a
  href={project.prototypeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="hover-circle font-primary font-medium text-[20px] leading-[100%] tracking-[0%]"
  onClick={(e) => e.stopPropagation()} // 🔥 important
>
  View More
</a>

          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroShowcaseSection;
