

const FooterSection = () => {
  return (
    <section className="relative">
      <div className="pt-[64px] px-10 pb-[24px]  h-[350px] flex flex-col mx-auto bg-[#1E1E1E]  max-w-(--w-8xl)">
        <div className="flex  space-y-2 justify-between items-start ">
          <h4 className="font-primary font-light text-[24px] leading-none text-center text-white">pratham mhavale</h4>

          <div className="social-links p-2 flex gap-2.5 flex-col">

            <a className="font-secondary font-medium text-white text-xl leading-none" href="#!">Linkedin</a>

                       

                                    <a className="font-secondary font-medium text-white text-xl leading-none" href="#!">Instagram</a>

                                                <a className="font-secondary font-medium text-white text-xl leading-none" href="#!">Discord</a>
                                                            <a className="font-secondary font-medium text-white text-xl leading-none" href="">X</a>

          </div>
        </div>


        <div className="font-primary font-light  mt-auto text-white text-[14px] leading-[100%] text-center">
          @copyright2026 prathammhavale
        </div>
        
      </div>
    </section>
  );
};

export default FooterSection;
