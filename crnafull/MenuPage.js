import React from 'react'
import { 
  Animated,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import AnimatedButton from './AnimatedButton'

export default class MenuPage extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  static navigationOptions = {
    title: 'Menu',
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedButton
          onPress={() => this.props.navigation.navigate('AnimationPage', {useNativeDriver: false})}
        >
          Traditional Animation
        </AnimatedButton>
        <AnimatedButton
          onPress={() => this.props.navigation.navigate('AnimationPage', {useNativeDriver: true})}
        >
          Native Driven Animation
        </AnimatedButton>
        <AnimatedButton
          onPress={() => this.props.navigation.navigate('TabPage')}
        >
          Navigator Demo
        </AnimatedButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32
  }
})
