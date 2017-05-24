import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';
import './Root.scss';

import SplashScreen from './SplashScreen';
import MainScreen from '../containers/MainScreen';

import config from '../../config';

const Root = () => (
  <Router basename={config[process.env.NODE_ENV].basename}>
    <div>
      <SplashScreen />
      <MainScreen />
    </div>
  </Router>
);

export default Root;
