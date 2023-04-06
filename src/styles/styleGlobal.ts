import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
type color = {
  colorButton: string;
};
export const GlobalStyle = createGlobalStyle`
*{

}
:root{
    --color-primary: #FBD46D;
    --color-secondary: #0B0B0B;
    --color-tertiary: #FFC24B;
    --color-quartenary: #FFF9C0;
    --btn-raise: 1rem;
}
body {
    margin: 0;
    background-color: var(--color-secondary);
}
a {
    text-decoration: none;
}
strong {
    color: var(--color-quartenary);
}
ul {
    list-style: none;
}
.flex {
    display: flex;
    gap: 2rem;
}

`;
