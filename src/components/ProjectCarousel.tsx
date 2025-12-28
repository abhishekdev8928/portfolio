
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Swiper v12 – only valid CSS import
import "swiper/swiper-bundle.css";

const ProjectSection = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={20}
        className="w-full"
      >
        <SwiperSlide style={{ width: "364px" }}>
          <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
            

            
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "364px" }}>
            <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
           
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "364px" }}>
            <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">

          </div>
        </SwiperSlide>

                <SwiperSlide style={{ width: "364px" }}>
                    <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
          
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "364px" }}>
            <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
            
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "364px" }}>
            <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">

          </div>
        </SwiperSlide>

                <SwiperSlide style={{ width: "364px" }}>
                    <h2 className="font-primary mb-4 font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
            
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "364px" }}>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
<h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "364px" }}>
          <div className="w-[364px] h-[272px] p-4 rounded-lg bg-stone-200">
             <h2 className="font-primary font-normal text-[24px] leading-none tracking-normal">Project Name</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSection;
