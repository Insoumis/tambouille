import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getAllInCategory } from '../reducers';

import View from '../components/List';

const List = ({ items, match }) => <View category={match.params.catId} items={items} />;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, { match }) => ({
  items: getAllInCategory(state, match.params.catId),
});

export default connect(mapStateToProps)(List);
