import Avatar from "./ui/Avatar";
import { AVATAR_LIST_CONFIG } from "../utils/constant";

const IntroSection = () => {
  return (
    <section className="w-full ">
      <div className="section-wrapper space-y-8 lg:space-y-12">
        {/* Section Header */}
        <div className="section-name space-y-3">
          <h4 className="font-primary font-normal text-black text-lg sm:text-xl lg:text-2xl capitalize">
            About
          </h4>
          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* Main Content */}
        <div className="section-content flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          {/* Image */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-[500px]">
            <img
              className="w-full h-auto object-contain"
              src="/section/Illustration-unboxing.png"
              alt="Illustration"
            />
          </div>

          {/* Text Content */}
          <div className="w-full max-w-3xl space-y-8 lg:space-y-14">
            {/* Intro Text */}
            <h4 className="text-[#1E1E1E] font-primary font-light text-base sm:text-lg md:text-xl lg:text-[40px] leading-[1.3] tracking-[0.02em]">
              Hello there! My name is Pratham Mhavale. I am a UI/UX Designer
              based in Mumbai, creating thoughtful and user-centric designs.
              Besides designing digital products, I enjoy sketching,
              photography, and exploring other creative pursuits that fuel my
              creativity.
            </h4>

            {/* Info Card */}
            <div className="about-content-wrapper flex justify-between flex-col lg:flex-row gap-6 w-full">
              {/* Left Card */}
              <div className="about-content-left max-w-[400px] space-y-6 rounded-lg p-4 sm:p-6 w-full lg:w-2/3 border border-[#B0B0B0]">
                {/* Location */}
                <div className="space-y-2.5">
                  <p className="font-secondary text-[#777777] text-sm capitalize">
                    Location
                  </p>
                  <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                    Mumbai, India
                  </p>
                </div>

                {/* Position + Company */}
                <div className="flex flex-col  sm:flex-row sm:justify-between gap-6">
                  <div className="space-y-2.5">
                    <p className="font-secondary text-[#777777] text-sm capitalize">
                      Position
                    </p>
                    <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                      UI/UX Designer
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <p className="font-secondary text-[#777777] text-sm capitalize">
                      Current Company
                    </p>
                    <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                      Diigiihost Pvt Ltd
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2.5">
                  <p className="font-secondary text-[#777777] text-sm capitalize">
                    Education
                  </p>
                  <p className="text-[#1E1E1E] font-primary text-base sm:text-lg">
                    BSc Computer Science
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2.5">
                  <p className="font-secondary text-[#777777] text-sm capitalize">
                    Email
                  </p>
                  <p className="text-[#1E1E1E] font-primary text-base sm:text-lg break-all">
                    prathammhavale38@gmail.com
                  </p>
                </div>
              </div>

              {/* Right Tags */}
              <div className="about-content-right space-y-4 lg:mt-auto w-fit">
  <div className="flex items-center">
    <div className="flex gap-2 group relative">

      <img
        className="size-12 transition-transform duration-300 ease-out"
        src="/social-icon/twitter.png"
        alt="Twitter"
      />

      <img
        className="size-12 -translate-x-6 group-hover:translate-x-0 transition-transform duration-300 ease-out"
        src="/social-icon/instagram.png"
        alt="Instagram"
      />

      <img
        className="size-12 -translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out"
        src="/social-icon/facebook.png"
        alt="Facebook"
      />

      <img
        className="size-12 -translate-x-18 group-hover:translate-x-0 transition-transform duration-300 ease-out"
        src="/social-icon/linkedin.png"
        alt="LinkedIn"
      />
    </div>
  </div>

  <p className="text-[#5C5C5C] font-secondary font-medium text-sm sm:text-base">
    Me, Art, Photography
  </p>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
