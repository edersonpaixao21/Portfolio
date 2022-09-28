import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXA <span className="purple"> EU ME </span> APRESENTAR
            </h1>
            <p className="home-about-body">
            Entusiasta de tecnologia, tenho experiência em designer e atualmente estou focado em desenvolvimento de sistemas web.
              <br />
              <br />Eu sou fluente em
              <i>
                <b className="purple"> ReactJs, JavaScript, TypeScript e CSS </b>
              </i>
              <br />
              <br />
                Minhas áreas de interesse é construindo novas &nbsp;
              <i>
                <b className="purple">Tecnologias e produtos para Web </b> 
              </i>
              <br />
              <br />
              Sempre que possível, aplico também a minha paixão pelo desenvolvimento de produtos com <b className="purple">JavaScript</b> e
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca e frameworks modernos
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE EM</h1>
            <p>
              Sinta-se à vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/edersonpaixao21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ederson-paix%C3%A3o-a14051242/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
