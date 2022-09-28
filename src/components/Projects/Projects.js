import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pokedex from "../../Assets/Projects/pokedex.png";
import quiz from "../../Assets/Projects/quiz.png";
import card from "../../Assets/Projects/card.png";
import music from "../../Assets/Projects/music.png";
import calculator from "../../Assets/Projects/calculator.png";
import history from "../../Assets/Projects/history.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">Recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music"
              description="O projeto tem como objetivo consumir um API de músicas para usuário fazer login, pesquisar o cantor e salvar suas músicas favoritas."
              ghLink="https://github.com/edersonpaixao21/Music"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={history}
              isBlog={false}
              title="Historic Team"
              description="O projeto tem como objetivo criar, editar e excluir times históricos do futebol brasileiro."
              ghLink="https://github.com/edersonpaixao21/HistoricTeam"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Credit Card"
              description="O projeto tem como objetivo fazer um clone de um cartão de crédito."
              ghLink="https://github.com/edersonpaixao21/CreditCard"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="O projeto tem como objetivo mostar os pokemons, consumindo a API do PokéAPI."
              ghLink="https://github.com/edersonpaixao21/Pokedex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="IMC Calculator"
              description="O projeto tem como objetivo fazer cálculo da massa corporal, parâmetro adotoado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa."
              ghLink="https://github.com/edersonpaixao21/IMC-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz"
              description="O projeto tem como objetivo um jogo de resposta certa ou errada sobre HTML, CSS E JavaScript."
              ghLink="https://github.com/edersonpaixao21/Quiz"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
