import { ArrowUp, MoveUp } from "lucide-react";
import React from "react";

const FooterSection = () => {
  return (
    <section className="relative">
      <div className="pt-24   h-[364px] mx-auto bg-[#1E1E1E]  max-w-(--w-8xl)">
        <div className="flex px-10 space-y-2 justify-between items-center ">
          <h4 className="primary-heading text-white">See you Soon</h4>

          <button className="flex items-center gap-2.5">
            <span className="font-secondary font-medium text-white text-[20px] leading-none tracking-normal">
              Back to top
            </span>
            <MoveUp size="24" color="#fff" />
          </button>
        </div>

        <div className="w-full   absolute bottom-0">
          <img src="/heading.svg" className="mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
