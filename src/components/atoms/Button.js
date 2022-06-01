import styled, { css } from "styled-components";


export const Button = styled.button`
  width:160px;
  height: 30px;
  display: block;
  color: ${props=>props.theme.text};
  border: none;
  border-radius: 20px;
  background:${props => props.theme.primary};
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  ${props=>props.logoutBtn && css`
    width:100px
  `}

  ${props=>props.disabled && css`
    background-color: grey;
    cursor: initial;
  `}
`
