import React from "react";
import { SKILL_SECTION_CARDS } from "../utils/constant";
import SkillCard from "./cards/SkillCard";

const SkillSection = () => {
  return (
    <div className="max-w-(--w-8xl)  mx-auto py-24 px-10">
      {/* skill section top */}
      <div className="w-full flex justify-between  items-end">
        <h3 className="max-w-[392px]  font-normal capitalize text-[48px] leading-none tracking-normal font-primary">
          skills that shape how I design
        </h3>

        <p className="max-w-[356px] tracking-normal font-secondary font-normal leading-none text-[16px]">
          A collection of skills that help me design clear, engaging, and
          functional products.
        </p>
      </div>

      {/* skill section bottom */}

      <div className="skill-card-wrapper flex gap-12 mt-12">
        {SKILL_SECTION_CARDS.map((item) => (
          <SkillCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
