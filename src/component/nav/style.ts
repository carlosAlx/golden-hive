import styled from "styled-components";

export const NavMenu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  .menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    border: 1px solid var(--color-primary);
  }
  strong {
    color: var(--color-quartenary);
  }
  a {
    color: var(--color-tertiary);
  }
`;
