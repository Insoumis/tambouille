require('smoothscroll-polyfill').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './configureStore';
import Root from './components/Root';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
})()

if (module.hot) {
  module.hot.accept('./components/Root', () => { render(Root); });
}
