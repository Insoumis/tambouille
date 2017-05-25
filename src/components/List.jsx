import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import ListItem from './ListItem';
import { filters } from '../reducers';

const List = ({ category, items }) => (
  <Container>
    {(category) ?
      <div>
        <h2>{filters[category].name}</h2>
        <p>{filters[category].description}</p>
      </div>
    : false}
    <Row>
      {items.map(item => (
        <Col key={item.id} md={6} lg={4}>
          <ListItem item={item} />
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
