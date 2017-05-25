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

const byCategory = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return Object.keys(action.payload).reduce((acc, val) => {
        const item = action.payload[val];
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
      }, {});
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

const items = combineReducers({
  byId,
  byCategory,
  allIds,
});

const app = combineReducers({
  items,
});

export default app;

const getAll = createSelector(
  state => state.items.byId,
  state => state.items.allIds,
  (memById, memAllIds) => memAllIds.map(id => memById[id]),
);

export const getAllInCategory = (state, catId = 0) => {
  if (catId === 0) {
    return getAll(state);
  }

  if (state.items.byCategory[catId]) {
    return state.items.byCategory[catId];
  }

  return [];
};

export const getItem = (state, id) => state.items.byId[id];

export const filters = {
  1: {
    name: 'Le petit cadeau',
    description: 'Les circonscriptions cadeaux : quand le PS laisse une circonscription à un copain EM ou à l\'inverse quand EM laisse un circonscription aux copains PS et LR.',
  },
  2: {
    name: 'Le don d\'ubiquité',
    description: 'Les doubles investitures (candidats présents sur liste EM et PS).',
  },
  3: {
    name: 'Green washing',
    description: 'Accord EELV permettant au PS de ne pas présenter de candidats face à des ex-copains PS devenu EM.',
  },
  4: {
    name: 'Les PS disparus',
    description: 'Circonscriptions où le PS a abandonné l\'investiture au profit d’EM.',
  },
  5: {
    name: 'Les PS en marche',
    description: 'Les candidats PS macron-compatibles.',
  },
  6: {
    name: 'La "société civile"',
    description: 'Étude statistique sur la société civile EM.',
  },
  7: {
    name: 'Les cumulards',
    description: 'Candidats EM allant à l\'encontre de l\'engagement pris de ne pas investir de personnes ayant déjà fait 3 mandats parlementaires.',
  },
};
