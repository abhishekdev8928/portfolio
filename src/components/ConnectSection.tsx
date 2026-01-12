
import Button from "./ui/Button";

const ConnectSection = () => {
  return (
    <section className="section-wrapper h-[500px]">


      <div className="max-w-(--w-8xl) h-full   flex justify-center items-center ">
      <div className="connect-section-wrapper space-y-6">
        <h2 className="font-primary font-normal text-center text-black text-[48px] leading-none tracking-normal">
         Let’s Connect, Collaborate & <br />
Create Together. 
        </h2>

        <div className="flex items-center justify-center ">
        

         <Button label={"prathammhavale38@gmail.com"} className="bg-[#FF6E00] px-8 py-4" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default ConnectSection;
