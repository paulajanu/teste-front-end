import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 14px "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`
