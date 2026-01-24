import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Type for each process row
interface ProcessRowProps {
  number: string;
  title: string;
  desc: string;
  img: string;
}

const ProcessRow = React.forwardRef<HTMLDivElement, ProcessRowProps>(
  ({ number, title, desc, img }, ref) => {
    return (
      <div
        ref={ref}
        className="flex justify-between border-b border-[#CECECE] opacity-0 translate-y-10"
      >
        {/* Number */}
        <h2 className="font-primary text-[#8F8F8F] font-light text-[48px] leading-none">
          {number}
        </h2>

        {/* Content */}
        <div className="max-w-[944px] h-[300px] w-full flex gap-6">
          {/* Image */}
          <img
            src={img}
            alt={title}
            className="w-[420px] rounded-t-lg h-full object-cover"
          />

          {/* Text */}
          <div className="space-y-4 flex-1">
            <h2 className="font-primary font-normal text-[40px] leading-none">
              {title}
            </h2>

            <p className="font-secondary text-[#686868] text-[18px] leading-[1.2] tracking-[0.02em]">
              {desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

const ProcessSection: React.FC = () => {
  const rowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    rowsRef.current.forEach((row, i) => {
      if (!row) return;
      gsap.fromTo(
        row,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.15, // stagger effect
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse", // ✅ works both directions
          },
        }
      );
    });
  }, []);

  const processData: ProcessRowProps[] = [
    {
      number: "01",
      title: "Research & Discovery",
      desc: "Before designing, I gather context, identify challenges, and clarify what the product needs to solve.",
      img: "/process/research.webp",
    },
    {
      number: "02",
      title: "Brainstorm & Ideation",
      desc: "Exploring multiple directions, concepts, and approaches before narrowing down.",
      img: "/process/brainstorm.webp",
    },
    {
      number: "03",
      title: "Sketch & Wireframe",
      desc: "Low-fidelity sketches and wireframes to validate structure and flow.",
      img: "/process/sketching.webp",
    },
    {
      number: "04",
      title: "Hi-fi Design",
      desc: "Pixel-perfect visuals focused on clarity, usability, and aesthetics.",
      img: "/process/wireframe.webp",
    },
    {
      number: "05",
      title: "Feedback & Iteration",
      desc: "Refining designs based on feedback and usability insights.",
      img: "/process/feedback.webp",
    },
  ];

  return (
    <section className="bg-[#FAFAFA]">
      <div id="workflow" className="max-w-8xl mx-auto py-24 px-10">
        <div className="space-y-10">
          {/* Section Title */}
          <h4 className="font-primary text-black text-lg lg:text-2xl border-b border-[#D9D9D9] pb-2">
            Project Flow
          </h4>

          {/* Rows */}
          <div className="flex flex-col space-y-12">
            {processData.map((item, i) => (
              <ProcessRow
                key={i}
                ref={(el) => {
                  if (el) rowsRef.current[i] = el;
                }}
                number={item.number}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
