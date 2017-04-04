import React from 'react'
import { 
  Animated,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import Spinner from 'rn-spinner'

import AnimatedWidget from './AnimatedWidget'

export default class AnimationPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      numComponents: 50
    }
  }

  static navigationOptions = {
    title: 'Animation Demo',
  }

  render() {
    let useNativeDriver = this.props.navigation.state.params.useNativeDriver
    let components = []
    for(let i = 0; i < this.state.numComponents; i++) {
      components.push(<AnimatedWidget useNativeDriver={useNativeDriver} key={`animatedWidget${i}`}/>)
    }

    return (
      <View>
        <Text>Using Native Driver: {useNativeDriver ? 'True' : 'False'}</Text>
        <Spinner max={200}
          min={1}
          default={this.state.numComponents}
          onNumChange={(num) => this.setState({numComponents: num})}
          />
        <View style={styles.widgetContainer}>
          {components}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  widgetContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
})
