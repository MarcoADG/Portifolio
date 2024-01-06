import React from "react";
import Card from "react-bootstrap/Card";
import { IntroStyle } from "./style";

export default function Intro() {
  return (
    <IntroStyle>
      <Card.Body>
        <Card.Subtitle>Ola,</Card.Subtitle>
        <Card.Title>Eu sou Marco Aurelio</Card.Title>
        <Card.Title>Desenvolvedor FullStack</Card.Title>
        <Card.Text>
          Este é um site que criei para testar meu conhecimento de Front End
          <br />
          Este site foi criado com:
        </Card.Text>
        <Card.Link href="https://react.dev/" target="_blank">
          React
        </Card.Link>
        <br />
        <Card.Link href="https://react-bootstrap.netlify.app/" target="_blank">
          Bootstrap
        </Card.Link>
        <br />
        <Card.Link href="https://styled-components.com/" target="_blank">
          Styled Components
        </Card.Link>
      </Card.Body>
    </IntroStyle>
  );
}
