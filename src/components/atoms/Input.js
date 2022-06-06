import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 8px 0;
  border-radius: 15px;
  background: ${(props) => props.theme.body};
  border: none;
  padding: 10px;
  color:${(props=>props.theme.text)}
`;


