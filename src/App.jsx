import { useState } from "react";
import "./App.css";
import Carusel from "./companent/Carusel/Carusel";
import Catigores from "./companent/Caruseltagidagi/Catigores";
import NavbarHome from "./companent/NavbarHom/NavbarHome";
import Cardlar from "./companent/card/Cards";

function App() {
  const [savatcha, setSavatcha] = useState([]);

  return (
    <>
      <NavbarHome savatcha={savatcha} setSavatcha={setSavatcha} />
      <Carusel />
      <Catigores />
      <Cardlar savatcha={savatcha} setSavatcha={setSavatcha} />
    </>
  );
}

export default App;
