import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const IntroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
 const ctx = gsap.context(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 60%",
      end: "50% top",
      scrub: 3,
      // markers:true
    },
  });

  const split = new SplitText(titleRef.current, { type: "words" });

  // Intro text
  tl.from(split.words, {
    y: 30,
    opacity: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: "power2.out",
  });

  // Image
  tl.from(
    ".section-content img",
    {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=2"
  );

  // Left card container
  tl.from(
    ".about-content-left",
    {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "+=0.1"
  );

 
  tl.from(
    ".about-content-left > div",
    {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.4,
      ease: "power3.out",
    },
    "-=0.3"
  );

  // Right text
  tl.from(
    ".about-content-right p",
    {
      y: 15,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.4"
  );

  // Social icons (actual smooth stagger)
  tl.from(
    ".social-links",
    {
      y: 20,
      opacity: 0,
      stagger: 0.12,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.4"
  );
}, sectionRef);


    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="w-full">
      <div className="section-wrapper max-w-8xl mx-auto space-y-8 lg:space-y-12">
        {/* Section Header */}
        <div className="section-name space-y-3">
          <h4 className="font-primary font-normal text-black text-lg sm:text-xl lg:text-2xl capitalize">
            About
          </h4>
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* Main Content */}
        <div className="section-content flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[500px]">
            <img
              className="w-full h-auto object-contain"
              src="/section/Illustration-unboxing.png"
              alt="Illustration"
            />
          </div>

          {/* Text Content */}
          <div className="w-full max-w-3xl space-y-8 lg:space-y-14">
            {/* Intro Text */}
            <h4
              ref={titleRef}
              className="text-[#1E1E1E] font-primary font-light text-base sm:text-lg md:text-xl lg:text-[40px] leading-[1.3] tracking-[0.02em]"
            >
              Hello there! My name is Pratham Mhavale. I am a UI/UX Designer
              based in Mumbai, creating thoughtful and user-centric designs.
              Besides designing digital products, I enjoy sketching,
              photography, and exploring other creative pursuits that fuel my
              creativity.
            </h4>

            {/* Info Card */}
            <div className="about-content-wrapper flex justify-between flex-col lg:flex-row gap-6 w-full">
              {/* Left Card */}
              <div className="about-content-left max-w-[400px] space-y-6 rounded-lg p-4 sm:p-6 w-full lg:w-2/3 border border-[#B0B0B0]">
                <div className="space-y-2.5">
                  <p className="font-secondary text-[#777777] text-sm capitalize">
                    Location
                  </p>
                  <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                    Mumbai, India
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                  <div className="space-y-2.5">
                    <p className="font-secondary text-[#777777] text-sm capitalize">
                      Position
                    </p>
                    <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                      UI/UX Designer
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <p className="font-secondary text-[#777777] text-sm capitalize">
                      Current Company
                    </p>
                    <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                      Diigiihost Pvt Ltd
                    </p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="font-secondary text-[#777777] text-sm capitalize">
                    Education
                  </p>
                  <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                    BSc Computer Science
                  </p>
                </div>
                <div className="space-y-2.5">
                  <p className="font-secondary text-[#777777] text-sm capitalize">
                    Email
                  </p>
                  <p className="text-[#1E1E1E] font-primary text-base sm:text-lg break-all">
                    prathammhavale38@gmail.com
                  </p>
                </div>
              </div>

              {/* Right Tags */}
              <div className="about-content-right  space-y-4 w-full  max-w-[200px] lg:mt-auto ">
                <p className="text-[#5C5C5C] w-fit  font-secondary font-medium text-sm sm:text-base">
                  Me, Art, Photography
                </p>
              <div className="flex items-center w-fit">
  <div className="flex social-links gap-2 group">

     <a href="https://www.instagram.com/prathammhavale/" target="__blank" className="relative group/icon">
      <img className="size-[50px] rounded-full" src="/social-icon/me.jpg" />
      <span className="tooltip">Me</span>
    </a>

    <a href="https://www.instagram.com/victorblade07/" target="__blank" className="relative group/icon -ml-6 group-hover:ml-0 ">
      <img className="size-[50px] rounded-full" src="/social-icon/victor-blade.jpg" />
      <span className="tooltip">art</span>
    </a>

   

    <a href="https://www.instagram.com/whateverisee00/" target="__blank"  className="relative group/icon -ml-6 group-hover:ml-0  ">
      <img className="size-[50px] rounded-full" src="/social-icon/whatever.jpg" />
      <span className="tooltip">Photography
</span>
    </a>

  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
