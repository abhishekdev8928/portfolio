import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MailIcon } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNavClick = (e, targetId) => {
  e.preventDefault();

  const target = document.querySelector(targetId);
  if (!target) return;

  const y =
    target.getBoundingClientRect().top + window.pageYOffset;

  gsap.to(window, {
    duration: 1,
    scrollTo: y,
    ease: "power3.inOut",
  });
};




  /* ---------------- AIRITHM SCROLL LOGIC ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        // scroll down → hide
        setIsVisible(false);
      } else {
        // scroll up → show
        setIsVisible(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- GSAP VISIBILITY ANIMATION ---------------- */
  useEffect(() => {
    gsap.to(navRef.current, {
      yPercent: isVisible ? 0 : -100,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [isVisible]);

  return (
    <header
      ref={navRef}
      className="
        fixed top-0 left-0 w-full z-50
        bg-white
      "
    >
      <div className="flex navbar-wrapper justify-center">
        <div className="py-4 max-w-8xl w-full flex items-center px-10">
          {/* LOGO */}
          <div className="flex-1 flex justify-start">
            <a
              href="/"
              className="font-primary font-medium text-2xl tracking-tight text-black"
            >
              pratham
            </a>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-10">
            {NAVLINK_CONFIG.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.url)}
                className="
                  font-secondary
                  text-lg
                  tracking-tight
                  text-black
                  hover:text-gray-700
                  transition-colors
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex-1 flex justify-end">
            <a
              href="mailto:prathammhavale38@gmail.com"
              className="
                cursor-pointer justify-center rounded-full flex gap-2 items-center
                border border-black
                shadow-[3px_4px_0px_0px_#2D2D2D]
                transition-all duration-150 ease-out
                hover:translate-x-[3px] hover:translate-y-[4px]
                min-w-[137px] h-[48px] pl-5 pr-2 hover:shadow-none
              "
            >
              <span className="font-secondary text-[#2D2D2D] leading-none text-[16px] font-medium">
                Connect
              </span>
              <div className="size-[36px] bg-black shrink-0 rounded-full flex justify-center items-center">
                <MailIcon size={20} color="white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

/* ---------------- CONFIG ---------------- */
const NAVLINK_CONFIG = [
  { id: 1, label: "projects", url: "#project" },
  { id: 2, label: "about", url: "#about" },
  { id: 3, label: "workflow", url: "#workflow" },
];
