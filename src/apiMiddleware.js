import data from './data.json';

const randomizeOrder = (source) => {
  const dest = {};
  Object.keys(source).sort(() => Math.random() > 0.5).forEach((key) => {
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
