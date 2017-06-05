import data from './data.json';

export default ({ dispatch }) => next => (action) => {
  if (!action.method) {
    return next(action);
  }

  if (action.method === 'get') {
    return dispatch({
      type: `${action.type}_SUCCESS`,
      payload: data,
    });
  }

  return false;
};
