import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  min-height: 400px;
  flex-direction: column;
  color:${props=>props.theme.text};

  & > button {
      margin-top: auto;
  }

  &>div:first-of-type {
      display: flex;
      align-items: center;
      gap:25px;
      border-bottom: 1px solid ${props=>props.theme.text};
      padding-bottom: 8px;

      & h3 {
          font-size: 3rem;
      }
      & p {
          font-size: 1.8rem;
      }
      & button {
          margin-left: auto;
          color: ${props=>props.theme.text};
          background-color: transparent;
          border: none;
          font-size: 4rem;
          cursor: pointer;
      }
  }

`;

export const Avatar = styled.div`
  border-radius: 50%;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  background: rgb(0, 95, 255);
  background: linear-gradient(
    180deg,
    rgba(0, 95, 255, 1) 48%,
    rgba(238, 247, 5, 1) 48%
  );
  font-weight:700;
  text-shadow: 1px 1px black;
  color:#fff;
  border: 3px solid ${props=>props.theme.text}
`;
