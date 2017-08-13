import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import { findKey } from 'lodash'
import WoeText from './WoeText'
import WoeButton from './WoeButton'

export default class Lesson extends React.Component {
  constructor(props) {
    super(props)
    const startRow = findKey(this.props.messages, (object) => { return object.tag.includes('-start') })
    this.state = {
      current: startRow
    }
  }

  route = (value) => {
    this.setState({ current: value })
  }

  render() {
    const current = this.props.messages[this.state.current]
    const routes = current.routes.split('|')

    const buttons = <WoeButton routes={routes} route={this.route} text={current.replies} />
    const text = <WoeText text={current.text} />

    return (
      <View style={styles.container}>
        {text}
        {buttons}
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
  }
});
