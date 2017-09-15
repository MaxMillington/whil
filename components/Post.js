import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'

const Post = (props) => {
  console.log('yo ma props', props)
  return (
    <View style={styles.buttonContainer}>
      <Text>{props.post.data.author}</Text>
      <Text>{props.post.data.title}</Text>
      <Text>{props.post.data.ups} upvotes</Text>
    </View>
  )
}


const mapStateToProps = (state) => ({
  post: state.reddit.post,
  nav: state.nav
})

const ConnectedPost = connect(
  mapStateToProps
)(Post)

export default ConnectedPost

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    paddingTop: 10
  }
});
