import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import css from './MainScreen.scss';

import List from '../containers/List';
import Item from '../containers/Item';

import { filters } from '../reducers';
import config from '../../config';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent() {
    setTimeout(() => {
      const bodyTop = document.body.getBoundingClientRect().top;
      const top = document.getElementById('mainScreen').getBoundingClientRect().top;

      console.log('HERE ?');
      this.moveArrow(this.$header)

      window.scrollTo({ top: top - bodyTop, behavior: 'smooth' })
    })
  }

  scrollToTitle() {
    setTimeout(() => {
      const bodyTop = document.body.getBoundingClientRect().top;
      const top = document.querySelector('h1').getBoundingClientRect().top;

      window.scrollTo({ top: top - bodyTop, behavior: 'smooth' })
    })
  }

  moveArrow(el) {
    this.$header = el;

    const $active = el.querySelector(`.${css.active}`);

    const fullLeft = $active.getBoundingClientRect().left + ($active.getBoundingClientRect().width / 2)

    this.arrow.style.left = `${fullLeft}px`;
    console.log();
  }

  render() {
    if (location.pathname.indexOf('/categories') === 0) {
      this.scrollToTitle();
    }

    return (
      <Router basename={config[process.env.NODE_ENV].basename}>
        <div className={css.module}>
          <nav ref={(el) => this.moveArrow(el)}>
            <header id="mainScreen">
              <h2>Découvrez</h2>
              <h2>nos tambouilles</h2>
            </header>
            <div className={css.linkContainers}>
              {Object.keys(filters).map(cat => (
                <NavLink
                  activeClassName={css.active}
                  key={cat}
                  className={css[filters[cat].icon]}
                  to={`/categories/${cat}`}
                  onClick={this.scrollToContent}
                >{
                  filters[cat].name.split('|').map((text, i) => (<span key={i}>{text}<br/></span>))
                }</NavLink>
              ))}
            </div>
            <div className={css.arrow} ref={(arr) => this.arrow = arr}></div>
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
  }
}

export default MainScreen;
