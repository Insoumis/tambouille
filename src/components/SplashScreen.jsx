import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import smoothscroll from 'smoothscroll';

import css from './SplashScreen.scss';
import discord from './assets/logo-discord.png';

class SplashScreen extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => window.requestAnimationFrame(() => {
      if (!this.isScrolling && window.pageYOffset < window.innerHeight) {
        this.scrollToMainScreen();
      }

      if (window.pageYOffset === 0) this.isScrolling = false;
    }));
  }

  scrollToMainScreen() {
    this.isScrolling = true;
    smoothscroll(document.querySelector('#mainScreen'));
  }

  render() {
    return (
      <div className={css.module}>
        <div className={css.wrapper}>
          <img alt="Le discord insoumis" src={discord} />
          présente<br />
          <h1>La TAMBOUILLE c&apos;est génial !</h1>
          <p>(à remplacer par une home top+)</p>
          <button
            onClick={() => this.scrollToMainScreen()}
          >Scrollez pour en voir plus</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashScreen);
