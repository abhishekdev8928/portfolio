"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ProcessSection.tsx
var react_1 = require("react");
var ProcessCard_1 = require("./cards/ProcessCard");
var constant_1 = require("../../src/utils/constant");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.default.registerPlugin(ScrollTrigger_1.default);
var ProcessSection = function () {
    var sectionRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var cards = gsap_1.default.utils.toArray(".process-card");
        if (cards.length === 0)
            return;
        var ctx = gsap_1.default.context(function () {
            // Animate each card individually with its own trigger
            cards.forEach(function (card, index) {
                var img = card.querySelector(".process-card-img");
                var finalHeight = (img === null || img === void 0 ? void 0 : img.getAttribute("data-final-height")) || "300";
                if (!img)
                    return;
                // Image height animation
                gsap_1.default.fromTo(img, {
                    height: 300,
                    opacity: 0
                }, {
                    height: "".concat(finalHeight, "px"),
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: 1,
                        // markers: true, 
                    },
                });
                gsap_1.default.fromTo(card, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                    },
                });
            });
        }, sectionRef);
        return function () {
            ctx.revert();
            ScrollTrigger_1.default.getAll().forEach(function (trigger) { return trigger.kill(); });
        };
    }, []);
    return (<section ref={sectionRef} className="process-container overflow-hidden py-24">
      <div className="max-w-(--w-8xl) mx-auto px-10">
        <h3 className="font-primary font-normal text-[48px] leading-none">
          Here's how I shape every project.
        </h3>

        <div className="mt-[46px]">
          <div className="process-list space-y-20">
            {constant_1.PROCESS_STEPS.map(function (step) { return (<ProcessCard_1.default key={step.number} number={step.number} title={step.title} description={step.description} imageHeight={300}/>); })}
          </div>
        </div>
      </div>
    </section>);
};
exports.default = ProcessSection;
