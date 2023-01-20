import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter';
}

html,
body {
    max-width: 100vw;
    overflow-x: hidden;
}

body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient( to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
}

a {
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyle;
