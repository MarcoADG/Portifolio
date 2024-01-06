import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export const CustomCardStyle = styled(Card)`
  width: 17rem;
  background-color: var(--azul-primario);
  color: var(--branco);
  text-align: start;
  margin: 50px 0px 50px 50px;
  border-radius: 15px;

  svg {
    margin-top: 20px;
    height: 5rem;
    width: auto;
    color: var(--preto-primario);
  }
`;

export const CustomAccordionStyle = styled(Accordion)`
  .accordion-button {
    background-color: var(--azul-primario) !important;
    color: var(--preto-primario);
  }

  .accordion-item {
    border-color: var(--preto-primario);
  }

  .accordion-body {
    background-color: var(--cinza-primario);
    color: var(--preto-primario);
  }
`;
