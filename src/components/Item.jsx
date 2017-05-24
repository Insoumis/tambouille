import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

import css from './Item.scss';

const Item = ({ item }) => (
  <div className={css.module}>
    <Container>
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <article>
            <Link to="/">Fermer</Link>
            <h3>{item.candidat_name}</h3>
            {item.description}
          </article>
        </Col>
      </Row>
    </Container>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    candidat_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
