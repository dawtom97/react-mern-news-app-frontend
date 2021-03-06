import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../../constants/actionTypes";
import decode from "jwt-decode";
import { Button } from "../../atoms/Button";
import { CommonModal } from "../CommonModal/CommonModal";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import { Logo } from "../../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai';

export const MainMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  const logout = () => {
    showModal();
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/");
  };

  const showModal = () => setIsShowModal((prev) => !prev);
  const handleShowMenu = () => {
    setIsShowMenu((prev) => !prev);
    console.log(isShowMenu);
  };

  return (
    <>
      <Styled.Wrapper>
        <Logo />
        <Styled.MenuBtn onClick={handleShowMenu}>
          <GiHamburgerMenu />
        </Styled.MenuBtn>
        <Styled.List show={isShowMenu}>
        <AiOutlineClose onClick={handleShowMenu}/>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
          {user && user.result._id === process.env.REACT_APP_ADMIN_ID && (
            <NavLink to="/admin/add-post">Admin</NavLink>
          )}
          <a target="_blank" href="https://liveuamap.com">
            Live
          </a>
          {user ? (
            <>
              <p onClick={showModal}>Account</p>
              <Button logoutBtn onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <NavLink to="/auth">Login</NavLink>
          )}
        </Styled.List>
      </Styled.Wrapper>
      {isShowModal && user ? (
        <CommonModal onClose={showModal}>
          <UserInfoModal onLogout={logout} onClick={showModal} user={user} />
        </CommonModal>
      ) : null}
    </>
  );
};
