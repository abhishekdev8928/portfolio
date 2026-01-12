import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  label: string;
  className?: string;
}

const baseBtnClass =
  "cursor-pointer justify-center rounded-full flex gap-2 items-center border border-black " +
  "shadow-[3px_4px_0px_0px_#2D2D2D] " +
  "transition-all duration-150 ease-out " +
  "hover:translate-x-[3px] hover:translate-y-[4px] hover:shadow-none";

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button className={`${baseBtnClass} ${className ?? ""}`}>
      <span className="font-secondary text-[#2D2D2D] leading-none tracking-normal text-[16px] font-medium">
        {label}
      </span>
      <ArrowUpRight size={20} />
    </button>
  );
};

export default Button;
