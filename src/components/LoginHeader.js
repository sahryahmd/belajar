import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const LoginHeader = props => {
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
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#212121',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        {props.description}
      </Text>
    </View>
  );
};

export default LoginHeader;
