import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MainRoute } from '../routes/MainRoute';
import store from '../store';

export default class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <MainRoute />
      </Provider>
    )
  }
}
