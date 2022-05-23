import styled from "styled-components";

export const Modal = styled.div`
  width:300px;
  min-height: 200px;
  background-color: ${props=>props.theme.bodyAlt};
  position: fixed;
  top:50%;
  left:50%;
  padding:20px;
  transform: translate(-50%,-50%);
  z-index: 100;
  transition: 0.4s;
  
` 