


interface SkillCardProps {
    id:number
    title:string
    imageSrc:string
    alt:string
}

const SkillCard = ({title , alt}:SkillCardProps) => {
  return (

      <div className="skill-card relative p-6 overflow-hidden w-[300px] border border-[rgba(143, 143, 143, 1)] h-[364px] rounded-sm">
          <h4 className="leading-none tracking-normal  font-primary font-medium text-2xl">
            {title}
          </h4>

          <img
            className="absolute w-lg bottom-0 left-[30%]"
            src="/dashboard.png"
            alt={alt}
          />
        </div>
  )
}

export default SkillCard