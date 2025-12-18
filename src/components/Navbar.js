"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var Navbar = function () {
    return (<div className=" py-4 flex  justify-between items-center max-w-(--w-8xl) px-10">
      <a className="font-primary  font-medium text-2xl tracking-tight" href="/">
        pratham
      </a>

      <div className="flex items-center gap-10">

        {NAVLINK_CONFIG.map(function (item, index) { return (<a key={index} href={item.url || "#"} // fallback if url is empty
         className="font-secondary text-sm font-normal tracking-tight text-dark hover:text-gray-700 transition-colors">
          {item.label}
        </a>); })}
      </div>


      <div className="nav-icon-group flex items-center gap-3">

        <div className="w-[52px] h-12 bg-(--color-dark) flex justify-center rounded-xl items-center">

            <lucide_react_1.Mail size={24} className="text-white"/>
        </div>

        <div className="w-[52px] h-12 bg-(--color-dark) flex justify-center rounded-xl items-center">
        <lucide_react_1.Linkedin size={24} className="text-white"/>

        </div>



      </div>
    </div>);
};
exports.default = Navbar;
var NAVLINK_CONFIG = [
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
