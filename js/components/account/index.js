
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button,Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';

const profile = require('../../../images/profile-default.png');

class Account extends Component {
  state = {
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    phone: '015 - 668 - 5558',
    accountOwner: 'Jane Smith',
    address: '125 Colony Road',
    city: 'New York',
    state: 'NY, 10019',
    loyaltyCard: '123 - 98746 - 0987 - 087',
    favoriteProducts: [
      {number: "111-22-11", type: "Defined Gel", name: "Bobby Brown"},
      {number: "111-22-11", type: "Classic Black", name: "Maybelline"},
      {number: "333-22-45", type: "Ruby Woo", name: "Clinique"}
    ]
  };
  render() {
    // console.disableYellowBox = true;
      return (
        <Container style={{backgroundColor:'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20, backgroundColor:'white'}}>

          <Item style={{paddingLeft: 30, paddingRight: 30, borderBottomWidth: 0, marginBottom: 5}}>
            <Text style={{fontSize: 13, color: '#949494', fontWeight: '500'}}>
              Account
            </Text>
          </Item>
          <Item style={{paddingLeft: 30, paddingRight: 30, borderBottomWidth: 0, marginBottom: 25}}>
            <Text style={{fontSize: 25, color: '#4a4a4a', fontWeight: '500'}}>
              Target - {this.state.name}
            </Text>
          </Item>
          <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginBottom: 20, flexDirection: 'row', justifyContent:'space-between'}]}>
            <Button onPress={() => Actions.home()} style={{width: "30%", backgroundColor: "#c34097", borderRadius: 0, marginRight: "5%", justifyContent: "center", alignSelf: "center"}}>
              <Text style={{fontSize: 13, color: "white", textAlign: "center", fontWeight: "700"}}>
                Save
              </Text>
            </Button>
            <Button onPress={() => Actions.beautyProfile()} style={{width: "30%", backgroundColor: "#949494", borderWidth: 1, marginRight: "5%",borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}  onPress={() => Actions.beautyProfile()} >
              <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "#fff"}}>
                Next
              </Text>
            </Button>            
            <Button onPress={() => Actions.home()} style={{width: "30%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}  onPress={() => Actions.beautyProfile()} >
              <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "#949494"}}>
                Cancel
              </Text>
            </Button>
          </Item>
          <View style={styles.section}>
            <View style={{ borderTopColor: '#4a4a4a', borderTopWidth: 1, borderBottomColor: '#4a4a4a', borderBottomWidth: 1}}>
              <Text style={styles.header}>
                Personal Information
              </Text>
            </View>
            <View style={styles.beautyContentWrap}>
              <View style={styles.content}>
                 
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Account Owner:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Account Owner"
                      defaultValue={this.state.name}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Address:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Address"
                      defaultValue={this.state.address}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      City:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="City"
                      defaultValue={this.state.city}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      State / Zip:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="State / Zip"
                      defaultValue={this.state.state}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Phone:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Phone"
                      defaultValue={this.state.phone}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Email:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Email"
                      defaultValue={this.state.email}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Loyalty Card #:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Loyalty Card"
                      defaultValue={this.state.loyaltyCard}
                      placeholderTextColor="#949494"
                    />
                  </View>
                 </Item>


              </View>

            </View>
          </View>
          <View style={styles.section}>
            <View style={{ borderTopColor: '#4a4a4a', borderTopWidth: 1, borderBottomColor: '#4a4a4a', borderBottomWidth: 1}}>
              <Text style={styles.header}>
                Favorite Products
              </Text>
            </View>
            <View style={styles.beautyContentWrap}>
              <View style={[styles.content, {marginBottom: 120}]}>
                {
                  this.state.favoriteProducts.map((item, index) => (
                    <Item key={index} style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                      <View style = {{width: '33.33%'}}>
                        <Text style = {styles.productText}>
                          {item.number}
                        </Text>
                      </View>
                      <View>
                        <Text style = {styles.productText}>
                          {item.type}
                        </Text>
                      </View>
                      <View style = {{width: '33.33%'}}>
                        <Text style ={[styles.productText, {textAlign: 'right'}]}>
                          {item.name}
                        </Text>
                      </View>
                    </Item>
                  ))
                }
                
              </View>

            </View>
          </View>
          </ScrollView>
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

export default connect(mapStateToProps, bindAction)(Account);