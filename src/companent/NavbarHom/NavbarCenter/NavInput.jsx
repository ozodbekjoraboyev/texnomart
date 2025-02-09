import React from "react";
import Search02Icon from "../../../assets/ikonkalar/Search";

function NavInput() {
  return (
    <div className="flex items-center border-2 border-amber-500 rounded w-[700px] p-2 relative">
      <Search02Icon className="w-5 h-5 text-gray-500" />
      <input
        className="pl-2 outline-none w-full"
        type="text"
        placeholder="Qidirish..."
      />
    </div>
  );
}

export default NavInput;
