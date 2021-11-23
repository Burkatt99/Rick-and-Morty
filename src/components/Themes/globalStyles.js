import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  body .menu .title{
      color: ${({ theme }) => theme.color}
  }
  body .menu .link{
      color: ${({ theme }) => theme.color};
      font-size: ${({ theme }) => theme.size}
  }
  .cards h3{
    color: ${({ theme }) => theme.color};
  }
  .form #filled-basic{
    background: ${({ theme }) => theme.toggleBack};
  }
  #demo-simple-select-standard-label{
    font-size: ${({ theme }) => theme.size}
  }
`;
