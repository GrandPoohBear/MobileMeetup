import React from 'react'
import { 
  Animated,
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback,
  View 
} from 'react-native'

export default class AnimatedButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      growValue: new Animated.Value(0)
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View style={styles.shadowContainer} >
            <Text style={styles.text}>{this.props.children}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    
    elevation: 5,
    
  },
  shadowContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 2,
    borderRadius: 5
  },
  text: {
    fontSize: 18
  }
})
