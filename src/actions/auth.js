import { AUTH, ERROR,CLEAR_ERROR } from "../constants/actionTypes";
import * as api from "../api/index";


export const signin = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    dispatch({type:ERROR})
    setTimeout(()=>dispatch({type:CLEAR_ERROR}),3000);
  }
};

export const signup = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    dispatch({type:ERROR});
    setTimeout(()=>dispatch({type:CLEAR_ERROR}),3000)
  }
};
