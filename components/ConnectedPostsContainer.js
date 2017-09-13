import React from 'react' // eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  callPosts
} from '../actions/index'
import RedditPosts from './RedditPosts'

const mapStateToProps = (state) => ({
  posts: state.reddit.posts,
  loading: state.reddit.loading,
  error: state.reddit.error,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  callPosts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditPosts)
