import { useState } from "react";
import "./App.css";
import Carusel from "./companent/Carusel/Carusel";
import Catigores from "./companent/Caruseltagidagi/Catigores";
import NavbarHome from "./companent/NavbarHom/NavbarHome";
import Cardlar from "./companent/Card/Cards";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [savatcha, setSavatcha] = useState([]);
  const toggleOPen = ()=>{
    setShowModal(!showModal)
  }

  return (
    <>
      <NavbarHome savatcha={savatcha} setSavatcha={setSavatcha} showModal={showModal} setShowModal={setShowModal} toggleOPen={toggleOPen} />
      <Carusel />
      <Catigores />
      <Cardlar savatcha={savatcha} setSavatcha={setSavatcha} showModal={showModal} setShowModal={setShowModal} toggleOPen={toggleOPen} />
    </>
  );
}

export default App;
