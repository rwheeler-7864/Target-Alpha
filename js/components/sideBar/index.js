
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { View, Text, Icon, List, ListItem, Content,Thumbnail } from 'native-base';

import styles from './style';
import { closeDrawer } from '../../actions/drawer';
import { Actions, ActionConst } from 'react-native-router-flux';
import PropTypes from 'prop-types';
const cover = require('../../../images/cover-default.png');
const profile = require('../../../images/profile-default.png');

const mobilePotrait = styles.potrait;
const shirt = styles.shirt;
const cut = styles.cut;
const construct = styles.construct;
const car = styles.car;
const copy = styles.copy;


class SideBar extends Component {

  static propTypes = {
    closeDrawer: PropTypes.func,
     }

  render() {
    return (
      <Content style={{ backgroundColor: '#fff' }} >
        
        <Content foregroundColor={'#000'} style={{...styles.list, paddingTop: 10 }}>
          <ListItem button onPress={() => {Actions.profile(); this.props.closeDrawer();}} style={styles.links2} >
            <Text style={styles.linkText}>Profile</Text>
          </ListItem>
         
          <ListItem button onPress={() => {Actions.settings(); this.props.closeDrawer();}} style={styles.links2} >
            <Text style={styles.linkText}>Settings</Text>
          </ListItem>
          </Content>
        <ListItem button onPress={() => { Actions.login({ type: ActionConst.RESET }); this.props.closeDrawer(); }} iconLeft style={styles.links} >
            <View style={styles.sidebarList} onPress={this.props.closeDrawer}>
              <View style={{ ...styles.sidebarIconView, ...styles.log }} >
                <Icon active name="power" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.linkText}>Logout</Text>
            </View>
          </ListItem>

      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(SideBar);
