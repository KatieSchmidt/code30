import { GET_ERRORS, GET_POSTS, GET_POST_BY_ID } from "./types";
import axios from "axios";

//get mealplans
export const getPosts = () => dispatch => {
  axios
    .get("/api/posts/")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};

//get mealplans
export const getPostById = post_id => dispatch => {
  axios
    .get(`/api/posts/${post_id}`)
    .then(res =>
      dispatch({
        type: GET_POST_BY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.message
      })
    );
};

//create mealplan
export const createPost = postFields => dispatch => {
  axios
    .post("/api/posts", postFields)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};
