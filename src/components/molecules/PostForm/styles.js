import styled, { css } from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  background-color: ${(props) => props.theme.bodyAlt};
  width: 320px;
  z-index: 9999;
  padding: 30px;
  transform: translateX(-400px);
  transition: 0.5s;
  top: 0;
  min-height: 100vh;
  box-shadow: 0px 4px 5px 1px ${(props) => props.theme.mainShadow};

  ${props=>props.showCreator && css`
    transform: translateX(0);
  `}

`;
