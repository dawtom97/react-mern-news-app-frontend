import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size:10px;
  }
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text}; 
    transition: all 0.50s linear;
    font-family: 'Poppins',sans-serif;
  }
  input::placeholder, textarea::placeholder {
    font-family: 'Poppins',sans-serif;
  }

  .switcher {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width:40px;
    height: 40px;
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 50%;
    background: ${(props) => props.theme.bodyAlt};
    box-shadow: 0px 4px 5px 1px ${(props) => props.theme.mainShadow};
    color: ${(props) => props.theme.text}; 
    font-size: 2rem;
    line-height: 0;
    cursor: pointer;
    z-index: 99;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.text}; 

  }
  
@media(max-width:1024px) {
  html {
    font-size: 9px;
  }
}
`;
