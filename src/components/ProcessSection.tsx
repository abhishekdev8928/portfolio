// ProcessSection.tsx
import React, { useRef, useEffect } from "react";
import ProcessCard from "./cards/ProcessCard";
import { PROCESS_STEPS } from "../../src/utils/constant";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".process-card");
    
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Animate each card individually with its own trigger
      cards.forEach((card) => {
        const img = card.querySelector(".process-card-img") as HTMLElement;
        const finalHeight = img?.getAttribute("data-final-height") || "300";

        if (!img) return;

        // Image height animation
        gsap.fromTo(
          img,
          { 
            height: 300,
            opacity: 0 
          },
          {
            height: `${finalHeight}px`,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
              // markers: true, 
            },
          }
        );


        gsap.fromTo(
          card,
          { 
            opacity: 0,
            y: 100 
          },
          {
            opacity: 1,
            y: 0,
            
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
              
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="process-container overflow-hidden py-24">
      <div className="max-w-(--w-8xl) mx-auto px-10">
        <h3 className="font-primary font-normal text-[48px] leading-none">
          Here's how I shape every project.
        </h3>

        <div className="mt-[46px]">
          <div className="process-list space-y-20">
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