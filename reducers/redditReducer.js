import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from '../actions/index'

const initialState = {
  posts: [],
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });

    case GET_POSTS_SUCCESS:
      return Object.assign({}, state, {
        loading: true,
        posts: action.data,
        error: false
      });

    case GET_POSTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true
      })
    case 'Post':
      const item = state.posts.find((post) => { return post.data.id === action.id })
      return Object.assign({}, state, {
        post: item
      })
    default:
      return state
  }
}