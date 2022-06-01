import styled from "styled-components";


export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: ${props=>props.theme.bodyAlt};
  width:50%;
  min-width: 300px;
  color: #FFF;
  font-size: 40px;
  z-index: 1002;
  box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
`

export const Shadow = styled.div`
      position: fixed;
      width:100vw;
      top:0;
      left:0;
      height: 100vh;
      background-color: ${props=>props.theme.body};
      filter: blur(20px);
      z-index:1001;
      opacity: 0.7;
`