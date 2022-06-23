import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const LoginHeader = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#212121',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        Login
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#212121',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        Selamat Data Kembali {'\n'} You Never Walk Alone
      </Text>
    </View>
  );
};

export default LoginHeader;
