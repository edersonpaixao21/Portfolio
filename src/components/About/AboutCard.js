import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, sou <span className="purple">Ederson Paixão </span>
            de <span className="purple"> Rio de Janeiro, Brasil.</span>
            <br />Eu sou um desenvolvedor júnior front-end.
            <br />
            <br />
            Além da desenvolver, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Ouvir músicas
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
