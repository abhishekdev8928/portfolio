import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      offset: 140,
    });
  }, []);

  return (
    <section className="bg-black section-wrapper space-y-10">
      {/* HEADER */}
      <div
        className="ml-auto space-y-4"
        data-aos="fade-up"
      >
        <h4 className="text-white text-[24px]">Skills</h4>
        <div className="h-[0.5px] bg-white/60 w-full" />
      </div>

      {/* CONTENT */}
      <div className="ml-auto flex flex-wrap justify-end gap-20">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-[400px] space-y-12">
          {skillsData.map((block, i) => (
            <div
              key={i}
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay={i * 120}   // ✅ one animation per block
            >
              <h2 className="text-white text-[40px] leading-[1.2] font-medium">
                {block.title}
              </h2>

              <div className="flex flex-wrap gap-2.5 text-[#B3B3B3] text-[20px] leading-[28px]">
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

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-[466px] space-y-12">
          {designPrinciplesData.map((block, i) => (
            <div
              key={i}
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <h2 className="text-white text-[40px] leading-[1.2]">
                {block.title}
              </h2>

              <div className="flex flex-wrap gap-2.5 text-[#B3B3B3] text-[20px] leading-[28px]">
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
    </section>
  );
}


