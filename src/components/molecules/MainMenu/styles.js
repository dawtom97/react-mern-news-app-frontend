import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 0px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  & svg {
    color: ${(props) => props.theme.primary};
    font-size: 4rem;
    border: 4px solid ${(props) => props.theme.text};
    padding: 6px;
  }
`;

export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  cursor: pointer;
  & svg {
    border: none;
    color: ${(props) => props.theme.text};
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  & > svg {
    position: absolute;
    top:15px;
    left:13px;
    color:#fff;
    border: none;
    font-size: 46px;
  }

  & > a,
  & > p {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.85);
    transform: translateX(${props=>props.show ? '-5vw' : '-107vw'});
    transition: 0.4s;
    & > a, & > p {
      color:#fff;
    }
  }
  ${({ showMenu }) =>
    showMenu &&
    css`
      transform: translateX(0);
    `}
`;
