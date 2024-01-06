import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { CustomCardStyle, CustomAccordionStyle } from "./style";

function CustomCard({ icone, texto, lista }) {
  return (
    <CustomCardStyle>
      {icone}
      <Card.Body>
        <CustomAccordionStyle>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{texto}</Accordion.Header>
            <Accordion.Body>
              {lista && lista.length > 0 ? (
                <ul>
                  {lista.map((item, index) => (
                    <li key={index}>{item.exp}</li>
                  ))}
                </ul>
              ) : (
                <p>No skills available.</p>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </CustomAccordionStyle>
      </Card.Body>
    </CustomCardStyle>
  );
}

export default CustomCard;
