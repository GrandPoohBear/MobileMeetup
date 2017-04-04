import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { StackNavigator } from 'react-navigation'

import AnimationPage from './AnimationPage'
import MenuPage from './MenuPage'

const MyStackNavigator = StackNavigator({
  Menu: {screen: MenuPage},
  AnimationPage: {screen: AnimationPage}
})

export default MyStackNavigator


