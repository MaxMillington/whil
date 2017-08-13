import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AllOrNothing from './allornothing.json'
import Lesson from './components/Lesson'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Lesson messages={AllOrNothing} />
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
  },
});
