/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, PureComponent} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import {
  ImageFilter,
  RoundAsCircle,
  IterativeBoxBlur,
  PorterDuffXfermode,
  Color,
  concatColorMatrices,
  luminanceToAlpha,
  rgbaToRgb
} from 'react-native-image-filter-kit';
import matrices from 'rn-color-matrices';
import { LuminanceToAlpha, ColorMatrix } from 'react-native-color-matrix-image-filters';

const degToRad = (deg) => Math.PI * deg / 180;
const background = 'rgb(255, 255, 255)';
const atx = (
  <Image
    style={{ width: 360, height: 360 }}
    source={{ uri: 'https://una.im/CSSgram/img/atx.jpg' }}
    resizeMode={'contain'}
  />
);

const bike = (
  <Image
    style={{ width: 360, height: 360 }}
    source={{ uri: 'https://una.im/CSSgram/img/bike.jpg' }}
    resizeMode={'contain'}
  />
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class CSSGramItem extends PureComponent {
  state = { isFiltered: true };

  render() {
    const { isFiltered } = this.state;

    return (
      <View style={styles.filter}>
        <TouchableWithoutFeedback onPress={this.pressed}>
          {isFiltered ? this.filteredImage() : this.image()}
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{isFiltered ? this.props.name : ''}</Text>
      </View>
    );
  }

  image() {
    return (
      <Image
        style={{ width: 360, height: 360, backgroundColor: 'transparent' }}
        source={{ uri: 'https://una.im/CSSgram/img/atx.jpg' }}
        // source={{ uri: 'http://travellingmoods.com/wp-content/uploads/2015/05/New-York-City.jpg' }}
        resizeMode={'cover'}
      />
    );
  }

  filteredImage() {
    return (
      <ImageFilter
        config={{
          name: this.props.name,
          image: this.image(),
          disableCache: false
        }}
      />
    );
  }

  pressed = () => {
    this.setState({ isFiltered: !this.state.isFiltered });
  }
};

class CSSGramItem2 extends CSSGramItem {
  filteredImage() {
    return (
      <ImageFilter
        config={{
          name: 'PorterDuffXfermode',
          mode: 'SRC_OVER',
          srcImage: {
            name: 'RadialGradient',
            colors: ['rgba(168, 223, 193, .4)', 'rgb(196, 183, 200)'],
            stops: [0.7, 1],
            radius: '30min'
          },
          dstImage: bike
        }}
      />
    );
  }
}

class CSSGramItem3 extends CSSGramItem {
  filteredImage() {
    return (
      <ImageFilter
        config={{
          name: 'PorterDuffXfermode',
          mode: 'SCREEN',
          srcImage: bike,
          dstImage: atx
        }}
      />
    );
  }
}

class CSSGramItem4 extends CSSGramItem {
  filteredImage() {
    return (
      <ImageFilter
        config={{
          name: 'Sepia',
          amount: 0.5,
          image: {
            name: 'Saturate',
            amount: 0.5,
            image: {
              name: 'HueRotate',
              amount: 0.5,
              image: {
                name: 'Tint',
                amount: 0.5,
                image: {
                  name: 'Predator',
                  amount: 0.5,
                  image: {
                    name: 'Grayscale',
                    amount: 0.5,
                    image:{
          name: 'Sepia',
          amount: 0.5,
          image: {
            name: 'Saturate',
            amount: 0.5,
            image: {
              name: 'HueRotate',
              amount: 0.5,
              image: {
                name: 'Tint',
                amount: 0.5,
                image: {
                  name: 'Predator',
                  amount: 0.5,
                  image: {
                    name: 'Grayscale',
                    amount: 0.5,
                    image: {
                      name: 'PorterDuffColorFilter',
                      color: 'rgb(123, 45, 33)',
                      image: {
                        name: 'RadialGradient',
                        colors: ['rgba(169, 223, 193, .4)', 'rgb(196, 183, 200)', 'rgba(12, 194, 231, .2)', 'rgb(34, 54, 3)'],
                        stops: [0.1, 0.5, 0.7, 1],
                        radius: '70min',
                        imageStyle: { width: 360, height: 360 }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        }}}}}}}
      />
    );
  }
}

type Props = {};
export default class App extends Component<Props> {
  state = {
    t: Date.now(),
    filters: [].concat.apply([], Array.from(Array(1)).map((x, i) => [
      // { name: 'Normal', key: `Normal1_${i}` },
      // { name: 'Sepia', key: `Sepia_${i}` },
      // { name: 'Saturate', key: `Saturate_${i}` },
      // { name: 'HueRotate', key: `HueRotate_${i}` },
      // { name: 'LuminanceToAlpha', key: `LuminanceToAlpha_${i}` },
      // { name: 'Invert', key: `Invert_${i}` },
      // { name: 'Grayscale', key: `Grayscale_${i}` },
      // { name: 'Warm', key: `Warm_${i}` },
      // { name: 'Cool', key: `Cool_${i}` },
      // { name: 'Tint', key: `Tint_${i}` },
      // { name: 'Night', key: `Night_${i}` },
      // { name: 'Lsd', key: `Lsd_${i}` },
      // { name: 'Browni', key: `Browni_${i}` },
      // { uri: 'https://una.im/CSSgram/img/bike.jpg', key: `bike_${i}` },
      // { uri: 'http://travellingmoods.com/wp-content/uploads/2015/05/New-York-City.jpg', key: `ny_${i}` },
      // { uri: 'https://wallpapercave.com/wp/ZXkSCiR.jpg', key: `paper_${i}` },
      // { uri: 'http://image.pbs.org/video-assets/iZOsUzY-asset-mezzanine-16x9-8YZsCRv.jpg', key: `asswwr_${i}` },
      // { uri: 'https://www.visitnsw.com/nsw-tales/wp-content/uploads/2013/08/The-Big-Merino-in-Goulburn-NSW-Image-Credit-Bec-Flickr.jpg', key: `flick_${i}` },
      // { uri: 'https://una.im/CSSgram/img/atx.jpg', key: `atx_${i}` },
      // { uri: 'https://thisismyhappiness.com/wp-content/uploads/2014/05/big-sur-bixby.jpg', key: `vig_${i}` },
      // { uri: 'http://www.guoguiyan.com/data/out/113/69175307-large-wallpapers.jpeg', key: `larg_${i}` },
      // { uri: 'https://una.im/CSSgram/img/tahoe.jpg', key: `tahoe_${i}` },
      // { uri: 'https://dailydatanews.com/wp-content/uploads/2017/08/ThinkstockPhotos-627427636.jpg', key: `lpg_${i}` },
      // { uri: 'http://patricksmithphotography.com/blog/wp-content/uploads/2015/05/101114-5428-TheSpectacleBig.jpg', key: `spec_${i}` },
      // { uri: 'https://www.highreshdwallpapers.com/wp-content/uploads/2011/09/Large-Format-HD-Wallpaper.jpg', key: `eee_${i}` },
      // { uri: 'https://una.im/CSSgram/img/cacti.jpg', key: `cacti_${i}` },
      // { uri: 'https://una.im/CSSgram/img/lakegeneva.jpg', key: `lakegeneva_${i}` },
      // { uri: 'http://www.hdwallpapery.com/static/images/Sv4BC_ltdPPcT.png', key: `Sv4BC_ltdPPcT_${i}` },
      // { uri: 'http://img.talkandroid.com/uploads/2015/03/square_cash_app_icon-450x450.png', key: `square_cash_app_icon-450x450_${i}` },
      { name: 'Normal', key: `Normal_${i}` },
      { name: '_1977', key: `_1977_${i}` },
      { name: 'Aden', key: `Aden_${i}` },
      { name: 'Brannan', key: `Brannan_${i}` },
      { name: 'Brooklyn', key: `Brooklyn_${i}` },
      { name: 'Clarendon', key: `Clarendon_${i}` },
      { name: 'Earlybird', key: `Earlybird_${i}` },
      { name: 'Hudson', key: `Hudson_${i}` },
      { name: 'Inkwell', key: `Inkwell_${i}` },
      { name: 'Lofi', key: `Lofi_${i}` },
      { name: 'Mayfair', key: `Mayfair_${i}` },
      { name: 'Nashville', key: `Nashville_${i}` },
      { name: 'Rise', key: `Rise_${i}` },
      { name: 'Toaster', key: `Toaster_${i}` },
      { name: 'Walden', key: `Walden_${i}` }
    ]))
  };


  componentDidMount() {
    // this.interval = setInterval(() => this.setState({ t: Date.now() }), 7000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return (
      // <ScrollView contentContainerStyle={styles.container}>
      //   <CSSGramItem4 name={'4'} />
      //   <CSSGramItem2 name={'2'} />
      //   <CSSGramItem3 name={'3'} />
      // </ScrollView>
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.filters}
        renderItem={this.renderFilter}
      />
    );
  }

  renderFilter = ({ item }) => (
    item.uri
      ? <Image
          style={{ width: 360, height: 360, borderRadius: 25 }}
          source={item}
          blurRadius={5}
          resizeMode={'contain'}
        />
      : <CSSGramItem {...item} />
  )
}

const styles = StyleSheet.create({
  filter: {

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});