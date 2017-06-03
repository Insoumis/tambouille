import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import css from './MainScreen.scss';

import List from '../containers/List';
import Item from '../containers/Item';
import SplashScreen from './SplashScreen';

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
    if (!$active) {
      this.arrow.style.display = 'none';
      return;
    }

    const $parent = $active.parentElement;
    const index = [].indexOf.call($parent.children, $active);

    const fullLeft = ((margin + sizePerLink) * index) + (sizePerLink / 2);

    this.arrow.style.display = 'block';
    this.arrow.style.left = `${fullLeft}px`;
  }

  render() {
    const padding = 30;
    const margin = 15;
    const sizePerLink = 100;

    if (location.pathname.indexOf('/categories') === 0) {
      this.scrollToTitle();
    }

    return (
      <Router basename={config[process.env.NODE_ENV].basename}>
        <div>
          <SplashScreen />
          <div className={css.module}>
            <nav>
              <header id="mainScreen">
                <h2>Découvrez</h2>
                <h2>nos tambouilles</h2>
              </header>
              <div className={css.linkContainersWrapper}>
                <div className={css.linkContainers}>
                  {Object.keys(filters).map(cat => (
                    <NavLink
                      activeClassName={css.active}
                      key={cat}
                      className={css[filters[cat].icon]}
                      to={`/categories/${cat}`}
                      onClick={this.scrollToContent}
                    >{
                      filters[cat].name.split('|').map((text, i) => (
                        <span key={i}>{text}<br/></span>
                    ))}</NavLink>
                  ))}
                  <Route path="/" render={() => {
                    if (location.pathname.indexOf('/categories') === 0) {
                      let index = location.pathname.slice('/categories/'.length);
                      index = parseInt(index, 10) - 1;

                      const left = padding + ((margin + sizePerLink) * index) + (sizePerLink / 2);

                      const style = { transform: `translateX(${left}px)` };

                      return (<div className={css.arrow} style={style} ref={(arr) => this.arrow = arr}></div>);
                    }

                    return false;
                  }}/>
                </div>
              </div>
            </nav>
            <div className={css.content}>
              <Switch>
                <Route path="/categories/:catId" component={List} />
                <Route exact path="/" component={List} />
              </Switch>
              <Route path="/categories/:catId/:id" component={Item} />
              <Route path="/candidat/:id" component={Item} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainScreen;
