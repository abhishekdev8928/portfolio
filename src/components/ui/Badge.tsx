import React from "react";


interface BadgeProps {
  label: string;
};

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <div className="w-fit border border-[#383838] rounded-full font-secondary py-2 px-4 leading-none tracking-normal font-normal text-xs">
      {label}
    </div>
  );
};

export default Badge;
