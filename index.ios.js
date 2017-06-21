/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Reflux from 'reflux';
import { StackNavigator } from 'react-navigation';
const NovelSearch = require('./ZZPages/NovelSearch/NovelSearch.js');

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    let t = this;
    return (
      <NovelSearch />
    );
  }
}

const NovelRN = StackNavigator({
    Home: { screen: NovelSearch },
});

AppRegistry.registerComponent('NovelRN', () => NovelRN);
