// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Mulish', sans-serif;
    
    *, :after, :before {
      box-sizing: border-box;
    }
  
    a {
      text-decoration: none;
    }
  }
`;