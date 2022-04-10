import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
     --main-color : #4e426d;
     --background-color: #F5f7f8; 
     --text-color: #ffffff;
     --secondary : #3ba58a;
  
     
}


html, body{
    background-color: var(--background-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
       
}
`;
