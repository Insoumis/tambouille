import PropTypes from 'prop-types';
import React from 'react';

import ListItem from './ListItem';

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <ListItem item={item} />
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
