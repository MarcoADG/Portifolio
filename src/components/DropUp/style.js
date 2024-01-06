import styled from "styled-components";

export const DropUpStyle = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 6rem;
  height: 6rem;
  background-color: var(--azul-secundario);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 1px 5px var(--preto-primario);
  z-index: 9999;

  .dropup-content {
    position: absolute;
    bottom: 6.2rem;
    right: 0rem;
    width: 6rem;
    background-color: var(--azul-secundario);
    box-shadow: 1px 1px 5px var(--preto-primario) !important;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .dropup-nav-item {
    width: auto;
    padding: 0.5rem 0;
    transition: 0.3s;

    :hover {
      color: var(--preto-primario) !important;
    }
  }

  .logo-dropup {
    user-select: none;
    position: relative;
    z-index: 9999;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .area-icons-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      cursor: pointer;
    }

    svg {
      font-size: 24px;
      &:hover {
        color: var(--preto-primario) !important;
      }
    }
  }
`;
