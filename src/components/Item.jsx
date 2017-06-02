import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import css from './Item.scss';

import macron from './assets/macron.jpg';

const Item = ({ history, item }) => {
  const goBack = () => {
    if (history.action === 'POP') {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  console.log(item)

  return (
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
        goBack();
      }}
      role="button"
      tabIndex="0"
    >
      <Container ref={node => (this.container = node)}>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <article>
              <button onClick={() => goBack()}><span>&times;</span></button>
              <div>
                <strong className={css.badge}>{item.dep_num} - {item.circo}</strong>
                <img src={macron} height="120"/>
              </div>
              <div className={css.content}>
                <h3>{item.candidat_name}</h3>
                <p>
                  {item.description}<br/>
                  <a target="_blank" href={item.source}>Source</a>
                </p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

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
