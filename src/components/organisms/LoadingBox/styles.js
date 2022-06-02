import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: ${props=>props.theme.body};
  top:0;
  left:0;
  position: fixed;
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:25px;
  flex-direction: column;
  z-index: ${props=>props.isVisible ? '99999' : '-1'};
  transition: 1s;
  opacity: ${props=>props.isVisible ? '1' : '0'};


`
export const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 80px;
  height: 80px;
  
  & .path {
    stroke: ${props=>props.theme.primary};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;