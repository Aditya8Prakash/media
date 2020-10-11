import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import insta from './screens/insta';
import tw from './screens/tw';
import fb from './screens/fb';
import dis from './screens/dis';
import red from './screens/red';
import twi from './screens/twi';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Instagram:{screen:insta},
  Twitter:{screen:tw},
  Facebook:{screen:fb},
  Discord:{screen:dis},
  Reddit:{screen:red},
  Twitch:{screen:twi},
});
const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
