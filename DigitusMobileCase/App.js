import React from 'react';
import { Image, Platform } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Onboarding from './src/views/Onboarding.js';
import Home from './src/views/Home.js';
import CardDetail from './src/views/CardDetail.js';
import Catalog from './src/views/Catalog.js';
import Notifications from './src/views/Notifications.js';
import Menu from './src/views/Menu.js';
import People from './src/views/People.js';
import CatalogIcon from './src/assets/icons/catalog.svg';
import HomeIcon from './src/assets/icons/home.svg';
import NotificationsIcon from './src/assets/icons/notifications.svg';
import MenuIcon from './src/assets/icons/menu.svg';
import PeopleIcon from './src/assets/icons/people.svg';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const App = () => {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
          <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};
const MainNavigator = ({ navigation, route }) => {
  return (
    <Tab.Navigator
    barStyle={{position: 'absolute', height: Platform.OS === 'ios' ? 80 : 60, backgroundColor: '#ffffff',}}
    activeIndicatorStyle={{backgroundColor: '#64B48E',
      width: 100, 
      height: Platform.OS === 'ios' ? 60 : 90,
      borderRadius: 4,
   }}

    >
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon width={24} height={24} stroke={focused ? "white" : "none"}/>,
          tabBarLabel: () => null, 
        }}
        activeColor="black"
        inactiveColor='black'
      />
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{
          tabBarIcon: ({ focused }) =>  <CatalogIcon width={24} height={24} stroke={focused ? "white" : "none"}/>,
          tabBarLabel: () => null, 
        }}
      />
      <Tab.Screen
          name="People"
          component={People}
          options={{
            tabBarIcon: ({ focused }) => 
              <PeopleIcon width={24} height={24} stroke={focused ? "white" : "none"} />,
            
            tabBarLabel: () => null, 
          }}
        />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ focused }) => 
            <NotificationsIcon width={24} height={24} stroke={focused ? "white" : "none"} />,
          
          tabBarLabel: () => null, 
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => 
            <MenuIcon width={24} height={24} stroke={focused ? "white" : "none"} />,
          
          tabBarLabel: () => null, 
        }}
      />
    </Tab.Navigator>
  );
};
const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CardDetail" component={CardDetail} options={{
            headerTitle: () => <Image
                source={require('./src/assets/images/logo.png')}
                style={{ width: 100, height: 40 }}
              />
            ,}} />
    </Stack.Navigator>
  );
};

export default App;

/* #64B48E */