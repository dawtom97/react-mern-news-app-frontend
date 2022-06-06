import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top:0;
  background-color: #c21313;
  width: 300px;
  padding: 15px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px 0.4px ${props => props.theme.mainShadow};
  border-radius: 8px;
  color:#fff;

  & > svg {
     font-size: 24px;
     cursor: pointer;
  }
`