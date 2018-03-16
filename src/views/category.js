/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import text from '../style/text.js';
import colorScheme from '../style/colorScheme.js';
import theme from '../style/theme.js';
import containers from '../style/containers.js';
import position from '../style/position.js';
import {
  SCREEN_HEIGHT,
  } from '../constants';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class CategoryPage extends Component{
  render() {
    return (
      <View style={[containers.container,{ height: SCREEN_HEIGHT,backgroundColor: colorScheme.color1}]}>
      
        <Text style={[text.welcome,{color: theme.base}]}>
          Welcome to React Native!Page
        </Text>
        <Text style={text.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={text.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

