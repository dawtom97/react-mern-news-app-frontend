import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content:"";
    width:100%;
    min-height: 100vh;
    top:0;
    left:0%;
    background-color: ${props=>props.theme.body};
    opacity: 0.7;
  }

  & > div {
    background-color: ${(props) => props.theme.bodyAlt};
    padding: 25px;
    width:35%;
    min-width: 300px;
    position: absolute;
    box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};

  }

  & form {
  }
`;
