import { StyleSheet } from 'react-native';

const text = StyleSheet.create({
  drawerHeaderText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  p: {
      color: 'black',
      fontFamily: 'Open Sans',
      fontSize: 14,
    },
    title: {
      color: 'black',
      fontFamily: 'Open Sans',
      fontSize: 20,
    },
    number: {
      color: 'black',
      fontFamily: 'Open Sans',
      fontSize: 20,
    },
    button: {
      color: 'white',
      fontFamily: 'Open Sans',
      fontSize: 16,
      fontWeight: 'bold'
    },
    subTitle: {
      color: 'black',
      fontFamily: 'Open Sans',
      fontSize: 14,
    },
    sectionTitle: {
      color: 'black',
      fontFamily: 'Open Sans',
      fontSize: 16,
      fontWeight: '700',
    },
    shadow: {
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: 'black',
      shadowOpacity: 1
    },
    labelText: {
      color: 'white',
      fontFamily: 'Open Sans',
      fontSize: 10,
    },
 welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default text;