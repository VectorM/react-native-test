import React, { Component } from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: "Welcome"
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Go to Chat Component"
        />
      </View>
    );
  }
}
