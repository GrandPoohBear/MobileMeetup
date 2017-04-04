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
    let components = []
    for(let i = 0; i < 50; i++) {
      components.push(<AnimatedWidget useNativeDriver={this.props.useNativeDriver} key={`animatedWidget${i}`}/>)
    }

    return (
      <View style={styles.container}>
        {components}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
})
