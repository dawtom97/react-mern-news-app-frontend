import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin: 8px 0;
  border-radius: 15px;
  background: ${(props) => props.theme.body};
  border: none;
  padding: 10px;
  resize: none;
  color:${(props=>props.theme.text)}
`;
