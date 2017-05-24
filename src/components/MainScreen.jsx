import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import css from './MainScreen.scss';

import ListItem from './ListItem';
import Item from '../containers/Item';

import config from '../../config';

const MainScreen = ({ items }) => (
  <Router basename={config[process.env.NODE_ENV].basename}>
    <div id="mainScreen" className={css.module}>
      <header>
        <h1>La tambouille c&apos;est génial (logo)</h1>
      </header>
      <nav>
        Filtres
      </nav>
      <div className={css.content}>
        <Container>
          <h2>Filtre en cours</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto ad corrupti magni rerum enim, odit facere, dolores
            sint reiciendis cumque dolorem a.
            Voluptate adipisci veniam, in deleniti illo alias, voluptates.
          </p>
          <Row>
            {items.map(item => (
              <Col key={item.id} md={6} lg={4}>
                <ListItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>

        <Route path="/candidats/:id" component={Item} />
      </div>
    </div>
  </Router>
);

MainScreen.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainScreen;
