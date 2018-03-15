
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback, Switch } from 'react-native';
import { Container, View, Text, Button,Content, Icon, Card, Item, Input, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';
import FooterTabs from '../footerTabs';

const profile = require('../../../images/profile-default.png');

class NotificationSettings extends Component {
  state = {
    productReminders: false,
    pushAccountActivity: false,
    productAnnouncements: false,
    ads: false,
    messages: false,
    textAccountActivity: false
  };
  render() {
    // console.disableYellowBox = true;
      return (
        <Container>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={styles.topHeaderText}>Notifications</Text>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
          <View style={styles.section}>
            <Text style={styles.header}>
              Push Notifications
            </Text>
            <View style={styles.beautyContentWrap}>
              
              <View style={styles.content}>
                
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={[styles.leftEl, {paddingBottom: 0}]}>
                      Product Reminders
                    </Text>
                    <Text style={{fontSize: 9, color: '#949494', paddingBottom: 15, fontWeight: '700'}}>
                      Holiday and others
                    </Text>
                  </View>
                  <View>
                    <Switch value={this.state.productReminders} onValueChange={(value) => this.setState({productReminders: value})} style={{borderWidth:0}} />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={[styles.leftEl, {paddingBottom: 0}]}>
                      Account Activity
                    </Text>
                    <Text style={{fontSize: 9, color: '#949494', paddingBottom: 15, fontWeight: '700'}}>
                      Changes made to your account
                    </Text>
                  </View>
                  <View>
                    <Switch value={this.state.pushAccountActivity} onValueChange={(value) => this.setState({pushAccountActivity: value})} style={{borderWidth:0}} />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={[styles.leftEl, {paddingBottom: 0}]}>
                      Product Announcements
                    </Text>
                    <Text style={{fontSize: 9, color: '#949494', paddingBottom: 15, fontWeight: '700'}}>
                      Feature update, Sale alerts
                    </Text>
                  </View>
                  <View>
                    <Switch value={this.state.productAnnouncements} onValueChange={(value) => this.setState({productAnnouncements: value})} style={{borderWidth:0}} />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={[styles.leftEl, {paddingBottom: 0}]}>
                      Ads
                    </Text>
                    <Text style={{fontSize: 9, color: '#949494', paddingBottom: 15, fontWeight: '700'}}>
                      Ideas and price alerts
                    </Text>
                  </View>
                  <View>
                    <Switch value={this.state.ads} onValueChange={(value) => this.setState({ads: value})} style={{borderWidth:0}} />
                  </View>
                </Item>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>
              Text & Email Notifications
            </Text>
            <View style={styles.beautyContentWrap}>
              
              <View style={styles.content}>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={[styles.leftEl, {paddingBottom: 0}]}>
                      Messages
                    </Text>
                    <Text style={{fontSize: 9, color: '#949494', paddingBottom: 15, fontWeight: '700'}}>
                      Repurchase reminders
                    </Text>
                  </View>
                  <View>
                    <Switch value={this.state.messages} onValueChange={(value) => this.setState({messages: value})} style={{borderWidth:0}} />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={[styles.leftEl, {paddingBottom: 0}]}>
                      Account Activity
                    </Text>
                    <Text style={{fontSize: 9, color: '#949494', paddingBottom: 15, fontWeight: '700'}}>
                      Changes made to your account
                    </Text>
                  </View>
                  <View>
                    <Switch value={this.state.textAccountActivity} onValueChange={(value) => this.setState({textAccountActivity: value})} style={{borderWidth:0}} />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 0}]}>
                  <View style={{flexDirection:'row', marginTop: 30}}>
                    <Button onPress={() => Actions.pop()}
                      style={[styles.popupButton, {width: '45%', marginRight: '10%', backgroundColor: '#c34097'}]}
                    >
                      <Text style={{ color:'#fff', textAlign: 'center', fontSize: 16, fontWeight: '500' }}>Done</Text>
                    </Button>
                    <Button onPress={() => Actions.pop()}
                      style={[styles.popupButton, {width: '45%', backgroundColor: '#fff', borderWidth: 1, borderColor: '#9a9a9a'}]}
                    
                    >
                      <Text style={{ color:'#9a9a9a', textAlign: 'center', fontSize: 16, fontWeight: '500' }}>Cancel</Text>
                    </Button>
                  </View>
                </Item>
              </View>
            </View>
          </View>
          </ScrollView>
          <FooterTabs/>
        </Container>
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

export default connect(mapStateToProps, bindAction)(NotificationSettings);