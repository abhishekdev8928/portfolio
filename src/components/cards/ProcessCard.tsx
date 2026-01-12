// ProcessCard.tsx
import React from "react";

export interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  imageHeight?: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  number,
  title,
  description,

}) => {
  return (
      <div className="card flex     justify-between items-start  overflow-hidden">
          <h2 className="font-primary leading-none text-[72px] text-[#8F8F8F]">{number}</h2>

          <div className="max-w-[944px] w-full flex gap-6  justify-between shrink-0 pb-6">

           <div className="img-div rounded-lg max-w-[420px] w-full overflow-hidden h-[300px] bg-stone-200">

            <img src="/image.png" className="w-full " alt="" />
              
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="font-primary text-[36px] leading-none">
                {title}
              </h3>
              <p className="font-secondary text-[#686868] leading-[1.2]">
               {description}
              </p>
            </div>

           

          </div>
        </div>
  );
};

export default ProcessCard;