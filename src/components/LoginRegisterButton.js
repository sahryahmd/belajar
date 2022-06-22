import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const LoginRegisterButton = () => {
  return (
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
  );
};

export default LoginRegisterButton;
