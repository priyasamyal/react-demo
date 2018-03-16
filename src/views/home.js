/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, Image, Alert} from 'react-native';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  View,
} from 'native-base';
import Swiper from 'react-native-swiper';
/**imports styles */
import text from '../style/text.js';
import colorScheme from '../style/colorScheme.js';
import theme from '../style/theme.js';
import containers from '../style/containers.js';

//custom components imports
import CustomHeader from '../components/customHeader';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
const Slider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
  </View>
);
const {width} = SCREEN_WIDTH;
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width,
  },
};
export default class HomePage extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: (
      <Icon
        name="ios-menu"
        style={{paddingLeft: 10}}
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
    drawerLabel: 'HOME',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../public/imgs/home.png')}
        style={{width: 15, height: 15}}
      />
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      imageSlider: [
        "require('../../public/imgs/producer_bg.png')",
        "require('../../public/imgs/slide.jpg')",
      ],
      test: 'ji',
    };
    console.log(this.state);
  }

  render() {
    return (
      <View>
        <CustomHeader
          title="Home"
          drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
          search_click={() => this._onSearchClick()}
          cart_click={() => this._onCartClick()}
        />

        <View style={{flex: 1, height: 20}}>
          <Swiper height={240}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../../public/imgs/producer_bg.png')}
              />
            </View>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../../public/imgs/slide.jpg')}
              />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }

  _onSearchClick = () => {
    Alert.alert('Search Click...');
  };
  _onCartClick = () => {
    Alert.alert('Cart Click...');
  };
}
