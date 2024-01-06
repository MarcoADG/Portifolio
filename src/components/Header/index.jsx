import { React } from "react";
import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Logo from "../../assets/zackdog.png";
import {
  MdOutlineTextDecrease,
  MdOutlineTextIncrease,
  MdLightMode,
  MdDarkMode,
} from "react-icons/md";
import { ImTextColor } from "react-icons/im";

import { HeaderStyle } from "./style.js";
import { HeaderItem } from "../HeaderItem/index.jsx";
function Header({
  windowSize,
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
}) {
  const navigate = useNavigate();

  function navigateTo(route) {
    navigate(route);
  }

  return (
    <HeaderStyle>
      <Row>
        <div className="logo-area">
          <img src={Logo} alt="Logo" onClick={() => navigateTo("/2")} />
        </div>
        <div className="header-nav">
          <HeaderItem
            index={0}
            text={"texto"}
            action={HandledarkMode}
            icon={
              isDarkMode ? (
                <MdDarkMode title="Dark mode" size={20} />
              ) : (
                <MdLightMode title="Light mode" size={20} />
              )
            }
          />
          <HeaderItem
            index={0}
            text={"Aumentar"}
            action={increaseFontSize}
            icon={<MdOutlineTextIncrease title="Aumentar Fonte" size={20} />}
          />
          <HeaderItem
            index={0}
            text={"Retornar"}
            action={resetFontSize}
            icon={<ImTextColor title="Diminuir Fonte" size={20} />}
          />
          <HeaderItem
            index={0}
            text={"Diminuir"}
            action={decreaseFontSize}
            icon={<MdOutlineTextDecrease title="Diminuir Fonte" size={20} />}
          />
        </div>
      </Row>
    </HeaderStyle>
  );
}

export default Header;
