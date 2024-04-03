import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Onboarding from './src/views/Onboarding.js';
import Home from './src/views/Home.js';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
     
      <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
          <Stack.Screen name="Main" component={MainNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );

};
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default App;