import React from "react";
import { Link } from "react-router-dom";
import { NavBarStyle } from "./style";
import { Container, Nav } from "react-bootstrap";
import { IoMdCodeWorking, IoIosMail } from "react-icons/io";
import Icone from "../../assets/m-icon-7.jpg";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  return (
    <NavBarStyle expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link as={Link} to="/">
          <img src={Icone} alt="Icone" />
        </Nav.Link>
        <NavBarStyle.Toggle aria-controls="basic-navbar-nav" />
        <NavBarStyle.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/Experiencia">
              <IoMdCodeWorking />
              Experiencias
            </Nav.Link>
          </Nav>
          <Nav className="icones">
            <Nav.Link
              href={"https://github.com/Rofogale"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </Nav.Link>
            <Nav.Link
              href={
                "https://www.linkedin.com/in/marco-aurelio-duarte-gomes-4a2641163/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </NavBarStyle.Collapse>
      </Container>
    </NavBarStyle>
  );
}
