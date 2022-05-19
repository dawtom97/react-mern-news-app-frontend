import { combineReducers } from "redux";
import postsReducer from "./posts";
import postReducer from './post'

export default combineReducers({
    posts: postsReducer,
    post: postReducer
})