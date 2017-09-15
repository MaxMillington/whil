import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux'

const Post = (props) => {
  console.log('yo ma props', props)
  let imageUrl
  if (props.post.data.preview && props.post.data.preview.images[0]) {
    imageUrl = props.post.data.preview.images[0].source.url
  }
  return (
    <View style={styles.buttonContainer}>
      <Text>{props.post.data.author}</Text>
      <Text>{props.post.data.title}</Text>
      <Text>{props.post.data.ups} upvotes</Text>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: imageUrl}}
      />
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
