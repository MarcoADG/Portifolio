import styled from "styled-components";

export const HeaderStyle = styled.div`
  font-size: 100%;
  margin: 0 !important;
  width: 100vw;
  height: 5rem;
  padding: 1rem;
  box-shadow: 1px 1px 5px var(--preto-primario);
  background-color: var(--azul-secundario);
  position: sticky;
  z-index: 9999;
  left: 0;

  .header-nav {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;

    max-width: fit-content;

    .header-nav-item {
      width: auto;
      padding: 0.5rem 0;
      transition: 0.3s;

      :hover {
        color: var(--preto-primario) !important;
      }
    }
    .label-header {
      user-select: none;
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
  }

  .logo-area {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;

    img {
      width: 100%;
      max-width: "6rem";
    }

    span {
      color: var(--azul-secundario);
      font-weight: bold;
      text-align: center;
    }
  }

  .acessibility-icons-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--preto-primario) !important;

    &:hover {
      cursor: pointer;
      color: none !important;
    }

    svg {
      font-size: 24px;

      &:hover {
        color: none !important;
      }
    }
  }
`;
