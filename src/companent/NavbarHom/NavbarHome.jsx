import React, { useState } from 'react'
import NavbarLoketion from './NavbarTop/NavbarLoketion'
import NavbarCentr from './NavbarCenter/NavbarCentr'
import NavbarButon from './NavbarBotton/NavbarButon'

function NavbarHome({savatcha,setSavatcha}) {

  return (
    <div>
      <NavbarLoketion />
       <NavbarCentr savatcha={savatcha} setSavatcha={setSavatcha}/>
       <NavbarButon />
    </div>
  )
}

export default NavbarHome