import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import css from './Bluff.scss';

import image1 from './assets/bluff_illu_1.png';
import image2 from './assets/bluff_illu_2.png';

const Bluff = () => (
  <div className={css.module}>
    <Container>
      <Row>
        <Col md={5} offset={{ md: 1 }}>
          <article>
            <h3>Quelques chiffres...</h3>
            <p className={css.bold}>Le 11 mai 2017, Richard Ferrand a présenté une première liste de 428 candidats estampillés La République en marche dont 52% de candidats issus de la société civile.</p>
            <p>Monsieur Ferrand a beaucoup insisté sur ce nombre et a sans cesse rappelé l’argument et la promesse de campagne d’Emmanuel Macron concernant le « renouvellement » de la vie politique. Entre temps, François Bayrou a exigé l’investiture de nombreux élus issus du MoDeM et a obtenu gain de cause.</p>
            <p>Aujourd’hui, La République en marche présente 528 candidats, et le mouvement réserve 49 circonscriptions aux candidats Macron-compatibles issus du Parti Socialiste, des Républicains et de leurs alliés.</p>
          </article>
        </Col>
        <Col md={5}>
          <div className={css.images}>
            <img src={image1} alt="Infographie du Bluff n°1" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={5} offset={{ md: 1 }}>
          <img src={image2} alt="Infographie du Bluff n°2" />
        </Col>
        <Col md={5}>
          <article className={css.secondParagraph}>
            <p className={css.bold}>
              Sur les 528 candidats directement investis par La République en marche, il y a en réalité 39.69% candidats issus de la société civile et non 52% comme annoncé.</p>
            <p>Nous obtenons ce chiffre si, contrairement à La République en marche, nous n’incluons pas dans nos calculs les conseillers ministériels, les collaborateurs d’élus et les élus locaux.</p>
            <p>Enfin, si nous nous intéressons à ces 39.69% de candidats issus de la société civile, que constatons-nous ? Qu’il y a 51% de cadres, 24,89 % de chefs d’entreprise, 10% d’avocats ou médecins, très peu d’employés, aucun ouvrier et aucun demandeur d’emploi.</p>
          </article>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Bluff;
