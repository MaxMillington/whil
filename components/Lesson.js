import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default class Lesson extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.messages.EIC.text}</Text>
      </View>
    );
  }
}

Lesson.propTypes = {
  messages: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
