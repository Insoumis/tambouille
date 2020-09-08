import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getVisibleInCategory, getAvailableFilters } from '../reducers';

import View from '../components/List';

const List = ({ items, visibilityFilters, availableFilters, addFilter, resetFilters, match }) => (
  <View
    category={match.params.catId}
    items={items}
    activeFilters={visibilityFilters}
    resetFilters={resetFilters}
    addFilter={addFilter}
    visibilityFilters={availableFilters}
  />
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, { match }) => {
  const items = getVisibleInCategory(state, match.params.catId);
  return {
    items,
    availableFilters: getAvailableFilters(items),
    visibilityFilters: state.visibilityFilters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addFilter: (filter) => {
    dispatch({
      type: 'ADD_FILTER',
      payload: filter,
    });
  },
  resetFilters: () => {
    dispatch({ type: 'RESET_FILTERS' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
