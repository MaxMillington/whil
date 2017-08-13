import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from 'react-native';

const WoeButton = (props) => {
  const woeButtonTexts = props.text.split('|')
  const buttons = woeButtonTexts.map((text, index) => {
    return (
      <Button
        key={text}
        title={text}
        onPress={() => { props.route(props.routes[index]) }}
      />
    )
  })

  return (
    <View style={styles.buttonContainer}>
      {buttons}
    </View>
  )
}

WoeButton.propTypes = {
  text: PropTypes.string.isRequired,
  routes: PropTypes.array.isRequired,
  route: PropTypes.func.isRequired
}

export default WoeButton

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
