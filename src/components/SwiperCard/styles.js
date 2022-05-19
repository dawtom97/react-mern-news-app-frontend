import styled from "styled-components";

export const Wrapper = styled.article`
  height: 380px;
  position: relative;
  transition: color 0.4s;
  & > div {
    padding: 15px;
    font-weight: 700;
    height: 100%;

    & h2 {
      font-size: 2rem;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      & > p {
        font-size: 1.2rem;
        color: ${props=>props.theme.font};
      }
    }

    & button {
      position: absolute;
      bottom: 15px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
    transition: opacity 0.4s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover  {
   color: ${props=>props.theme.primary};
  }

`;
