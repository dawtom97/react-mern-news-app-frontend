import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.bodyAlt};
  padding: 45px 0;
`;
export const InnerWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  & header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    & > p {
      font-size: 1.4rem;
      @media screen and (max-width:768px) {
        text-align: center;
      }
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      margin: 0 10px;
      color: ${(props) => props.theme.text} !important;
      font-size: 3rem !important;
    }
  }

  & > main {
    display: flex;

    gap:50px;
    @media screen and (max-width:768px) {
        flex-direction:column;
      }

    & > div {
      display: flex;
      gap:75px;
      @media screen and (max-width:576px) {
        flex-direction:column;
        gap:25px;
      }
    }
  }

  & main h2 {
    color: ${(props) => props.theme.primary};
    font-size: 1.6rem;
    @media screen and (max-width:768px) {
        text-align: center;
      }
  }

  & ul {
    list-style: none;
    font-size: 1.4rem;

    @media screen and (max-width:768px) {
        text-align: center;
      }

    & li {
      margin: 10px 0;

      & a {
        transition: 0.4s;
      }

      & a:hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;
