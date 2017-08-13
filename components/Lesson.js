import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import WoeText from './WoeText'
import WoeButton from './WoeButton'

export default class Lesson extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'EIC'
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
        <View>
          {text}
        </View>
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
