import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./ui/Button";
import { MailIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { yPercent: 0 },
        {
          yPercent: -100,
          ease: "power2.out",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              if (self.direction === 1) {
                // scrolling down
                gsap.to(navRef.current, { yPercent: -100, duration: 0.3 });
              } else {
                // scrolling up
                gsap.to(navRef.current, { yPercent: 0, duration: 0.3 });
              }
            },
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50 bg-white"
    >
      <div className="flex navbar-wrapper justify-center">
        <div className="py-4 max-w-8xl w-full flex items-center px-10">
          
          <div className="flex-1 flex justify-start">
            <a
              className="font-primary font-medium text-2xl tracking-tight"
              href="/"
            >
              pratham
            </a>
          </div>

          <div className="flex social-link items-center gap-10">
            {NAVLINK_CONFIG.map((item) => (
              <a
                key={item.id}
                href={item.url || "#"}
                className="font-secondary cursor-pointer text-lg tracking-tight text-dark hover:text-gray-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-end">
            <a
  href="mailto:prathammhavale38@gmail.com"
  className="
    cursor-pointer justify-center rounded-full flex gap-2  items-center
    border border-black
    shadow-[3px_4px_0px_0px_#2D2D2D]
    transition-all duration-150 ease-out
    hover:translate-x-[3px] hover:translate-y-[4px] px-5 py-4 hover:shadow-none
  "
>
  <span className="font-secondary text-[#2D2D2D] leading-none tracking-normal text-[16px] font-medium">
   Connect
  </span>
 
   <MailIcon size="20" />
 
</a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NAVLINK_CONFIG = [
  { id: 1, label: "projects", url: "#project" },
  { id: 2, label: "about", url: "#about" },
  { id: 3, label: "workflow", url: "#workflow" },
];
