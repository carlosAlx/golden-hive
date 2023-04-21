import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
type color = {
  colorButton: string;
};
export const GlobalStyle = createGlobalStyle`
*, *:after, *:before {
    box-sizing: border-box;
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
    font-family: Elephant;
}
a {
    text-decoration: none;
}
strong {
    color: var(--color-quartenary);
}
ul, li {
    list-style: none;
}
.flex {
    display: flex;
    gap: 2rem;
}
.row {
    display: flex;
    flex-direction: row;
}

.container {
    max-inline-size: 1300px;
    overflow: hidden;
    margin: auto;
}
.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
.swiper {
  padding-bottom: 60px;
  }
`;
