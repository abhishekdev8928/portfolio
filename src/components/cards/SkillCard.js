"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SkillCard = function (_a) {
    var title = _a.title, imageSrc = _a.imageSrc, alt = _a.alt;
    return (<div className="skill-card relative p-6 overflow-hidden w-[300px] border border-[rgba(143, 143, 143, 1)] h-[364px] rounded-sm">
          <h4 className="leading-none tracking-normal  font-primary font-medium text-2xl">
            {title}
          </h4>

          <img className="absolute w-lg bottom-0 left-[30%]" src="/dashboard.png" alt={alt}/>
        </div>);
};
exports.default = SkillCard;
