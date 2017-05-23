import React, { Component } from 'react';
import smoothscroll from 'smoothscroll';

import css from './SplashScreen.scss';
import discord from './assets/logo-discord.png';

class SplashScreen extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => window.requestAnimationFrame(() => {
      if (!this.isScrolling && window.pageYOffset < window.innerHeight) {
        this.scrollToTambouille();
      }

      if (window.pageYOffset === 0) this.isScrolling = false;
    }));
  }

  scrollToTambouille() {
    this.isScrolling = true;
    smoothscroll(document.querySelector('#tambouille'));
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
            onClick={() => this.scrollToTambouille()}
          >Scrollez pour en voir plus</button>
        </div>
      </div>
    );
  }
}

export default SplashScreen;
