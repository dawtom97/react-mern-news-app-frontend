import {AUTH, LOGOUT,ERROR,CLEAR_ERROR} from '../constants/actionTypes';

export const authReducer =(state = {authData: null,isError: false},action) => {
    switch(action.type) {
        case AUTH:
            console.log(action?.data);
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: action?.data};
        case ERROR: 
            return {...state, isError:true};
        case CLEAR_ERROR:
            return {...state, isError:false}
        default:
            return state;
    }
}
