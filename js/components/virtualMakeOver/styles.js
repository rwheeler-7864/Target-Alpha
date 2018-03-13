

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

const deviceWidth = Dimensions.get('window').width;

export default{
  topHeaderText: {
    color: '#4a4a4a',
    fontSize: 18,
    marginTop: 18,
    fontWeight: '700',
  },
  bottomHeaderText:{
    fontSize: 9,
    color: '#4a4a4a',
  },
  beautyContentItem: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomWidth: 0,
  },
};
