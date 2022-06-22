import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {useWindowDimensions} from 'react-native';
const Header = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}></View>

      <Image
        source={require('../img/logo.png')}
        style={{width: width, height: height - 400}}
      />
    </View>
  );
};

export default Header;
