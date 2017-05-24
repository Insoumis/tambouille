import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import css from './ListItem.scss';

const ListItem = ({ item }) => (
  <Link className={css.module} to={`/tambouille/${item.id}`}>
    <article>
      <h3>{item.candidat_name}</h3>
      <p>{item.dep_num} - {item.dep_name} - circonscription n°{item.circo}</p>
    </article>
  </Link>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    candidat_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
