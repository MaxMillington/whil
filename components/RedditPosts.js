import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import RedditPostBlock from './RedditPostBlock'
import RedditButton from './RedditButton'

export default class RedditPosts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.callPosts()
  }

  render() {
    console.log(this.props)

    const posts = this.props.posts.map((post) => {
      const text = `${post.data.author}  | ${post.data.title} | ${post.data.ups} upvotes`
      return <RedditPostBlock key={text} text={text} />
    })

    const buttons = <RedditButton />

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {posts}
        {buttons}
      </ScrollView>
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
    paddingVertical: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
