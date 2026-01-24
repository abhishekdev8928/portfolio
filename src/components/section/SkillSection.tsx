import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    title: "UI/UX Design",
    items: ["User-Centered Design", "Problem-Solving", "Usability-Focused"],
  },
  {
    title: "Visual Design",
    items: [
      "Typography",
      "Hierarchy",
      "Color Theory",
      "Whitespacing",
      "Alignment",
      "Responsiveness",
    ],
  },
  {
    title: "UX Writing",
    items: [
      "Clear & Concise Copy",
      "Form Helper Text",
      "Action-Oriented CTAs",
      "Error & Empty States",
      "Content Clarity & Tone",
    ],
  },
];

const designPrinciplesData = [
  {
    title: "Information Architecture",
    items: [
      "Content Hierarchy",
      "Sitemap",
      "Menu & Label Naming",
      "Page Organization",
      "Grouping",
    ],
  },
  {
    title: "WCAG",
    items: [
      "Color Contrast Compliance",
      "Readable Text",
      "Inclusive Content Design",
      "Accessible CTA & Forms",
      "Clarity Over Decoration",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Canva", "ChatGPT", "Gemini", "Framer", "Spline"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-block", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-black w-full section-wrapper space-y-10 pt-[120px]"
    >
      <div className="max-w-8xl mx-auto space-y-10">
        {/* HEADER */}
        <div>
          <h4 className="text-white text-[24px]">Skills</h4>
          <div className="h-[0.5px] bg-white/60 w-full" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-wrap justify-end gap-20">
          {/* LEFT */}
          <div className="w-full md:w-[400px] space-y-12">
            {skillsData.map((block, i) => (
              <div key={i} className="skill-block space-y-4">
                <h2 className="text-white font-primary text-[40px] leading-[1.2] font-medium">
                  {block.title}
                </h2>
                <div className="flex font-secondary flex-wrap gap-2.5 font-medium text-[#B3B3B3] text-[20px]">
                  {block.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        relative pr-4
                        before:content-['|']
                        before:absolute before:right-0 before:top-1/2
                        before:-translate-y-1/2 before:text-[#6f6f6f]
                        last:before:hidden last:pr-0
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-[466px] space-y-12">
            {designPrinciplesData.map((block, i) => (
              <div key={i} className="skill-block space-y-4">
                <h2 className="text-white font-primary text-[40px] font-medium leading-[1.2]">
                  {block.title}
                </h2>
                <div className="flex font-secondary flex-wrap font-medium gap-2.5 text-[#B3B3B3] text-[20px]">
                  {block.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        relative pr-4
                        before:content-['|']
                        before:absolute before:right-0 before:top-1/2
                        before:-translate-y-1/2 before:text-[#6f6f6f]
                        last:before:hidden last:pr-0
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
