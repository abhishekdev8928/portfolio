import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessRow = ({ number, title, desc, img, delay }) => {
  return (
    <div
      className="flex justify-between border-b border-[#CECECE]"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={delay}
      data-aos-easing="ease-out-cubic"
      data-aos-offset="140"
      data-aos-mirror="true"   // ✅ reverse on scroll up
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
          alt=""
          className="w-[420px] rounded-t-lg h-full object-cover"
        />

        {/* Text */}
        <div className="space-y-4">
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
};

const ProcessSection = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      duration: 800,
      offset: 140,
    });
  }, []);

  return (
    <div id="workflow" className="bg-[#FAFAFA] py-[96px] px-10">
      <div className="space-y-10">
        {/* Section Title */}
        <div
          className="border-b border-[#D9D9D9] h-[40px]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h4 className="font-primary text-black text-lg lg:text-2xl">
            Project Flow
          </h4>
        </div>

        {/* Rows */}
        <div className="flex flex-col space-y-12">
          <ProcessRow
            number="01"
            title="Research & Discovery"
            desc="Before designing, I gather context, identify challenges, and clarify what the product needs to solve."
            img="/process/research.webp"
            delay={0}
          />
          <ProcessRow
            number="02"
            title="Brainstorm & Ideation"
            desc="Exploring multiple directions, concepts, and approaches before narrowing down."
            img="/process/brainstorm.webp"
            delay={120}
          />
          <ProcessRow
            number="03"
            title="Sketch & Wireframe"
            desc="Low-fidelity sketches and wireframes to validate structure and flow."
            img="/process/sketching.webp"
            delay={240}
          />
          <ProcessRow
            number="04"
            title="Hi-fi Design"
            desc="Pixel-perfect visuals focused on clarity, usability, and aesthetics."
            img="/process/wireframe.webp"
            delay={360}
          />
          <ProcessRow
            number="05"
            title="Feedback & Iteration"
            desc="Refining designs based on feedback and usability insights."
           img="/process/feedback.webp"
            delay={480}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
