import React from "react";
import Menu01Icon from "../../../assets/ikonkalar/Katalog";

function NavbarTehnamark() {
  return (
    <div className="flex justify-between gap-5 ">
      <div>
        <img
          className=" cursor-pointer"
          src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
          alt=""
        />
      </div>
      <div>
        <button className="  flex items-center gap-2 bg-amber-400 px-5 py-2 rounded font-semibold cursor-pointer ">
          <Menu01Icon />
          Katalog
        </button>
      </div>
    </div>
  );
}

export default NavbarTehnamark;
