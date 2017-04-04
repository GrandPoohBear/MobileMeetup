import React from 'react'
import { 
  Animated,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import AnimatedButton from './AnimatedButton'

export default class MenuPage extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedButton>Nav Thing 1</AnimatedButton>
        <AnimatedButton>Nav Thing 2</AnimatedButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32
  }
})
