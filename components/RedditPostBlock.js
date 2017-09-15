import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const RedditBlock = (props) => {

  const viewPost = () => {
    props.navigation.dispatch({ type: 'Post', id: props.id })
  }

  return (
    <TouchableHighlight
      style={styles.textContainer}
      onPress={viewPost}
    >
      <Text
        style={styles.text}
      >
        {props.text}
      </Text>
    </TouchableHighlight>
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
