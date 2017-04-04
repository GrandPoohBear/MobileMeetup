import React from 'react'
import { 
  Animated,
  Image,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import TabNavigator from 'react-navigation'

export class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'First Screen',
      icon: ({ tintColor }) => (
        <Image
          source={require('./images/one_finger.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <View>
        <Text>First Screen</Text>
        <Text>Icon is One Finger by H Alberto Gongora from the Noun Project</Text>
      </View>
    )
  }
}

export class SecondScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Second Screen',
      icon: ({ tintColor }) => (
        <Image
          source={require('./images/two_fingers.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }

  render() {
    return (
      <View>
        <Text>Second Screen</Text>
        <Text>Icon is two fingers by H Alberto Gongora from the Noun Project</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
