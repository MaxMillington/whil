import { combineReducers } from 'redux';
import reddit from './redditReducer'
import nav from './navReducer'

const rootReducer = combineReducers({
  nav,
  reddit
});

export default rootReducer

