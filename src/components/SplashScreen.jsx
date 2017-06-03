import React from 'react';
import { Link } from 'react-router-dom';

import LazyImage from './LazyImage';

import css from './SplashScreen.scss';
import logo from './assets/tambouille_logo_x1.png';

const SplashScreen = () => (
  <div className={css.module}>
    <Link to="/">
      <LazyImage src={logo} alt="Logo Tambouille" />
    </Link>
    <h3>Bienvenue!</h3>
    <h1>Tambouille</h1>
    <h2>électorale</h2>
    <p>vieilles recettes politiciennes pour une nouvelle majorité</p>
  </div>
);

export default SplashScreen;
