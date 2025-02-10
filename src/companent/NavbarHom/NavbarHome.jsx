import React, { useState } from 'react'
import NavbarLoketion from './NavbarTop/NavbarLoketion'
import NavbarCentr from './NavbarCenter/NavbarCentr'
import NavbarButon from './NavbarBotton/NavbarButon'

function NavbarHome({savatcha,setSavatcha,showModal,setShowModal,toggleOPen}) {

  return (
    <div>
      <NavbarLoketion />
       <NavbarCentr savatcha={savatcha} setSavatcha={setSavatcha} showModal={showModal} setShowModal={setShowModal} toggleOPen={toggleOPen}/>
       <NavbarButon />
    </div>
  )
}

export default NavbarHome