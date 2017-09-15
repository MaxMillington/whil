import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigation from './components/AppNavigation'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);


const Root = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
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
