import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Chat from '../components/Chat'
import Home from '../components/Home'
import TaskList from '../components/TaskList'
import { View, Text } from 'react-native';

export const MainRoute = StackNavigator({
  TaskList: { screen: TaskList },
  Chat: { screen: Chat },
  Chat: { screen: Chat }
})
