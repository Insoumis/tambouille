import React from 'react';

import 'normalize.css';
import './Root.scss';

import SplashScreen from './SplashScreen';
import Tambouille from '../containers/Tambouille';

const Root = () => (
  <div>
    <SplashScreen />
    <Tambouille />
  </div>
);

export default Root;
