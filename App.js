import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from './src/components/Header';
import Title from './src/components/Title';
import LoginRegisterButton from './src/components/LoginRegisterButton';

const App = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <Header />
        <Title />
        <LoginRegisterButton />
      </View>
    </ScrollView>
  );
};

export default App;
