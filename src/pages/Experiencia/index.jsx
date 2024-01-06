import { React, useEffect, useState } from "react";
import { ContainerWithDropUp } from "../../components/ContainerWIthDropUp";
import PageContainer from "../../components/PageContainer";
import { Container, Image, Row, Col } from "react-bootstrap";
import { ExperienciaStyle } from "./style.js";
import NavBar from "../../components/Navbar";
import axios from "axios";
import CustomCard from "../../components/Card/index.jsx";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function Experiencia({
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  resetFontSize,
}) {
  const [usuario, setUsuario] = useState("");

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://api.github.com/users/Rofogale");
      setUsuario(response.data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  const javaSkills = [
    { exp: "POO" },
    { exp: "RESTful API" },
    { exp: "Java Collections Framework" },
    { exp: "Multithreading" },
    { exp: "Exception Handling" },
    { exp: "Spring Framework" },
    { exp: "Maven" },
    { exp: "Dependency Injection" },
  ];

  const postgresqlSkills = [
    { exp: "Database Design" },
    { exp: "SQL Query Optimization" },
    { exp: "Data Modeling" },
    { exp: "Database Security" },
  ];

  const html5Skills = [
    { exp: "Semantic HTML" },
    { exp: "HTML Media Elements (Audio, Video)" },
    { exp: "Canvas and SVG Graphics" },
    { exp: "Web Accessibility (ARIA)" },
    { exp: "Responsive Web Design" },
    { exp: "Web Storage (localStorage, sessionStorage)" },
  ];

  const css3Skills = [
    { exp: "CSS Box Model and Layout" },
    { exp: "Flexbox and Grid Layout" },
    { exp: "Responsive Design with Media Queries" },
    { exp: "CSS Transitions and Animations" },
    { exp: "CSS Variables" },
  ];

  const javascriptSkills = [
    { exp: "Variables and Data Types" },
    { exp: "Functions and Scope" },
    { exp: "Control Flow" },
    { exp: "Arrays and Objects" },
    { exp: "Arrow Functions, Destructuring" },
    { exp: "Asynchronous JavaScript" },
    { exp: "Event Handling" },
    { exp: "Axios and Fetch API" },
    { exp: "Error Handling" },
  ];

  const reactSkills = [
    { exp: "React Components" },
    { exp: "JSX (JavaScript XML)" },
    { exp: "State and Props" },
    { exp: "React Hooks" },
    { exp: "React Router" },
    { exp: "Conditional Rendering" },
    { exp: "Forms and Controlled Components" },
    { exp: "Handling Events" },
    { exp: "Styled Components" },
    { exp: "Axios" },
  ];

  const bootstrapSkills = [
    { exp: "Grid System" },
    { exp: "Responsive Design" },
    { exp: "Buttons and Forms" },
    { exp: "Navbar and Navigation Components" },
    { exp: "Alerts and Modals" },
    { exp: "Cards and Badges" },
    { exp: "Carousel" },
    { exp: "Themes and Customization" },
    { exp: "Bootstrap Icons" },
  ];

  const reactNativeSkills = [
    { exp: "React Native Components" },
    { exp: "Navigation in React Native" },
    { exp: "State and Props in React Native" },
    { exp: "Styles and Flexbox in React Native" },
    { exp: "Push Notifications" },
  ];

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <ContainerWithDropUp
      increaseFontSize={increaseFontSize}
      decreaseFontSize={decreaseFontSize}
      resetFontSize={resetFontSize}
      HandledarkMode={HandledarkMode}
      isDarkMode={isDarkMode}
    >
      <PageContainer>
        <ExperienciaStyle>
          <NavBar />
          <Container className="container-pagina">
            <Row className="justify-content-center">
              <CustomCard
                icone={<SiPostgresql />}
                texto={"PostgreSQL"}
                lista={postgresqlSkills}
                eventKey="SQL"
              />
              <CustomCard
                icone={<FaJava />}
                texto={"Java"}
                lista={javaSkills}
                eventKey="java"
              />
              <CustomCard
                icone={<FaHtml5 />}
                texto={"HTML5"}
                lista={html5Skills}
                eventKey="html5"
              />
              <CustomCard
                icone={<FaCss3Alt />}
                texto={"CSS3"}
                lista={css3Skills}
                eventKey="css3"
              />
              <CustomCard
                icone={<IoLogoJavascript />}
                texto={"JavaScript"}
                lista={javascriptSkills}
                eventKey="js"
              />
              <CustomCard
                icone={<FaReact />}
                texto={"React"}
                lista={reactSkills}
                eventKey="react"
              />
              <CustomCard
                icone={<FaBootstrap />}
                texto={"BootStrap"}
                lista={bootstrapSkills}
                eventKey="bootstrap"
              />
              <CustomCard
                icone={<FaReact />}
                texto={"React Native"}
                lista={reactNativeSkills}
                eventKey="reactnative"
              />
            </Row>
          </Container>
        </ExperienciaStyle>
      </PageContainer>
    </ContainerWithDropUp>
  );
}
