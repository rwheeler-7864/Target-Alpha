import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import { Container, View, Text, Button, Icon, Item, Input, Switch, Thumbnail, Header, Left, Right , Title} from 'native-base';
import styles from './styles';
import { Font } from 'expo';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating';
import { Actions, ActionConst } from 'react-native-router-flux';
import { openDrawer } from '../../actions/drawer';

import FooterTabs from '../footerTabs';
import Swiper from 'react-native-swiper';

const logo = require('../../../images/whitelogo.png');
const slideimages = [
  {
    source: require('../../../images/Trends.jpg')
  },
  {
    source: require('../../../images/Trends.jpg')
  },
  {
    source: require('../../../images/Trends.jpg')
  }
]
const slideimages2 = [
  {
    source: require('../../../images/Tips.jpg')
  },
  {
    source: require('../../../images/Tips.jpg')
  },
  {
    source: require('../../../images/Tips.jpg')
  }
]
const slideimages3 = [
  {
    source: require('../../../images/Tutorial.jpg')
  },
  {
    source: require('../../../images/Tutorial.jpg')
  },
  {
    source: require('../../../images/Tutorial.jpg')
  }
]
class Community extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'JosefinSans': require('../../../assets/josefin-sans/JosefinSans-Bold.ttf'),
      'JosefinSans-Thin': require('../../../assets/josefin-sans/JosefinSans-Thin.ttf'),
      'JosefinSans-Light': require('../../../assets/josefin-sans/JosefinSans-Light.ttf'),
      'FreshScript': require('../../../assets/FreshScript.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container >
        <Header style={{backgroundColor: 'white', borderBottomWidth: 0, shadowColor: '#ccc', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 3, height: 95 }}>
            <Left style={{minWidth: 65}}>
              <Item  onPress={()=> Actions.home()} style={{borderBottomWidth:0}}>
                <Thumbnail style={{height: 60, width: 60}} source={logo}/>
              </Item>
            </Left>
            <View style={{marginTop: 25}}>
              <Text style={{fontSize:16, color: '#B51E56', letterSpacing: 0.5, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                Hi, Jessica!
              </Text>
              <Text style={{fontSize:10,  marginTop: 5,fontFamily:'700', color: '#000', fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                Your beauty profile is 80% complete
              </Text>
            </View>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView>
          <View style={{height: 105, borderWidth: 5, marginTop: 50, borderColor: "#b01e53", borderBottomWidth: 0}}>
            <Swiper size={100} autoplay nextButton={<FontAwesome name="angle-double-right" style={{ color: '#fff', fontSize: 20}} />} prevButton={<FontAwesome name="angle-double-left" style={{ color: '#fff', fontSize: 20}} />} activeDotColor="white" showsButtons={true} dotColor="transparent" dotStyle={{borderColor:'white', borderWidth: 1, width:6, height:6}} activeDotStyle={{width:6, height:6}}  paginationStyle={{bottom: 5}}>
              {
                slideimages.map((item, index) => (
                  <View key={index} style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.slideImage} source={item.source}/>
                  </View>
                ))
              }
            </Swiper>
          </View>
          <View style={{height: 105, borderWidth: 5, borderColor: "#b01e53", borderBottomWidth: 0}}>
            <Swiper size={100} autoplay nextButton={<FontAwesome name="angle-double-right" style={{ color: '#949494', fontSize: 20}} />} prevButton={<FontAwesome name="angle-double-left" style={{ color: '#4a4a4a', fontSize: 20}} />} activeDotColor="#4a4a4a" showsButtons={true} dotColor="transparent" dotStyle={{borderColor:'#4a4a4a', borderWidth: 1, width:6, height:6}} activeDotStyle={{width:6, height:6}}  paginationStyle={{bottom: 5}}>
              {
                slideimages2.map((item, index) => (
                  <View key={index} style={styles.slide}>
                    <View style={{position:"absolute", top:0, right: 0, width: 100, height:40}}>
                      <Text>
                        Share to receive a
                      </Text>
                      <Text>
                        <MaterialCommunityIcons name="star" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />SPECIAL OFFER<MaterialCommunityIcons name="star" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
                      </Text>
                    </View>
                    <Image resizeMode='stretch' style={styles.slideImage} source={item.source}/>
                  </View>
                ))
              }
            </Swiper>
          </View>
          <View style={{height: 110, borderWidth: 5, borderColor: "#b01e53"}}>
            <Swiper size={100} autoplay nextButton={<FontAwesome name="angle-double-right" style={{ color: '#fff', fontSize: 20}} />} prevButton={<FontAwesome name="angle-double-left" style={{ color: '#fff', fontSize: 20}} />} activeDotColor="white" showsButtons={true} dotColor="transparent" dotStyle={{borderColor:'white', borderWidth: 1, width:6, height:6}} activeDotStyle={{width:6, height:6}}  paginationStyle={{bottom: 5}}>
              {
                slideimages3.map((item, index) => (
                  <View key={index} style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.slideImage} source={item.source}/>
                  </View>
                ))
              }
            </Swiper>
          </View>
          
          <View style={{borderWidth: 2.5, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
            <View style={{borderWidth: 2.5, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>

              <Image source={require('../../../images/Conversations.jpg')} style={{height: 100, flex: 1, opacity: 0.5}} />
              <View style={{position: 'absolute', bottom: 16, left: 0, alignItems: 'center', flexDirection:'column', width: '100%', backgroundColor: 'transparent'}}>
                <Text style={{color: '#B51E56', fontSize: 20, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto', backgroundColor: 'transparent'}}>
                  conversations
                </Text>
              </View>
            </View>
            <View style={{borderWidth: 2.5, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>

              <Image source={require('../../../images/StoreEvents.jpg')} style={{height: 100, flex: 1, opacity: 0.5}} />
              <View style={{position: 'absolute', bottom: 10, left: 0, alignItems: 'center', flexDirection:'column', width: '100%',backgroundColor: 'transparent'}}>
                <Text style={{color: '#000', fontSize: 20, lineHeight: 20, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto',backgroundColor: 'transparent'}}>
                  store
                </Text>
                <Text style={{marginTop:-5, color: '#B51E56', fontSize: 25, lineHeight: 25 ,fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto',backgroundColor: 'transparent'}}>
                  events
                </Text>
              </View>
            </View>
            <View style={{borderWidth: 2.5, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>

              <Image source={require('../../../images/LiveEvents.jpg')} style={{height: 100, flex: 1, opacity: 0.5}} />
              <View style={{position: 'absolute', bottom: 10, left: 0, alignItems: 'center', flexDirection:'column', width: '100%',backgroundColor: 'transparent'}}>
                <Text style={{color: '#000', fontSize: 20, lineHeight: 20, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto',backgroundColor: 'transparent'}}>
                  live
                </Text>
                <Text style={{marginTop:-5, color: '#B51E56', fontSize: 25, lineHeight: 25 ,fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto',backgroundColor: 'transparent'}}>
                  events
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <View style={{flexDirection: 'column', flex:2, alignItems:'flex-end', paddingRight: 7}}>
              <View>
                <Text style={{marginTop: 3,fontSize: 18, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto', color: '#B51E56'}}>Get social with us</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto', fontSize: 9,color: '#4a4a4a', letterSpacing:-0.5}}>SHARE</Text><Text style={{fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto', fontSize: 9, color: '#B51E56',letterSpacing:-0.5}}> #TARGETBEAUTIFULYOU + </Text><Text style={{fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto', fontSize: 9,letterSpacing:-0.5,color: '#4a4a4a'}}>EARN REWARDS</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex:1, borderLeftColor: '#ccc', borderLeftWidth: 1, alignItems:'flex-start', padding:7}}>
              <Image source={require('../../../images/Facebook.png')}  style={{width:25,height:25, marginRight:5}}/>
              <Image source={require('../../../images/Instagram.png')}  style={{width:25,height:25, marginRight:5}}/>
              <Image source={require('../../../images/Twitter.png')}  style={{width:25,height:25, marginRight:5}}/>
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

export default connect(mapStateToProps, bindAction)(Community);
