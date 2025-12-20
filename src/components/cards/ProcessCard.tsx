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
      <div className="card flex justify-between items-start  overflow-hidden">
          <h2 className="font-primary text-[72px] text-[#8F8F8F]">{number}</h2>

          <div className="w-1/2 flex flex-col justify-between shrink-0 space-y-6">
            <div className="max-w-lg space-y-4">
              <h3 className="font-primary text-[36px] leading-none">
                {title}
              </h3>
              <p className="font-secondary text-[#686868] leading-[1.2]">
               {description}
              </p>
            </div>

            <div className="img-div w-full  overflow-hidden h-[300px] bg-stone-200">
              
            </div>

          </div>
        </div>
  );
};

export default ProcessCard;