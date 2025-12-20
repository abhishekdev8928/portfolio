// ProcessSection.tsx
import React, {  useEffect } from "react";
import ProcessCard from "./cards/ProcessCard";
import { PROCESS_STEPS } from "../../src/utils/constant";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger-point",
      start: "top top",
      end: "bottom bottom", // increase scroll range to fit stagger animations
      scrub: 1.5,
    },
  });

  // Step 1: Animate image divs sequentially
  tl.to(".img-div", {
    height: 0,
    stagger: 0.4,       // each element animates one by one
    ease:"linear"
  },"a");

  // Step 2: Animate card borders after img-div animations
  tl.to(".card", {
    borderBottomColor: "#e5e5e5",
    stagger: 0.2,
    ease:"linear"
  }, "a"); // start after previous animation
}, []);







  return (
    <section className="process-container ]py-24">
      <div className=" py-[96px] px-[40px]">

      <h2 className="font-primary text-[48px] leading-none">
        Here’s how I shape every project.
      </h2>

        <div className="h-[800vh] trigger-point  relative">
          <div className="sticky  top-0 left-0 w-full  space-y-[40px] mt-[64px]">
            {PROCESS_STEPS.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                imageHeight={300}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
