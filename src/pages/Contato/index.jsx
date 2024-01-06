import React from "react";
import { ContainerWithDropUp } from "../../components/ContainerWIthDropUp";
import PageContainer from "../../components/PageContainer";
import { Container } from "react-bootstrap";
import { ContatoStyle } from "./style";
import NavBar from "../../components/Navbar";
import Intro from "../../components/Intro";

export default function Contato({
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
        <ContatoStyle>
          <NavBar />
          <Container className="container-pagina">
            <Intro />
          </Container>
        </ContatoStyle>
      </PageContainer>
    </ContainerWithDropUp>
  );
}
