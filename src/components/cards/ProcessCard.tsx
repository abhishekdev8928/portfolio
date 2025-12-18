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
  imageHeight = 300,
}) => {
  return (
    <div className="w-full process-card  flex justify-between gap-8">
      {/* Number */}
      <h4 className="font-primary text-[#8F8F8F] font-light text-[72px] leading-none">
        {number}
      </h4>

      {/* Content */}
      <div className="w-[800px] shrink-0 space-y-6">
        <div className="space-y-4">
          <h5 className="font-primary leading-none text-[36px]">{title}</h5>
          <p className="font-secondary text-[#686868] leading-[1.2] text-[16px]">
            {description}
          </p>
        </div>


        <div
          className="w-full process-card-img h-0 bg-stone-200 rounded-[8px]"
          
          
        />
      </div>
    </div>
  );
};

export default ProcessCard;