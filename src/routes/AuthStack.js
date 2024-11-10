import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Login from '../screens/Login';
import {Text} from 'react-native';
import Splash from '../screens/Splash';
import Gallery from '../screens/Gallery';
import Contact from '../screens/Contact';

// Stack and Tab Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator for Home and Profile screens
function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: 'Gallery',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="view-gallery" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        color={'red'}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        color={'red'}
        options={{
          title: 'Contact',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="contacts" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator for Login and HomeTabs
function Auth() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
        <Stack.Screen name="Gallery" component={Gallery}/>
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default Auth;
