import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial/index.jsx";
import Experiencia from "../pages/Experiencia/index.jsx";
import Contato from "../pages/Contato/index.jsx";

export default function Rotas({
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
}) {
  const [windowSize, setWindowSize] = useState(getWindowsSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowsSize());
    }
    window.addEventListener("resize", handleWindowResize);
  }, [windowSize]);

  function getWindowsSize() {
    return window.screen.width;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PaginaInicial
              resetFontSize={resetFontSize}
              increaseFontSize={increaseFontSize}
              decreaseFontSize={decreaseFontSize}
              HandledarkMode={HandledarkMode}
              isDarkMode={isDarkMode}
            />
          }
        />
        <Route
          path="/Experiencia"
          element={
            <Experiencia
              resetFontSize={resetFontSize}
              increaseFontSize={increaseFontSize}
              decreaseFontSize={decreaseFontSize}
              HandledarkMode={HandledarkMode}
              isDarkMode={isDarkMode}
            />
          }
        />
        <Route
          path="/Contato"
          element={
            <Contato
              resetFontSize={resetFontSize}
              increaseFontSize={increaseFontSize}
              decreaseFontSize={decreaseFontSize}
              HandledarkMode={HandledarkMode}
              isDarkMode={isDarkMode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
