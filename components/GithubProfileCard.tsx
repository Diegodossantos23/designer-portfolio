import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={"/img/icons/common/IMG_ERIKA_4.jpg"}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Entre em contato comigo!!</h2>
              <p className="lead text-white mt-3">Discutir um projeto ou apenas dizer Oi? Minha caixa de entrada esta aberta para todos</p>
              <p className="text-white mt-3">{" Monitoramento de Redes Sociais, Criação de Cronograma de Postagens, Designer Gráfico, Edição de Vídeos e Tratamento de Imagens. "}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {"Sumaré, São Paulo"}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
