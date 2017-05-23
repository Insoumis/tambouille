import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return Object.keys(action.payload);
    default:
      return state;
  }
};

const tambouilles = combineReducers({
  byId,
  allIds,
});

const app = combineReducers({
  tambouilles,
});

export default app;

export const getAll = createSelector(
  state => state.tambouilles.byId,
  state => state.tambouilles.allIds,
  (memById, memAllIds) => memAllIds.map(id => memById[id]),
);
