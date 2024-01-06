import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const IntroStyle = styled(Card)`
  background-color: transparent;
  color: var(--branco);
  text-align: start;
  margin-top: 18.75rem;
  margin-left: 10rem;
  border: none;

  .card-title {
    font-size: 150%;
  }
  .card-subtitle {
    font-size: 100%;
  }

  .card-link {
    color: inherit;
  }
`;
