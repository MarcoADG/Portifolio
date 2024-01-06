import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

export const ContainerWithHeader = ({
  children,
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    return window.screen.width;
  }

  return (
    <>
      <Container style={{ backgroundColor: "var(--branco)" }} fluid>
        <Row className="px-0">
          <Header
            navigate={navigate}
            HandledarkMode={HandledarkMode}
            isDarkMode={isDarkMode}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
            resetFontSize={resetFontSize}
          />
        </Row>
        <Row className="px-0">{children}</Row>
      </Container>
    </>
  );
};
