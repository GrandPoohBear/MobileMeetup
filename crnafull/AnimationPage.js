import React from 'react'
import { 
  Animated,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import AnimatedWidget from './AnimatedWidget'

export default class AnimationPage extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Animation Demo',
  }

  render() {
    let useNativeDriver = this.props.navigation.state.params.useNativeDriver
    let components = []
    for(let i = 0; i < 50; i++) {
      components.push(<AnimatedWidget useNativeDriver={useNativeDriver} key={`animatedWidget${i}`}/>)
    }

    return (
      <View>
        <Text>Using Native Driver: {useNativeDriver ? 'True' : 'False'}</Text>
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
