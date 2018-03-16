/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator , DrawerNavigator,DrawerItems} from 'react-navigation';
import {Text,Image} from 'react-native';
import { Container, Content, Header, Body } from 'native-base'
            /**imports pages */
import HomePage from './views/home.js';
import CategoryPage from './views/category.js';
              /**imports styles */
import containers from './style/containers.js';
import text from './style/text.js';
import theme from './style/theme.js';

const router = StackNavigator({
  home: {screen: HomePage},
  category:{screen:CategoryPage},
 });

 const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={[containers.drawerHeader,{backgroundColor: theme.base}]}>
      <Body>
         <Text style={[text.drawerHeaderText,{color: theme.white}]}>Filters</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
 </Container>

);
 const my_menu=DrawerNavigator(
  {
    HOME:{
      screen:HomePage,
    },
    PLAYALL:{
      path:'/',
      screen:CategoryPage,
      navigationOptions: ({ navigation }) => ({
        title:'PLAY ALL',
        drawerIcon: () => (
          <Image
            source={require('../public/imgs/play.png')}
            style={{width: 15, height: 15}}
          />
        )
      }),
    },
    // CHECKOUT:{
    //   path:'/',
    //   screen:router,
    //   navigationOptions: ({ navigation }) => ({
    //     title:'CHECKOUT',
    //     drawerIcon: () => (
    //       <Image
    //        source={require('../public/imgs/checkout.png')}
    //         style={{width: 15, height: 15}}
    //       />
    //     )
    //   }),
    // },
    // CONTACTUS:{
    //   path:'/',
    //   screen:router,
    //   navigationOptions: ({ navigation }) => ({
    //     title:'CONTACT US',
    //     drawerIcon: () => (
    //       <Image
    //        source={require('../public/imgs/contact-us.png')}
    //         style={{width: 15, height: 18}}
    //       />
    //     )
    //   }),
    // }
 },
  {
   initialRouteName:'HOME',
    drawerPosition:'left',
    contentOptions: {
    activeTintColor: 'black',

   },
   contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  
})


export default my_menu;

 


