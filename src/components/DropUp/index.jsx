import React, { useState } from "react";
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
import { DropUpStyle } from "./style.js";
import { DropUpItem } from "../DropUpItem/index.jsx";

function DropUp({
  windowSize,
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
}) {
  const [dropUpVisible, setDropUpVisible] = useState(false);

  function toggleDropUp() {
    setDropUpVisible(!dropUpVisible);
  }

  return (
    <DropUpStyle>
      <Row>
        <div className="dropup-nav">
          <div className="dropup-button" onClick={toggleDropUp}>
            <span className="logo-dropup">
              <img src={Logo} alt="Logo" onClick={toggleDropUp} />
            </span>
          </div>
          {dropUpVisible && (
            <div className="dropup-content">
              <DropUpItem
                index={0}
                text={isDarkMode ? "Dark" : "Light"}
                action={HandledarkMode}
                icon={
                  isDarkMode ? (
                    <MdDarkMode title="Dark mode" size={20} />
                  ) : (
                    <MdLightMode title="Light mode" size={20} />
                  )
                }
              />
              <DropUpItem
                index={0}
                text={"Aumentar"}
                action={increaseFontSize}
                icon={
                  <MdOutlineTextIncrease title="Aumentar Fonte" size={20} />
                }
              />
              <DropUpItem
                index={0}
                text={"Retornar"}
                action={resetFontSize}
                icon={<ImTextColor title="Diminuir Fonte" size={20} />}
              />
              <DropUpItem
                index={0}
                text={"Diminuir"}
                action={decreaseFontSize}
                icon={
                  <MdOutlineTextDecrease title="Diminuir Fonte" size={20} />
                }
              />
            </div>
          )}
        </div>
      </Row>
    </DropUpStyle>
  );
}

export default DropUp;
