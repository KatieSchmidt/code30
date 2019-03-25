import { GET_POSTS, GET_POST_BY_ID, CREATE_POST } from "../actions/types";

const initialState = {
  post: null,
  posts: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        post: action.payload
      };
    case CREATE_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
