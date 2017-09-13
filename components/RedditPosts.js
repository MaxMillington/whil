import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import RedditPostBlock from './RedditPostBlock'
import RedditButton from './RedditButton'

export default class RedditPosts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.callPosts()
  }

  route = (value) => {
    this.setState({ current: value })
  }

  render() {
    console.log(this.props)

    const buttons = <RedditButton />
    const text = <RedditPostBlock text={'blah'} />

    return (
      <View style={styles.container}>
        {text}
        {buttons}
      </View>
    );
  }
}

RedditPosts.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
