import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  callPosts
} from '../actions/index'
import RedditPosts from './RedditPosts'
import Post from './Post'


import { addNavigationHelpers, StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
  RedditPosts: { screen: RedditPosts }
  // Post: { screen: Post }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  posts: state.reddit.posts,
  loading: state.reddit.loading,
  error: state.reddit.error,
  nav: state.nav
})

const mapDispatchToProps = (dispatch) => {
  return Object.assign({dispatch: dispatch}, bindActionCreators({
    callPosts
  }, dispatch))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppWithNavigationState)
