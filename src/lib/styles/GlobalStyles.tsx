import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyle";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-black: #000000;
        --color-gray: #D9D9D9;
        --color-blue: #0094ff;
    }

    ${ResetStyle};

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *{
        box-sizing:border-box ;
    }
    a {
        text-decoration:none ;
        color:inherit;
    }
    img, svg {
        vertical-align:middle ;
    }
`;
export default GlobalStyle;
