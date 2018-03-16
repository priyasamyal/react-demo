import {StyleSheet} from 'react-native';

const containers = StyleSheet.create({
  drawerHeader: {
    height: 50,
    backgroundColor: 'white',
  },
  header_left_container: {
    flex: 0,
    paddingLeft: 6,
    width: 40,
  },
  home_container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
  },
});

export default containers;
