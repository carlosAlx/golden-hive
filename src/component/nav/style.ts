import styled from "styled-components";

export const NavMenu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;

  .menu {
    inline-size: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin: 0;
    justify-content: center;
    padding-inline-start: 0;
  }
  
  a {
    color: var(--color-tertiary);
    padding: 0.5rem;
  }
`;
