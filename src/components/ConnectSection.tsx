import React from "react";
import Avatar from "./ui/Avatar";
import { AVATAR_LIST_CONFIG } from "../utils/constant";
import { ArrowUpRight } from "lucide-react";

const ConnectSection = () => {
  return (
    <section className="section-wrapper h-[500px]">


      <div className="max-w-(--w-8xl) h-full   flex justify-center items-center ">
      <div className="connect-section-wrapper space-y-6">
        <h2 className="font-primary font-normal text-black text-[48px] leading-none tracking-normal">
          Connect. Collaborate. Create.
        </h2>

        <div className="flex items-center justify-center gap-2.5">
          <div className="flex">
            <Avatar {...AVATAR_LIST_CONFIG} />
          </div>

          <button className="py-4 rounded-full px-6 flex items-center gap-2.5 border border-[#383838]">
            <span className="font-secondary font-medium text-[16px] leading-none tracking-normal">
              {" "}
              prathammhavale38@gmail.com
            </span>

            <ArrowUpRight size="24" />
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ConnectSection;
