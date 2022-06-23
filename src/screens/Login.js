import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import LoginHeader from '../components/LoginHeader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, settPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
      <LoginHeader />
      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
        }}
        placeholder="Masukkan Email Anda"
      />
      <TextInput
        value={password}
        onChangeText={text => settPassword(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
        }}
        placeholder="Masukkan Password Anda"
        secureTextEntry={true}
      />
      <TouchableOpacity style={{marginTop: 20, marginRight: 20}}>
        <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
          Lupa Password?
        </Text>
      </TouchableOpacity>
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
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>Login</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 40}}>
        Login dengan
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
      <TouchableOpacity style={{marginTop: 20}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Belum Punya Akun?,
          <Text style={{color: '#d32f2f'}}> Silahkan Register disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
