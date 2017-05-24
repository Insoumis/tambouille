import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAll } from '../reducers';

import View from '../components/MainScreen';

class MainScreen extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);

    props.dispatch({
      type: 'GET',
      method: 'get',
    });
  }

  render() {
    return <View items={this.props.items} />;
  }
}

const mapStateToProps = state => ({
  items: getAll(state),
});

export default connect(mapStateToProps)(MainScreen);
