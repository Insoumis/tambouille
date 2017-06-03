import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import LazyImage from './LazyImage';
import ListItem from './ListItem';
import { filters } from '../reducers';

import macaronTalking from './assets/macaronTalking.jpg';

import css from './List.scss';

const List = ({ category, items }) => (
  <Container>
    {(category) ?
      <div className={css.header}>
        <LazyImage src={macaronTalking} alt="Macaron Talking" width="230" height="228"/>
        <div className={css.content}>
          <h2>{filters[category].title ?
          filters[category].title :
          filters[category].name.replace('|', ' ')}</h2>
          <p>{filters[category].description}</p>
        </div>
      </div>
    : false}
    <Row>
      {items.map(item => (
        <Col key={item.id} md={6} lg={3}>
          <ListItem item={item} category={category} />
        </Col>
      ))}
    </Row>
  </Container>
);

List.defaultProps = {
  category: undefined,
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
