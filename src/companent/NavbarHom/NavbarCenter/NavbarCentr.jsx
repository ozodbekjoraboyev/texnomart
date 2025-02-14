import React from "react";
import NavbarTehnamark from "./NavbarTehnamark";
import NavInput from "./NavInput";
import NavUser from "./NavUser";

function NavbarCentr({
  savatcha,
  setSavatcha,
  sevimlilar,
  setSevimlilar,
  showModal,
  setShowModal,
  toggleOPen,
}) {
  return (
    <div className="  items-center bg-[#F7F7F7] p-5">
      <div className=" container m-auto flex justify-between items-center ">
        <NavbarTehnamark />
        <NavInput />
        <NavUser
          showModal={showModal}
          setShowModal={setShowModal}
          toggleOPen={toggleOPen}
          savatcha={savatcha}
          setSavatcha={setSavatcha}
          setSevimlilar={setSevimlilar}
        />
      </div>
    </div>
  );
}

export default NavbarCentr;
