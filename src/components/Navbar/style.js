import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const NavBarStyle = styled(Navbar)`
  font-size: 100%;
  width: 100vw;
  background-color: var(--azul-primario) !important;
  border-bottom: 1px solid var(--preto-primario) !important;
  color: var(--preto-primario) !important;
  position: sticky;

  .container {
    margin: 0;
    gap: 5rem;
  }

  .nav-link {
    color: var(--preto-primario) !important;

    img {
      margin-left: 5rem;
      width: 50px;
      height: 50px;
    }

    svg {
      margin-right: 0.125rem;
      font-size: 1.563rem;
    }
  }

  .icones {
    position: absolute;
    right: 0;
    margin-right: 5rem;
  }
`;
