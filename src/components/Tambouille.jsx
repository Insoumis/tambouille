import PropTypes from 'prop-types';
import React from 'react';

import css from './Tambouille.scss';

import List from './List';

const Tambouille = ({ tambouilles }) => (
  <div id="tambouille" className={css.module}>
    <nav>
      Liste de filtres
    </nav>
    <div className={css.description}>
      Illu du filtre en cours
      <h2>Titre du filtre en cours</h2>
      <p>Petit descriptif du filtre en court</p>
    </div>
    <div className={css.list}>
      <div className={css.wrapper}>
        <List items={tambouilles} />
      </div>
    </div>
  </div>
);

Tambouille.propTypes = {
  tambouilles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tambouille;
