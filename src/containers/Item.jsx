import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getItem } from '../reducers';

import View from '../components/Item';

const Item = ({ item }) => {
  if (item) {
    return <View item={item} />;
  }

  return false;
};

Item.defaultProps = {
  item: undefined,
};

Item.propTypes = {
  item: PropTypes.shape({}),
};

const mapStateToProps = (state, { match }) => ({
  item: getItem(state, match.params.id),
});

export default connect(mapStateToProps)(Item);
