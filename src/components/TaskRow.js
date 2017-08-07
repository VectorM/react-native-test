import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class TaskRow extends Component {
  static propTypes = {
    todo: PropTypes.object,
    task: PropTypes.string
  }
  render() {
    return (
      <Text>{ this.props.todo.task }...</Text>
    );
  }
}

