import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';

const RedditButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={'hyo'}
        onPress={() => { console.log('hardcore') }}
      />
    </View>
  )
}

RedditButton.propTypes = {
}

export default RedditButton

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
