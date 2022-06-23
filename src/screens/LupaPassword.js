import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import LoginHeader from '../components/LoginHeader';
import {useNavigation} from '@react-navigation/native';

const LupaPassword = () => {
  const [email, setEmail] = useState('');
  const [password, settPassword] = useState('');
  const [ulangiPassword, setUlangiPassword] = useState('');

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
      <LoginHeader
        title="Lupa Password"
        description="Masukkan Email Anda untuk mendapatkan tutorial cara lupa password"
      />
      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: '#FFFFFF',
          marginTop: 10,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
        }}
        placeholder="Masukkan Email Anda"
      />

      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: '#d32f2f',
          paddingVertical: 15,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 9,
        }}>
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>Reset Password</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 40}}>
        Register dengan
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            source={require('../img/fb.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            source={require('../img/google.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Ini Belum Member?,
          <Text style={{color: '#d32f2f'}}> Silahkan Register disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LupaPassword;
