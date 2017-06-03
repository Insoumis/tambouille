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
    title: 'Les Petits Cadeaux',
    description: "La politique, c’est avant tout le partage et l’entraide entre camarades. C’est ainsi que le Parti Socialiste offre gracieusement des circonscriptions à ses amis de La République en marche, qui ne sont, d'ailleurs, pas en reste en proposant d’autres circonscriptions aux Républicains ou au Parti Socialiste. Après tout, en politique, l’important c’est de se serrer les coudes.",
    icon: 'ico_cadeau',
    catPicture: 'petits.cadeaux'
  },
  2: {
    name: 'Double|Face',
    description: "La politique, c’est avant tout savoir s'adapter à toutes les situations, quitte à se retrouver sur deux fronts en même temps. Certains n’hésitent donc pas à se présenter aux côtés de La République en marche, tout en étant investis par le Parti Socialiste. Qu’à cela ne tienne : ils seront sermonnés par leur parti. Cependant, personne ne viendra prendre leur place et s’opposer à eux. Après tout, en politique, l’important c’est de gagner.",
    icon: 'ico_double_face',
    catPicture: 'double.face'
  },
  3: {
    name: 'Alibi|Vert',
    description: "La politique, c’est avant tout être un bon stratège. Alliances avec les uns, trahisons avec les autres… C’est ainsi que le Parti Socialiste, soucieux de ne pas se fâcher avec ses anciens camarades désormais en marche, a préféré laisser à Europe Écologie Les Verts le soin de les affronter. Après tout, en politique, l’important c’est de participer.",
    icon: 'ico_alibi_vert',
    catPicture: 'alibi.vert'
  },
  4: {
    name: 'Place|Libre',
    description: "La politique, c’est avant tout savoir quand s’arrêter. C’est ainsi que certains candidats du Parti Socialiste se sont retirés pour pouvoir soutenir des candidats de La République en Marche... Après tout, en politique, l’important c’est de défendre ses idées.",
    icon: 'ico_fauteuil',
    catPicture: 'place.libre'
  },
  5: {
    name: 'Macron|Compatible',
    title: 'Macron-Compatible',
    description: "La politique, c’est avant tout savoir se planquer. C’est ainsi que certains candidats socialistes, passés maîtres dans l’art de la dissimulation, contribuent à la confusion générale en souhaitant soutenir un gouvernement dont le premier ministre est de droite. Après tout, en politique, l’important c’est d’être bien entouré.",
    icon: 'ico_macronlover',
    catPicture: 'macron.compatibilite'
  },
  6: {
    name: 'Coup|De Bluff',
    description: "La politique, c’est avant tout un numéro de prestidigitation. Annoncer que l’on va présenter une majorité de candidats issus de la société civile, comme La République en marche, avant d’ajouter tous les élus MoDem. Ou encore, y placer des maires, des conseillers de cabinets ministériels… Après tout, en politique, l’important c’est de savoir faire illusion.",
    icon: 'ico_bluff',
    catPicture: 'coup.bluff'
  },
  7: {
    name: '100%|Salades',
    description: "La politique, c’est avant tout avoir le sens de l’innovation. C’est ainsi que certains candidats de La République en marche sont investis en ayant cumulé plus de trois mandats dans leur carrière, malgré les promesses données. Après tout, en politique, l’important c’est le renouvellement.",
    icon: 'ico_salade',
    catPicture: '100.salade'
  },
};
