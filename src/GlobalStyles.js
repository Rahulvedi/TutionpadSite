import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0 ;
    box-sizing: border-box ;
    font-family: 'Noto Sans TC', sans-serif;
    scroll-behavior: smooth;
}
html{
    
}
a{
    text-decoration: none; 
}
li{
    list-style: none !important;
}
:root{
    --Color--Primary:#34E0A1;
    --Color--DimGrey:#cac7c7;
    --Color--Secondary:#000;
    --Color--BtnColor:#000;
}
`;
 
export default GlobalStyle;