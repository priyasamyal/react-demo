import React, { Component } from 'react';
import {Text,Image,StyleSheet} from 'react-native';
import { Icon, Button, Container, Header, Content, Left,Right,Body } from 'native-base'

    /**imports styles */
import text from '../style/text.js';
import colorScheme from '../style/colorScheme.js';
import theme from '../style/theme.js';
import containers from '../style/containers.js';



class CustomHeader extends Component {
    render() {
        return (
         <Header style={{backgroundColor:theme.base}}>
             <Left style={containers.header_left_container}>

                    <Button transparent  onPress={() => this.props.drawerOpen()}>
                        <Icon name="menu" style={{color:theme.white}} />
                    </Button>   

            </Left>

            <Body>
                  <Image  source={require('../../public/imgs/logo.png')}
                  style={{width: 130, height: 30}}    />
            </Body>
           
            <Right>
                    <Button transparent onPress={() => this.props.search_click()}>
                        <Icon name="search" style={{color:theme.white}}  />
                    </Button> 

                    <Button transparent  onPress={() => this.props.cart_click()}>
                        <Icon name="cart" style={{color:theme.white}}/>
                    </Button>
            </Right>
           
          </Header>
        );
    }
}


export default CustomHeader;