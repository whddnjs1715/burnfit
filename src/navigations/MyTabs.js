import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HOME from './Home';
import Calendar from './Calendar';
import Library from './Library';
import Mypage from './Mypage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
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
        }}
      />
      <Tab.Screen name="CALENDAR" component={Calendar} />
      <Tab.Screen name="LIBRARY" component={Library} />
      <Tab.Screen name="MyPAGE" component={Mypage} />
    </Tab.Navigator>
  );
}

export default MyTabs;
