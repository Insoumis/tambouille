import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import css from './SplashScreen.scss';

class SplashScreen extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className={css.module}>
        <div className={css.image}></div>
        <div className={css.space}></div>
        <div className={css.wrapper}>
          <h3 className={css.welcome}>Bienvenue!</h3>
          <h1>Tambouille</h1>
          <h2>électorale</h2>
          <p className={css.tagline}>vieilles recettes politiciennes pour une nouvelle majorité</p>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashScreen);
