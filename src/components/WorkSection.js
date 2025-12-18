"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WorkSection;
var react_1 = require("react");
var react_2 = require("swiper/react");
var modules_1 = require("swiper/modules");
// Swiper v12 CSS
require("swiper/swiper-bundle.css");
function WorkSection() {
    return (<div className="max-w-(--w-8xl) space-y-14 bg-[#161616] mx-auto pt-24 pb-10">
      <h2 className="font-primary pl-10 capitalize text-white font-normal text-[48px] leading-none tracking-normal">
        Each work Has Made me Better
      </h2>

      <react_2.Swiper modules={[modules_1.FreeMode]} freeMode={true} grabCursor={true} slidesPerView="auto" spaceBetween={20} className="w-full">
        <react_2.SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </react_2.SwiperSlide>

        <react_2.SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </react_2.SwiperSlide>

        <react_2.SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </react_2.SwiperSlide>

        <react_2.SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </react_2.SwiperSlide>

        <react_2.SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </react_2.SwiperSlide>

        <react_2.SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </react_2.SwiperSlide>
      </react_2.Swiper>
    </div>);
}
