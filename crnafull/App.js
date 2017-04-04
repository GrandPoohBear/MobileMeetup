import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { StackNavigator, TabNavigator } from 'react-navigation'

import AnimationPage from './AnimationPage'
import MenuPage from './MenuPage'
import {FirstScreen, SecondScreen} from './TabPage'

const TabPage = TabNavigator({
  First: {
    screen: FirstScreen
  },
  Second: {
    screen: SecondScreen
  }
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
})

const MyStackNavigator = StackNavigator({
  Menu: {screen: MenuPage},
  AnimationPage: {screen: AnimationPage},
  TabPage: {screen: TabPage}
})

export default MyStackNavigator
