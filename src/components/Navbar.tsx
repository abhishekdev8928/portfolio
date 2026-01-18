
import Button from "./ui/Button";

const Navbar = () => {
  return (
  
    <div className="flex navbar-wrapper justify-center">
      <div className="py-4 max-w-8xl w-full flex items-center px-10">
      
      <div className="flex-1  flex justify-start">
        <a className="font-primary font-medium text-2xl tracking-tight" href="/">
          pratham
        </a>
      </div>

      {/* Center section - will always be centered */}
      <div className="flex social-link items-center  gap-10">
        {NAVLINK_CONFIG.map((item, index) => (
          <a
          
            key={index}
            href={item.url || "#"}
            className="font-secondary text-lg font-normal tracking-tight text-dark hover:text-gray-700 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

   
      <div className="flex-1  flex justify-end">

        <Button label=" Connect" className="min-w-[129px] py-3.5 pl-5" />



       
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;

const NAVLINK_CONFIG = [
  {
    id: 1,
    label: "projects",
    url: "",
  },
  {
    id: 2,
    label: "about",
    url: "",
  },
  {
    id: 3,
    label: "workflow",
    url: "",
  },
];