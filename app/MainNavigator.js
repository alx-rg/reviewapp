import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewScreen from './ReviewScreen';
import ListScreen from './ListScreen';
import AboutScreen from './AboutScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Review" component={ReviewScreen} />
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
