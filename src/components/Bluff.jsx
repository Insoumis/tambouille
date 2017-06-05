import React from 'react';

import css from './Bluff.scss';

import image1 from './assets/bluff_illu_1.png';
import image2 from './assets/bluff_illu_2.png';

const Bluff = () => (
  <div className={css.module}>
    <div className={css.images}>
      <img src={image1} alt="Infographie du Bluff n°1" />
      <img src={image2} alt="Infographie du Bluff n°2" />
    </div>
    <article>
      <p>Le 11 mai 2017, Richard Ferrand a présenté une première liste de 428 candidats estampillés La République en marche et a annoncé qu’ils investissaient 52% de candidats issus de la société civile.</p>
      <p>Monsieur Ferrand a beaucoup insisté sur ce nombre et a sans cesse rappelé l’argument et la promesse de campagne d’Emmanuel Macron concernant le « renouvellement » de la vie politique. Entre temps, François Bayrou a exigé l’investiture de nombreux élus issus du MoDEM et a obtenu gain de cause.</p>
      <p>Aujourd’hui, La République en marche présente 528 candidats, et le mouvement réserve 49 circonscriptions aux candidats Macron-compatibles issus du Parti Socialiste, des Républicains et de leurs alliés.</p>
      <p>Sur les 528 candidats directement investis par La République en marche, il y a en réalité 39.69% candidats issus de la société civile et non 52% comme annoncé. Nous obtenons ce chiffre si, contrairement à La République en marche, nous n’incluons pas dans nos calculs les conseillers ministériels, les collaborateurs d’élus et les élus locaux.</p>
      <p>Enfin, si nous nous intéressons à ces 39.69% de candidats issus de la société civile, que constatons-nous ? Qu’il y a 51% de cadres, 24,89 % de chefs d’entreprise, 10% d’avocats ou médecins, très peu d’employés, aucun ouvrier et aucun demandeur d’emploi.</p>
    </article>
  </div>
);

export default Bluff;
