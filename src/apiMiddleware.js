import data from './data.json';

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const randomizeOrder = (source) => {
  const dest = {};
  const keys =
  shuffle(Object.keys(source)).forEach((key) => {
    dest[key] = source[key];
  });
  return dest;
}

export default ({ dispatch }) => next => (action) => {
  if (!action.method) {
    return next(action);
  }

  if (action.method === 'get') {
    return dispatch({
      type: `${action.type}_SUCCESS`,
      payload: randomizeOrder(data),
    });
  }

  return false;
};
