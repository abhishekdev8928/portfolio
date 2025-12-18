"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Avatar_1 = require("./ui/Avatar");
var constant_1 = require("../utils/constant");
var IntroSection = function () {
    return (<div className="max-w-(--w-8xl) h-[800px] flex justify-center items-center mx-auto bg-stone-800">
      <div className="max-w-5xl">
        <h3 className="text-white text-center font-primary font-normal text-[48px] leading-none tracking-normal">
          A Computer Science graduate with a <br /> creative mindset, I’m
          Pratham Mhavale, <br /> creating thoughtful and visually engaging{" "}
          <br /> digital experiences.
        </h3>

        <p className="font-secondary mt-4  text-center text-(--secondary-text) font-normal text-[16px] leading-normal tracking-normal">
          Outside of design, I enjoy drawing, exploring new tools.
        </p>

        <div className="flex justify-center mt-6">
          <Avatar_1.default {...constant_1.AVATAR_LIST_CONFIG}/>
        </div>
      </div>
    </div>);
};
exports.default = IntroSection;
