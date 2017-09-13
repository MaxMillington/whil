import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

export const getPosts = (bool) => {
  return {
    type: GET_POSTS,
    isLoading: bool
  }
}

export function getPostsSuccess(data) {
  return {
    type: GET_POSTS_SUCCESS,
    data
  };
}

export function getPostsError(bool) {
  return {
    type: GET_POSTS_ERROR,
    error: bool
  };
}

export const callPosts = () => {
  return (dispatch) => {
    dispatch(getPosts(true));
    console.log('dispatch')

    axios.get('https://www.reddit.com/.json')
      .then(res => {
        console.log('suc', res)
        dispatch(getPostsSuccess(res.data.data.children))
      })
      .catch(err => {
        console.log('err', err)
        dispatch(getPostsError(true))
      })
  }
}