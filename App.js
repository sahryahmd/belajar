import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginLanding from './src/screens/LoginLanding';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import LupaPassword from './src/screens/LupaPassword';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginLanding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginLanding" component={LoginLanding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
