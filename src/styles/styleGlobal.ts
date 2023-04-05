import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{

}
:root{
    --color-primary: #FBD46D;
    --color-secondary: #0B0B0B;
    --color-tertiary: #FFC24B;
    --color-quartenary: #FFF9C0;
}
body {
    margin: 0;
    background-color: var(--color-secondary);
}
a{
    text-decoration: none;
}
ul{
    list-style-type: none;
}

button{
    padding: 0 28px;
    border: 1px solid var(--color-tertiary);
    background-color: transparent;
    color: var(--color-tertiary);
}
`;
