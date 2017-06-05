import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import LazyImage from './LazyImage';
import css from './Item.scss';

import failover from './assets/placeholder.jpg';
import placeholder from './assets/placeholder.jpg';

const Item = ({ history, item }) => {
  let container;
  let root;

  let animationCount = 0;

  const onModalClosed = () => {
    animationCount += 1;
    if (animationCount < 2) return;

    if (history.action === 'POP') {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const goBack = () => {
    root.addEventListener('animationend', onModalClosed, false);
    root.classList.add(css.remove);
  };

  return (
    <div
      className={css.module}
      onClick={(e) => {
        const containerEl = findDOMNode(container);
        if (
          e.target !== e.currentTarget &&
          e.target !== containerEl &&
          e.target !== containerEl.children[0]
        ) {
          return;
        }
        goBack();
      }}
      role="button"
      tabIndex="0"
      ref={node => root = node}
    >
      <div
        className={css.background}
        onClick={goBack}
      />
      <Container ref={node => container = node}>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <div className={css.modal}>
              <button onClick={goBack}><span>&times;</span></button>
              <article>
                <div className={css.imgContainer}>
                  <LazyImage
                    src={item.picture ?
                      `/assets/${item.picture}` :
                      `/assets/${item.circo}-${item.dep_num}.jpg`}
                    failover={failover}
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
