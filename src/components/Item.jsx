import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

import css from './Item.scss';

const Item = ({ history, item }) => (
  <div
    className={css.module}
    onClick={(e) => {
      const container = findDOMNode(this.container);
      if (
        e.target !== e.currentTarget &&
        e.target !== container &&
        e.target !== container.children[0]
      ) {
        return;
      }
      history.push('/');
    }}
    role="button"
    tabIndex="0"
  >
    <Container ref={node => (this.container = node)}>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    candidat_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
