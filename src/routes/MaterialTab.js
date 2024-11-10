import { StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const MaterialTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FF6347"
      barStyle={{ backgroundColor: '#009387' }} // Setting barStyle here
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387', // Color when active on Home tab
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Profile}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff', // Color when active on Notification tab
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="notification" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MaterialTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
