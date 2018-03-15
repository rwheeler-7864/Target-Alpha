import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image,Platform } from 'react-native';
import { Icon, View, Button, InputGroup, Input,Item,Thumbnail } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import PropTypes from 'prop-types';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
const logo = require('../../../images/strapsale-logo.png');

class FooterTabs extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
  }
  render() {
    return (
      <View style={{ position: 'absolute',bottom: 0, width: '100%', height: 30, backgroundColor: '#c34097', alignItems:'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', height: 40, width: '80%', marginTop: -10, alignItems:'center', backgroundColor: '#4a4a4a', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
          <Item style={{borderBottomWidth:0}}>
            <Feather name="home" size={25} style={styles.footerIcon} onPress={() => Actions.home()} />
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <MaterialCommunityIcons name="cart-outline" size={25} style={styles.footerIcon}/>
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <Ionicons name="md-heart-outline" size={27} style={styles.footerIcon} />
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <FontAwesome name="commenting-o" size={25} style={styles.footerIcon} />
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <FontAwesome name="user-o" size={22} style={styles.footerIcon} />
          </Item>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(FooterTabs);
