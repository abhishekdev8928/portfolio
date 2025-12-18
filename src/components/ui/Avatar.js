"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Avatar = function (_a) {
    var imageSrcList = _a.imageSrcList;
    return <>

  {imageSrcList.map(function (item) { return <div className={" ".concat(item.id !== 1 && "-ml-2", "  size-10  rounded-full overflow-hidden bg-[rgba(217, 217, 217, 1)]")}>
        <img className="w-full h-full object-cover " src={item.imageSrc} alt=""/>
    </div>; })}
  
  </>;
};
exports.default = Avatar;
