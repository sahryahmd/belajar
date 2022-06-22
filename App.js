import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

const App = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}></View>

      <Image
        source={require('./src/img/logo.png')}
        style={{width: width, height: height - 400}}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 5}}>
          Liverpool
        </Text>
        <Text>You Never Walk Alone</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 60,
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d50000',
            paddingVertical: 20,
            borderRadius: 15,
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e57373',
            paddingVertical: 20,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
