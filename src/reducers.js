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
    name: 'Petits|Cadeaux',
    description: 'Quand le PS laisse une circonscription à un copain EM ou quand EM laisse un circonscription aux copains PS et LR.',
    icon: 'ico_cadeau',
  },
  2: {
    name: 'Double|Face',
    description: 'Les doubles investitures (candidats présents sur liste EM et PS).',
    icon: 'ico_double_face',
  },
  3: {
    name: 'Alibi|Vert',
    description: 'La politique, c’est aussi l’art des multiples alliances et des trahisons déguisées. En effet, le Parti Socialiste, ne souhaitant pas se confronter à ses anciens camarades partis chez En Marche, a décidé de sceller un accord électorale avec Europe Ecologie Les Verts, leur cédant les cirsconscriptions dans lesquelles cet affrontement avec leurs  compères auraient pu avoir lieu.',
    icon: 'ico_alibi_vert',
  },
  4: {
    name: 'Place|Libre',
    description: 'Circonscriptions où le PS a abandonné l\'investiture au profit d’EM.',
    icon: 'ico_fauteuil',
  },
  5: {
    name: 'Macron|Compatible',
    description: 'Les candidats PS macron-compatibles.',
    icon: 'ico_macronlover',
  },
  6: {
    name: 'Coup|De Bluff',
    description: 'Étude statistique sur la société civile EM.',
    icon: 'ico_bluff',
  },
  7: {
    name: '100%|Salades',
    description: 'Candidats EM allant à l\'encontre de l\'engagement pris de ne pas investir de personnes ayant déjà fait 3 mandats parlementaires.',
    icon: 'ico_salade',
  },
};
