import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LocationScreen from '../location';
import CameraScreen from '../camera';
import Gallery from '../pictures';
import DialCall from '../dial';



const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="location" component={LocationScreen} />
        <Tab.Screen name="settings" component={CameraScreen} />
        <Tab.Screen name="gallery" component={Gallery} />
        <Tab.Screen name="dialCall" component={DialCall} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}