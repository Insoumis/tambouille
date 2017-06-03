import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import css from './ListItem.scss';

import macron from './assets/macron.jpg';

const ListItem = ({ item }) => (
  <Link className={css.module} to={`/candidats/${item.id}`}>
    <article>
      <img src={macron} alt={item.candidat_name} height="170" width="170"/>
      <p>{item.dep_num} - {item.circo}</p>
      <h3>{item.candidat_name}</h3>
    </article>
  </Link>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    candidat_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
