import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import LazyImage from './LazyImage';
import ListItem from './ListItem';
import Bluff from './Bluff';
import { filters } from '../reducers';

import css from './List.scss';

const List = ({ category, items }) => {
  const categoryTitle = category && (filters[category].title ?
              filters[category].title :
              filters[category].name.replace('|', ' '))

  return (
    <Container>
      {category ?
        <div className={css.header}>
          <div className={css.imgContainer}>
            <img src={`/assets/${filters[category].catPicture}.png`} alt={categoryTitle} width="250" height="250"/>
          </div>
          <div className={css.content}>
            <h2>{categoryTitle}</h2>
            <p>{filters[category].description}</p>
          </div>
        </div>
      :
        <div className={css.header}>
          <div className={css.imgContainer}>
            <img
              src={`/assets/home.png`}
              alt="Macaron sur pattes"
              width="300"
              height="250"
            />
          </div>
          <div className={css.content}>
            <h2 className={css.introTitle}>Chères électrices, chers électeurs</h2>
            <p>Installez-vous confortablement et prenez le temps de découvrir nos tambouilles politiciennes ! Le dernier monarque à la mode ne manquera pas de concocter de nouvelles recettes basées sur un même ingrédient : l’opportunisme !</p>
            <p>À l'image de l'actualité politique, ce site sera mis à jour.  Revenez prochainement afin de découvrir de nouvelles tambouilles si chères à notre Ve République.</p>
          </div>
        </div>
      }
      <Row>
        {items.map(item => (
          <Col key={item.id} md={6} lg={3}>
            <ListItem item={item} category={category} />
          </Col>
        ))}
      </Row>
      {category === "7" && <Bluff />}
      {/*<Row>
        <h4 style={{marginTop: '300px'}}>Mentions Légales</h4>
        <p>Coucou</p>
      </Row>*/}
    </Container>
  );
}

List.defaultProps = {
  category: undefined,
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
