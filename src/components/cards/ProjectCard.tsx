interface ProjectCardProps {
  title: string;
  image: string;
}

const ProjectCard = ({ title, image }: ProjectCardProps) => {
  return (
    <div className="w-[364px] p-4 rounded-lg bg-[#F2F2F2]">
      <div className="group relative rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="font-primary text-white text-[24px] font-medium tracking-normal">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
