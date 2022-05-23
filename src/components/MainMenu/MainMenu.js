import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { SiDesignernews } from "react-icons/si";
import  {useDispatch} from 'react-redux';
import { LOGOUT } from "../../constants/actionTypes";
import decode from 'jwt-decode';
import { Button } from "../Button/Button";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  //console.log(user);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));

    if(token) {
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
  }, [location]);

  const logout = () => {
    dispatch({type: LOGOUT});
    setUser(null);
    navigate("/")
  };

  return (
    <Styled.Wrapper>
      <Link to="/">
        <SiDesignernews />
      </Link>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Live</NavLink>
        {user ? (
          <>
            <NavLink to="/">Account</NavLink>
            <Button logoutBtn onClick={logout}>Logout</Button>
          </>
        ) : (
          <NavLink to="/auth">Login</NavLink>
        )}
      </ul>
    </Styled.Wrapper>
  );
};
