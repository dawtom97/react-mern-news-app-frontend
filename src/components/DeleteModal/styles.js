import styled from "styled-components";

export const Modal = styled.div`
  width:300px;
  min-height: 200px;
  background-color: ${props=>props.theme.bodyAlt};
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 100;

` 