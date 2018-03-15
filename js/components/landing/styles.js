

const React = require('react-native');

const { StyleSheet, Platform } = React;

export default{
  shadow: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 0
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20
  },
  headerText: {
    color: '#4a4a4a',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 25
  },
  registerButton: {
    alignSelf: 'stretch',
    borderRadius: 0,
    paddingTop: 25,
    paddingBottom: 25,  
    justifyContent: 'center',
    backgroundColor: '#c34097',
    marginBottom: 15,
  },
  termsText: {
    flexDirection:'column',
    fontSize: 14,
    fontWeight: '700',
    color: '#949494',
  },
  textWrap: {
    flexWrap: 'wrap',
    alignItems: 'flex-start', 
    flexDirection:'row', 
    justifyContent: 'center', 
    paddingBottom: 20
  },
  hyperText: {
    textDecorationLine: 'underline',
    color: '#949494',
    fontWeight: '700',
    fontSize: 14,
    flexDirection:'column',
  },
  facebookIcon: {
    color: "#4a4a4a"
  },
  twitterIcon: {
    color: "#4a4a4a"
  },
  normalButton: {
    alignSelf: 'stretch',
    borderRadius: 0,
    borderColor: '#4a4a4a',
    paddingTop: 25,
    paddingBottom: 25,  
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
}
