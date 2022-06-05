import styled from "styled-components";


export const Wrapper = styled.div`
     & input[type="submit"] {
          width: 220px;
          margin:10px auto;
      }
    & p {
      margin: 10px 0;

      & button {
          background-color: transparent;
          border: none;
          text-decoration: underline;
          cursor: pointer;
          color:${props=>props.theme.primary};
          font-weight: 700;
      }
  }
`

export const TextWrapper = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  gap:15px;
  justify-content: center;
  & > h2 {
      margin:0;
  }

`