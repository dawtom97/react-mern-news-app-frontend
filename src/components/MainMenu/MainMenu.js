import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { SiDesignernews } from "react-icons/si";
import  {useDispatch} from 'react-redux';
import { LOGOUT } from "../../constants/actionTypes";
import decode from 'jwt-decode';
import { Button } from "../Button/Button";
import { CommonModal } from "../CommonModal/CommonModal";
import UserInfoModal from "../UserInfoModal/UserInfoModal";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isShowModal, setIsShowModal] = useState(false);
  console.log(user);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));

    if(token) {
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
  }, [location]);

  const logout = () => {
    showModal();
    dispatch({type: LOGOUT});
    setUser(null);
    navigate("/")
  };

  const showModal = () => setIsShowModal(prev=>!prev)

  return (
    <>
    <Styled.Wrapper>
      <Link to="/">
        <SiDesignernews />
      </Link>
      <ul>
        <NavLink to="/">Home</NavLink>
        <a target="_blank" href="https://liveuamap.com">Live</a>
        {user ? (
          <>
            <p onClick={showModal}>Account</p>
            <Button logoutBtn onClick={logout}>Logout</Button>
          </>
        ) : (
          <NavLink to="/auth">Login</NavLink>
        )}
      </ul>

    </Styled.Wrapper>
    {isShowModal && <CommonModal onClose={showModal}><UserInfoModal onLogout={logout} onClick={showModal} user={user}/></CommonModal>}
    </>
  );
};
