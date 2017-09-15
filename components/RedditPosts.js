import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import RedditPostBlock from './RedditPostBlock'
import {
  callPosts
} from '../actions/index'

export class RedditPosts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.callPosts()
  }

  render() {
    const posts = this.props.posts.map((post) => {
      const text = `${post.data.author}  | ${post.data.title} | ${post.data.ups} upvotes`
      return <RedditPostBlock key={text} text={text} navigation={this.props.navigation} id={post.data.id} />
    })

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {posts}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.reddit.posts,
  loading: state.reddit.loading,
  error: state.reddit.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  callPosts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditPosts)

RedditPosts.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
  }
});
