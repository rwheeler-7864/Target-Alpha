
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Image, Platform, ScrollView, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { Container, View, Text, Button, Picker, Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Feather, MaterialIcons} from '@expo/vector-icons';
import FooterTabs from '../footerTabs';
import { openDrawer } from '../../actions/drawer';
import { ImagePicker, FaceDetector, Constants, Camera } from 'expo';

import { NativeAdsManager, InterstitialAdManager, BannerView, AdSettings } from 'react-native-fbads';
import FullAd from './FullAd';
AdSettings.addTestDevice(AdSettings.currentDeviceHash);
const adsManager = new NativeAdsManager('1912255062335197_1912257885668248');
class VirtualMakeOver extends Component {
  state = {
    isPhotoSelected: false,
    selectedPhotoUri: '',
  };
  async pickCamera() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ selectedPhotoUri: result.uri, isPhotoSelected: true });
      console.log(this.state.selectedPhotoUri)
    }
  }
  async pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ selectedPhotoUri: result.uri, isPhotoSelected: true });
      console.log(this.state.selectedPhotoUri)
    }
  }
  showFullScreenAd = () => {
    InterstitialAdManager.showAd('1912255062335197_1912257885668248')
      .then(didClick => {
        console.log(didClick);
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount(){
    this.showFullScreenAd();
  }
  onBannerAdPress = () => console.log('Ad clicked!');
  onBannerAdError = (event) => console.log('Ad error :(', event.nativeEvent);

  renderLandmarksOfFace(face) {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - (landmarkSize + 130) / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  }
  render() {
      var that=this;
      var detectedFaces;
      if(this.state.isPhotoSelected)
        detectedFaces=FaceDetector.detectFacesAsync(this.state.selectedPhotoUri,{detectLandmarks: FaceDetector.Constants.Landmarks.all})
      console.log(detectedFaces);
      return (
        <Container style={{backgroundColor:'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <View style={{alignItems:'center', flex:1, position: 'absolute', alignSelf: 'center'}}>
              <View style={{position:'relative', alignItems:'center'}}>
                <Text style={styles.topHeaderText}>Virtual Makeover</Text>
                <Text style={styles.bottomHeaderText}>Virtually apply makeup to your own face or choose a model.</Text>
              </View>
            </View>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>{!this.state.selectedPhotoUri?
          <ScrollView style={{marginTop: 20}}>
            <Item style={[styles.beautyContentItem, {flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center', marginBottom:20}]}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight: '700', color:'#4a4a4a'}}>Apply Makeup to a Your Face</Text>
            </Item>
            <Item style={styles.beautyContentItem}>
              <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 1}}>
                  <Item style={{alignItems:'center', flexDirection:'column', borderBottomWidth:0}} onPress={this.pickCamera.bind(this)}>
                    <Image source={require('../../../assets/iconPNG/Grey/Icon-12.png')} />
                    <Text style={{fontSize:14, fontWeight: '500', color:'#949494'}}>Take Photo</Text>
                  </Item>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'center', flex: 1}}>
                  <Item style={{alignItems:'center', flexDirection:'column', borderBottomWidth:0}} onPress={this.pickImage.bind(this)}>
                    <Image source={require('../../../assets/iconPNG/Grey/Icon-16.png')} />
                    <Text style={{fontSize:14, fontWeight: '500', color:'#949494'}}>Upload Photo</Text>
                  </Item>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'flex-end', flex: 1}}>
                  <Item style={{alignItems:'center', flexDirection:'column', borderBottomWidth:0}} onPress={()=> Actions.readyToApply()}>
                    <Image source={require('../../../assets/iconPNG/Grey/Icon-13.png')} />
                    <Text style={{fontSize:14, fontWeight: '500', color:'#949494'}}>Live Video</Text>
                  </Item>
                </View>
              </View>
            </Item>
            <Item style={[styles.beautyContentItem, {flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center', marginTop:40}]}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight: '700', color:'#4a4a4a'}}>Apply Makeup to a Model Face</Text>
            </Item>
            <View style={{flexDirection:'column', justifyContent:'space-between', flex:1}}>
              <View style={[styles.beautyContentItem, {flexDirection:'row', flex:1, marginTop:30}]}>
                  <Image style={{width:'45%', height: 120, resizeMode:'contain', marginRight: '10%', borderWidth: 3, borderColor: '#c34097'}} source={require('../../../images/facial1.png')} />
                  <Image style={{width:'45%', height: 120, resizeMode:'contain', borderWidth: 3, borderColor: '#c34097'}} source={require('../../../images/facial1.png')} />
               
              </View>
              <View style={[styles.beautyContentItem, {flexDirection:'row', flex:1, marginTop:20}]}>
                  <Image style={{width:'45%', height: 120, resizeMode:'contain', marginRight: '10%', borderWidth: 3, borderColor: '#c34097'}} source={require('../../../images/facial3.png')} />
                  <Image style={{width:'45%', height: 120, resizeMode:'contain', borderWidth: 3, borderColor: '#c34097'}} source={require('../../../images/facial4.png')} />
                
              </View>
            </View>
            <View style={[styles.beautyContentItem]}>
              <View style={{flex: 1, marginTop:40,  height: 100, borderWidth:3, borderColor:'#c34097', marginBottom:60}}>
              <FullAd adsManager={adsManager} />
              <BannerView
                type="large"
                placementId="1912255062335197_1912257885668248"
                onPress={this.onBannerAdPress}
                onError={this.onBannerAdError}
              />
              </View>
            </View>
          </ScrollView>
          :
          <View style={{backgroundColor:'#000', flex:1,
    justifyContent: 'center'}}>
            <Image source={{uri:this.state.selectedPhotoUri}} style={{flex:1, resizeMode:'cover'}}/>
          </View>}
          {
            !this.state.isPhotoSelected && <FooterTabs/>
          }
          {
            detectedFaces && detectedFaces.faces && detectedFaces.faces.map(function(face){
              that.renderLandmarksOfFace(face)
            }) 
          }
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

export default connect(mapStateToProps, bindAction)(VirtualMakeOver);