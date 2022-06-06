import React, { useState } from "react";
import { Input } from "../../atoms/Input";
import { Submit } from "../../atoms/Submit";
import * as Styled from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signin, signup } from "../../../actions/auth";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../atoms/Logo";
import { Title } from "../../atoms/Title";
import { Modal } from "../../organisms/Modal/Modal";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const isError = useSelector(({ auth }) => auth.isError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => setIsSignUp((prev) => !prev);

  return (
    <Styled.Wrapper>
      <Styled.TextWrapper>
        {isError && (
          <Modal
            msg={
              isSignUp
                ? "An account with the given e-mail exists or some fields are empty"
                : "Wrong password or email address"
            }
          />
        )}
        <Logo />
        <Title>{isSignUp ? "Sign In" : "Sign Up"}</Title>
      </Styled.TextWrapper>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <Input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="Firstname"
            />
            <Input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Lastname"
            />
          </>
        )}
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email address*"
        />
        <Input
          onChange={handleChange}
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password*"
        />
        {isSignUp && (
          <Input
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Repeat password"
          />
        )}

        <Submit type="submit" value={isSignUp ? "Sign Up" : "Sign IN"} />
      </form>

      <p>
        {!isSignUp ? "Dont't have an account? " : "Already have an account? "}
        <button onClick={switchMode}>
          {!isSignUp ? "Register now" : "Login now"}
        </button>
      </p>
    </Styled.Wrapper>
  );
};
