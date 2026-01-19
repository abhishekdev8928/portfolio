import { ArrowUp } from "lucide-react";


const FooterSection = () => {

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative">
      <div className="pt-[64px] px-10 pb-[24px]   flex flex-col mx-auto bg-[#1E1E1E]  max-w-(--w-8xl)">
        <div className="flex  space-y-2 justify-between items-start ">
          <h4 className="font-primary font-light text-[16px] leading-none text-center text-white">pratham mhavale</h4>

          <div className="social-links p-2 flex gap-2.5 flex-col">

            <a target="_blank" className="font-secondary font-medium text-white text-[16px] leading-none" href="https://www.linkedin.com/in/pratham-mhavale/
">Linkedin</a>

                       

                                    <a target="_blank" className="font-secondary font-medium text-white text-[16px] leading-none" href="https://www.linkedin.com/in/pratham-mhavale/
">Instagram</a>

                                                <a className="font-secondary font-medium text-white text-[16px] leading-none" href="#!">Discord</a>
                                                            <a target="_blank" className="font-secondary font-medium text-white text-[16px] leading-none" href="https://x.com/mhavalepratham
">X</a>

          </div>
        </div>


        <div className="absolute flex space-y-4 flex-col top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">

          <p className="font-primary  text-white font-normal text-[18px] leading-[1.2] tracking-[0%] text-center
">Even if you are on the right track, <br /> 
you will get run over if you just sit there</p>
<small className="text-[#5C5C5C] font-primary font-normal text-[14px] leading-[1.2] tracking-[0%] text-right
">
 -will rogers
</small>
        </div>


        <div className="flex justify-between pt-26" >
          <div className="font-primary font-light  mt-auto text-white text-[14px] leading-[100%] text-center">
          @copyright2026 prathammhavale
        </div>


        <div onClick={scrollToTop} className="font-primary gap-2 cursor-pointer   flex items-center text-white font-normal text-[14px] leading-none tracking-[0%] text-center
">
          back to top
          <ArrowUp size={20} />
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default FooterSection;
