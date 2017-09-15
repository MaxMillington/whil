import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../components/AppNavigation'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('RedditPosts'));


const nav = (state = initialState, action) => {
  console.log('action.type', action.type)
  switch (action.type) {
    // case 'RedditPosts':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.back(),
    //     state
    //   );
    //   break;
    case 'Post':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Post' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break
  }

  return nextState || state;
}

export default nav