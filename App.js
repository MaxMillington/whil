import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigation from './components/AppNavigation'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  callPosts
} from './actions/index'
import RedditPosts from './components/RedditPosts'
import Post from './components/Post'


import { addNavigationHelpers, StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
  RedditPosts: { screen: RedditPosts },
  Post: { screen: Post }
});

const App = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({
    dispatch,
    state: nav
  })} />
);

App.propTypes = {
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

const AppWithNavigationState = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


const Root = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
