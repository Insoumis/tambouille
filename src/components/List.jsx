import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import LazyImage from './LazyImage';
import ListItem from './ListItem';
import Bluff from './Bluff';
import { filters } from '../reducers';

import css from './List.scss';

class List extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.resetFilters();
    }
  }
  render() {
    const { category = 0, items, visibilityFilters, activeFilters, addFilter } = this.props;

    const categoryTitle = category && (filters[category].title ?
                filters[category].title :
                filters[category].name.replace('|', ' '));

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
        <div className={css.filters}>
          <select value={activeFilters.candidat_group} onChange={event => {
            addFilter({ candidat_group: event.target.value });
          }}>
            <option value="ALL">
              Tous les Partis
            </option>
            {visibilityFilters.candidat_group.map((filterValue, i) => (
              <option key={i} value={filterValue}>{filterValue}</option>
            ))}
          </select>
          <select value={activeFilters.dep_name} onChange={event => {
            addFilter({ dep_name: event.target.value });
          }}>
            <option value="ALL">Tous les départements</option>
            {visibilityFilters.dep_name.map((filterValue, i) => (
              <option key={i} value={filterValue}>{filterValue}</option>
            ))}
          </select>
          <select value={activeFilters.circo} onChange={event => {
            addFilter({ circo: event.target.value });
          }}>
            <option value="ALL">Toutes les circonscriptions</option>
            {visibilityFilters.circo.map((filterValue, i) => (
              <option key={i} value={filterValue}>{filterValue}</option>
            ))}
          </select>
        </div>
        <Row>
          {items.map(item => (
            <Col key={item.id} md={6} lg={3}>
              <ListItem item={item} category={category} />
            </Col>
          ))}
        </Row>
        {category === "7" && <Bluff />}
      </Container>
    );
  }
}

List.defaultProps = {
  category: undefined,
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
