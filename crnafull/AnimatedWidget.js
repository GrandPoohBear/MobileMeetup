import React from 'react'
import { 
  Animated,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

export default class AnimatedWidget extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      animationProgress: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.startAnimation()
  }

  startAnimation() {
    Animated.sequence([
      Animated.timing(
        this.state.animationProgress,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        this.state.animationProgress,
        {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        }
      )
    ])
    .start(() => this.startAnimation())
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>Animation!</Text>
        <Animated.View style={[styles.inner, {opacity: this.state.animationProgress}]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D8632',
    height: 30,
    width: 80
  },
  inner: {
    position: 'absolute',
    backgroundColor: '#001099',
    left: 0,
    right: 0,
    top: 5,
    height: 20
  }
})
