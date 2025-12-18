"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Avatar_1 = require("./ui/Avatar");
var constant_1 = require("../utils/constant");
var lucide_react_1 = require("lucide-react");
var ConnectSection = function () {
    return (<section className="section-wrapper h-[500px]">


      <div className="max-w-(--w-8xl) h-full   flex justify-center items-center ">
      <div className="connect-section-wrapper space-y-6">
        <h2 className="font-primary font-normal text-black text-[48px] leading-none tracking-normal">
          Connect. Collaborate. Create.
        </h2>

        <div className="flex items-center justify-center gap-2.5">
          <div className="flex">
            <Avatar_1.default {...constant_1.AVATAR_LIST_CONFIG}/>
          </div>

          <button className="py-4 rounded-full px-6 flex items-center gap-2.5 border border-[#383838]">
            <span className="font-secondary font-medium text-[16px] leading-none tracking-normal">
              {" "}
              prathammhavale38@gmail.com
            </span>

            <lucide_react_1.ArrowUpRight size="24"/>
          </button>
        </div>
      </div>
    </div>
    </section>);
};
exports.default = ConnectSection;
