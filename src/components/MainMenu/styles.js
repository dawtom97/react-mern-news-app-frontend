import styled from "styled-components";


export const Wrapper = styled.nav`
  position: fixed;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 0px;
  width:90%;
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  & svg {
    color: ${props=>props.theme.primary};
    font-size: 4rem;
    border: 4px solid ${props=>props.theme.text};
    padding: 6px;
  }
  & > ul {
    display: flex;
    align-items: center;
    gap:20px;
  }

  & > ul > a, & > ul> p {
    color: ${props=>props.theme.text};
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
`
