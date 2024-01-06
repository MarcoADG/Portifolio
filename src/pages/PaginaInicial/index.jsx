import React from "react";
import { ContainerWithDropUp } from "../../components/ContainerWIthDropUp";
import PageContainer from "../../components/PageContainer";
import { Container } from "react-bootstrap";
import { PaginaInicialStyle } from "./style";
import NavBar from "../../components/Navbar";
import Intro from "../../components/Intro";

export default function PaginaInicial({
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
}) {
  return (
    <ContainerWithDropUp
      increaseFontSize={increaseFontSize}
      decreaseFontSize={decreaseFontSize}
      resetFontSize={resetFontSize}
      HandledarkMode={HandledarkMode}
      isDarkMode={isDarkMode}
    >
      <PageContainer>
        <PaginaInicialStyle>
          <NavBar />
          <Container className="container-pagina">
            <Intro />
          </Container>
        </PaginaInicialStyle>
      </PageContainer>
    </ContainerWithDropUp>
  );
}
