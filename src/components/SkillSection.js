"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var constant_1 = require("../utils/constant");
var SkillCard_1 = require("./cards/SkillCard");
var SkillSection = function () {
    return (<div className="max-w-(--w-8xl)  mx-auto py-24 px-10">
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
        {constant_1.SKILL_SECTION_CARDS.map(function (item) { return (<SkillCard_1.default {...item}/>); })}
      </div>
    </div>);
};
exports.default = SkillSection;
