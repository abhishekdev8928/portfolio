import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Swiper v12 CSS
import "swiper/swiper-bundle.css";

export default function WorkSection() {
  return (
    <div className="max-w-(--w-8xl) space-y-14 bg-[#161616] mx-auto pt-24 pb-10">
      <h2 className="font-primary pl-10 capitalize text-white font-normal text-[48px] leading-none tracking-normal">
        Each work Has Made me Better
      </h2>

      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={20}
        className="w-full"
      >
        <SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "420px" }}>
          <div className="w-[420px] h-[364px] p-6 rounded-lg bg-stone-200">
            <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
