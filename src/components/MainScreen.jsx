import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import css from './MainScreen.scss';

import List from '../containers/List';
import Item from '../containers/Item';

import { filters } from '../reducers';
import config from '../../config';

const MainScreen = () => (
  <Router basename={config[process.env.NODE_ENV].basename}>
    <div id="mainScreen" className={css.module}>
      <header>
        <h1>La tambouille c&apos;est génial (logo)</h1>
      </header>
      <nav>
        {Object.keys(filters).map(cat => (
          <NavLink
            activeClassName={css.active}
            key={cat}
            to={`/categories/${cat}`}
          >{filters[cat].name}</NavLink>
        ))}
      </nav>
      <div className={css.content}>
        <Switch>
          <Route path="/categories/:catId" component={List} />
          <Route path="/" component={List} />
        </Switch>
        <Route path="/candidats/:id" component={Item} />
      </div>
    </div>
  </Router>
);

export default MainScreen;
