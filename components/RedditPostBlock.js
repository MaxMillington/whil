import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const RedditBlock = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={styles.text}
      >
        {props.text}
      </Text>
    </View>
  )
}

RedditBlock.propTypes = {
  text: PropTypes.string.isRequired
}

export default RedditBlock

const styles = StyleSheet.create({
  textContainer : {
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  text: {
    marginVertical: 5,
    fontSize: 12,
    fontWeight: 'bold',
  }
});
