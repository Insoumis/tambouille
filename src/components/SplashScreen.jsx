import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import LazyImage from './LazyImage';

import css from './SplashScreen.scss';
import logo from './assets/tambouille_logo_x1.png';

class SplashScreen extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className={css.module}>
        <NavLink to="/">
          <LazyImage src={logo} alt="Logo Tambouille" />
        </NavLink>
        <h3>Bienvenue!</h3>
        <h1>Tambouille</h1>
        <h2>électorale</h2>
        <p>vieilles recettes politiciennes pour une nouvelle majorité</p>
      </div>
    );
  }
}

export default withRouter(SplashScreen);
