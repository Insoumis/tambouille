import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import View from '../components/MainScreen';

class MainScreen extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    props.dispatch({
      type: 'GET',
      method: 'get',
    });
  }

  render() {
    return <View />;
  }
}

export default connect()(MainScreen);
