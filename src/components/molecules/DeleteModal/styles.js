import styled from "styled-components";

export const Modal = styled.div`
  width:300px;

  background-color: ${props=>props.theme.bodyAlt};
  position: fixed;
  top:50%;
  left:50%;
  padding:20px;
  transform: translate(-50%,-50%);
  z-index: 100;
  box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};

  transition: 0.4s;

  & > div {
    display: flex;
    gap:10px;
    margin:20px 0;
  }

  & > button {
    width: 45%;
  }
` 
