import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NavbarHome from "./companent/NavbarHom/NavbarHome.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
