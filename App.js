/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

/**   */


import {Platform} from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableNativeFeedback
} from 'react-native';

const toast = (text = "Default text", time = ToastAndroid.LONG, location = ToastAndroid.BOTTOM, xoffset = 0, yoffset = 50) => {
  ToastAndroid.showWithGravityAndOffset(
    text,
    time,
    location,
    xoffset,
    yoffset
  );
};

type Props = {};
export default class App extends Component<Props> {

  state = {
    img1st: styles.imageBigFaded,
    img2st: styles.imageBigFaded,
    img3st: styles.imageFaded,
    img4st: styles.imageFaded,
    img5st: styles.imageFaded,
    img6st: styles.imageBigFaded,
    img7st: styles.imageBigFaded
  }


  changeImage3(event) {
    let st = (this.state.img3st== styles.imageFaded) ? styles.image :styles.imageFaded;

    this.setState({
      img3st: st
    });

    toast();
    this.AllClear(img1 = styles.imageBig, img2 = styles.imageBig, img3 = styles.imageFaded, img4 = styles.image,
             img5 = styles.image, img6 = styles.imageBig, img7 = styles.imageBig);
  }

  changeImage4(event) {
    let st = (this.state.img4st== styles.imageFaded) ? styles.image :styles.imageFaded;

    this.setState({
      img4st: st
    });

    toast('A');
    this.AllClear(img1 = styles.imageBig, img2 = styles.imageBig, img3 = styles.image, img4 = styles.imageFaded,
             img5 = styles.image, img6 = styles.imageBig, img7 = styles.imageBig);
  }

  changeImage5(event) {
      let st = (this.state.img5st== styles.imageFaded) ? styles.image :styles.imageFaded;

      this.setState({
        img5st: st
      });

      toast('B');
      this.AllClear(img1 = styles.imageBig, img2 = styles.imageBig, img3 = styles.image, img4 = styles.image,
               img5 = styles.imageFaded, img6 = styles.imageBig, img7 = styles.imageBig);
  }

  changeImage1(event) {
    let st = (this.state.img1st== styles.imageBigFaded) ? styles.imageBig :styles.imageBigFaded;

    this.setState({
      img1st: st
    });

    toast('C');
    this.AllClear(img1 = styles.imageBigFaded, img2 = styles.imageBig, img3 = styles.image, img4 = styles.image,
             img5 = styles.image, img6 = styles.imageBig, img7 = styles.imageBig);
  }

  changeImage2(event) {
      let st = (this.state.img2st== styles.imageBigFaded) ? styles.imageBig :styles.imageBigFaded;

      this.setState({
        img2st: st
      });

      toast('D');
      this.AllClear(img1 = styles.imageBig, img2 = styles.imageBigFaded, img3 = styles.image, img4 = styles.image,
               img5 = styles.image, img6 = styles.imageBig, img7 = styles.imageBig);
}

  changeImage6(event) {
    let st = (this.state.img6st== styles.imageBigFaded) ? styles.imageBig :styles.imageBigFaded;

    this.setState({
      img6st: st
    });

    toast('E');
    this.AllClear(img1 = styles.imageBig, img2 = styles.imageBig, img3 = styles.image, img4 = styles.image,
             img5 = styles.image, img6 = styles.imageBigFaded, img7 = styles.imageBig);

  }

  changeImage7(event) {
    let st = (this.state.img7st== styles.imageBigFaded) ? styles.imageBig :styles.imageBigFaded;

    this.setState({
      img7st: st
    });

    toast('F');
    this.AllClear(img1 = styles.imageBig, img2 = styles.imageBig, img3 = styles.image, img4 = styles.image,
             img5 = styles.image, img6 = styles.imageBig, img7 = styles.imageBigFaded);
}


  AllClear(img1 = styles.imageBig, img2 = styles.imageBig, img3 = styles.image, img4 = styles.image,
           img5 = styles.image, img6 = styles.imageBig, img7 = styles.imageBig) {

    let logical = this.state.img1st == img1 && this.state.img2st == img2 && this.state.img3st == img3 && this.state.img4st == img4 &&
          this.state.img5st == img5 && this.state.img6st == img6 && this.state.img7st == img7
    if (logical){
      toast(
        'All clear',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        0,
        0
      );
    }
  }



  render() {

    return (
      <View style= {styles.container}>
        <View style= {styles.text}>
        <Text style= {styles.text}> Title: </Text>
        </View>


        <View style={{flex: 0.92, flexDirection: 'row', alignContent: 'stretch'}}>

          <TouchableNativeFeedback onPress={this.changeImage1.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img1st}>
            </Image>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={this.changeImage2.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img2st}>
            </Image>
          </TouchableNativeFeedback>

        </View>

        <View style={styles.empty2} />

        <View style={{flex: .75, flexDirection: 'row'}}>

          <TouchableNativeFeedback onPress={this.changeImage3.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img3st}>
            </Image>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={this.changeImage4.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img4st}>
            </Image>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={this.changeImage5.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img5st}>
            </Image>
          </TouchableNativeFeedback>

        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>

          <TouchableNativeFeedback onPress={this.changeImage6.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img6st}>
            </Image>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={this.changeImage7.bind(this)}>
            <Image source={require('./android/app/src/main/res/drawable-hdpi/example.jpg')}
              style={this.state.img7st}>
            </Image>
          </TouchableNativeFeedback>


        </View>

        <View style={styles.empty} />

      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-start",
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  image: {

    width: 110,
    height: 110,
    margin: 5,
    borderWidth: 2,
    borderColor: 'orangered',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageBig: {

    width: 165,
    height: 165,
    margin: 10,
    borderWidth: 2,
    borderColor: 'orangered',
    alignItems: 'center'
  },
  imageFaded: {

    width: 110,
    height: 110,
    margin: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    opacity: 0.2,
    backgroundColor: 'grey'
  },
  imageBigFaded: {

    width: 165,
    height: 165,
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    opacity: 0.2,
    backgroundColor: 'grey'
  },
  text: {
    flex: 0.5,
    textAlign: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'white',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: '100%'
  },

  empty: {
    height: 110
  },

  empty2: {
    height: 40
  },

});
