import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ConnectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const heroBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading into words
      const split = new SplitText(titleRef.current, { type: "words" });

      // Create a timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub:3,
        },
      });

      // Animate heading words
      tl.from(split.words, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      })
        // Animate button after heading
        .from(
          heroBtnRef.current,
          {
            opacity: 0,
            scale: 0.8,
            ease: "elastic.out(1, 0.5)",
            duration: 1,
          },
          "-=0.2" // overlap slightly with last word animation
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-wrapper h-[500px] flex justify-center items-center"
    >
      <div className="connect-section-wrapper space-y-6 text-center">
        <h2
          ref={titleRef}
          className="font-primary font-normal text-black text-[48px] leading-none tracking-normal"
        >
          Let’s Connect, Collaborate & <br />
          Create Together.
        </h2>

        <div  className="flex justify-center">
          
         <div  ref={heroBtnRef}>

           <button
         
            
            className=" px-8 py-4 bg-[#FF6E00]  pr-6 cursor-pointer justify-center rounded-full flex gap-2 items-center hover:translate-x-[3px] hover:translate-y-[4px] hover:shadow-none transition-all duration-150 ease-out    border border-black shadow-[3px_4px_0px_0px_#2D2D2D]"
          >
            prathammhavale38@gmail.com
            <ArrowUpRight size={20} />
          </button>
         </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
