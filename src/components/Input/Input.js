import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 8px 0;
  border-radius: 15px;
  background: ${(props) => props.theme.body};
  border: none;
  padding: 10px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin: 8px 0;
  border-radius: 15px;
  background: ${(props) => props.theme.body};
  border: none;
  padding: 10px;
  resize: none;
`;

export const Submit = styled.input.attrs({
  type: "submit",
})`
  width: 100%;
  height: 30px;
  display: block;
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 20px;
  background: ${(props) => props.theme.primary};
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

