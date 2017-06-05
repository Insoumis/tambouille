import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import LazyImage from './LazyImage';
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
      <div className={css.background} onClick={() => goBack()}/>
      <Container ref={node => (this.container = node)}>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <div className={css.modal}>
              <button onClick={() => goBack()}><span>&times;</span></button>
              <article>
                <div className={css.imgContainer}>
                  <LazyImage
                    src={`/assets/${item.circo}-${item.dep_num}.jpg`}
                    alt={item.candidat_name}
                    height="120"
                  />
                </div>
                <div className={css.content}>
                  <div className={css.badge}>
                      <strong>Dpt {item.dep_num} - Circo {item.circo}</strong>
                  </div>
                  <h3>{item.candidat_name}</h3>
                  {item.descriptionHTML ?
                    <div dangerouslySetInnerHTML={{ __html: item.descriptionHTML }} />
                  :
                    <p>{item.description}</p>
                  }
                  <a target="_blank" href={item.source}>Source</a>
                </div>
              </article>
            </div>
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
    description: PropTypes.string,
    descriptionHTML: PropTypes.string,
  }).isRequired,
};

export default Item;
