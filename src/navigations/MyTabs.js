import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import TabComponent from './TabComponent';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [tabTite, setTabTitle] = useState(['HOME', 'CALENDAR', 'LIBRARY', 'MyPAGE']);
  return (
    <Tab.Navigator
      initialRouteName="CALENDAR"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
      }}
    >
      {tabTite.map((item, i) => {
        return (
          <Tab.Screen
            key={tabTite[i]}
            name={tabTite[i]}
            component={TabComponent}
            options={{
              tabBarIcon: () => (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../assets/favicon.png')}
                />
              ),
              tabBarLabel: tabTite[i],
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default MyTabs;
