import * as api from '../api/index';

// GET ALL POSTS
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error)
    }
}

// CREATE POST IN THE ADMIN DASHBOARD
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}


// SINGLE POST SHOW AND RESET AFTER BACK TO HOMEPAGE
export const getSinglePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchSinglePost(id);
        dispatch({type: 'FETCH_ONE', payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const resetSinglePost = () => async (dispatch) => {
    try {
        dispatch({type:'RESET_ONE', payload: []})
    } catch (error) {
        console.log(error)
    }
}

// UPDATE SINGLE POST
export const updatePost = (id,post) => async(dispatch) => {
    try {
        const {data} =await api.updatePost(id,post);
        dispatch({type:'UPDATE' , payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}