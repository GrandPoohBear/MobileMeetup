import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedWidget from './AnimatedWidget'

export default class App extends React.Component {
  render() {
    let components = []
    for(let i = 0; i < 100; i++) {
      components.push(<AnimatedWidget key={`animatedWidget${i}`}/>)
    }
    return (
      <View style={styles.container}>
        {components}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
