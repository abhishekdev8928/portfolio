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
    <div className="process-card h-screen flex justify-between items-start">
      <h2 className="font-primary leading-none text-[72px] text-[#8F8F8F]">
        {number}
      </h2>

      <div className="max-w-[944px] w-full flex gap-6 pb-6">
        <div
          className="img-div max-w-[420px] w-full overflow-hidden bg-stone-200 rounded-lg"
          style={{ height: imageHeight }}
        >
          <img src="/image.png" className="w-full h-full object-cover" />
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
