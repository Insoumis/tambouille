import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import smoothscroll from 'smoothscroll';

import { getItem } from '../reducers';

import View from '../components/Item';

const Item = ({ history, item }) => {
  if (item) {
    smoothscroll(document.querySelector('#mainScreen'));

    return <View history={history} item={item} />;
  }

  return false;
};

Item.defaultProps = {
  item: undefined,
};

Item.propTypes = {
  history: PropTypes.shape({}).isRequired,
  item: PropTypes.shape({}),
};

const mapStateToProps = (state, { match }) => ({
  item: getItem(state, match.params.id),
});

export default connect(mapStateToProps)(Item);
