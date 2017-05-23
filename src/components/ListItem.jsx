import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({ item }) => (
  <li>
    <article>
      <h3>{item.candidat_name}</h3>
      <p>{item.dep_num} - {item.dep_name} - circonscription n°{item.circo}</p>
    </article>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    candidat_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
