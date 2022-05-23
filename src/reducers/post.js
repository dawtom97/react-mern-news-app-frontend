import { FETCH_ONE,FETCH_ALL, LIKE_ONE, RESET_ONE } from "../constants/actionTypes";

export default (post = [],action) => {
    switch(action.type) {
        case FETCH_ONE:
            return action.payload;
        case RESET_ONE:
            return [];
        case LIKE_ONE:
            return action.payload;
        default:
            return post;
    }
}