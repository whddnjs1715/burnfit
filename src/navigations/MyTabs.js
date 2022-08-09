import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HOME from './Home';
import Calendar from './Calendar';
import Library from './Library';
import Mypage from './Mypage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="CALENDAR"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HOME}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('../../assets/favicon.png')} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CALENDAR"
        component={Calendar}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('../../assets/favicon.png')} />
          ),
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen
        name="LIBRARY"
        component={Library}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('../../assets/favicon.png')} />
          ),
          tabBarLabel: 'Library',
        }}
      />
      <Tab.Screen
        name="MyPAGE"
        component={Mypage}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('../../assets/favicon.png')} />
          ),
          tabBarLabel: 'Mypage1',
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
