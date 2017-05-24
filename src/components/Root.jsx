import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';
import './Root.scss';

import SplashScreen from './SplashScreen';
import MainScreen from '../containers/MainScreen';

const Root = () => (
  <Router>
    <div>
      <SplashScreen />
      <MainScreen />
    </div>
  </Router>
);

export default Root;
