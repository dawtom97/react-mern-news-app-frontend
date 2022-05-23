import { combineReducers } from "redux";
import postsReducer from "./posts";
import postReducer from './post'
import { authReducer } from "./auth";

export default combineReducers({
    posts: postsReducer,
    post: postReducer,
    auth: authReducer
})