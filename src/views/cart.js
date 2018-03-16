import React, {Component} from 'react';
import {View} from 'react-native';

/**imports styles */
import text from '../style/text.js';
import colorScheme from '../style/colorScheme.js';
import theme from '../style/theme.js';
import containers from '../style/containers.js';
export default class CartPage extends Component {
  state = {};
  render() {
    return (
      <View
        style={[containers.container, {backgroundColor: colorScheme.color1}]}
      >
        <Text>CartPage</Text>
      </View>
    );
  }
}
