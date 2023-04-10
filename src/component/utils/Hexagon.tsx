import React from "react";
import styled from "styled-components";

const HexagonDiv = styled.div`
  background-color: var(--color-primary);
  color: var(--color-quartenary);
  clip-path: polygon(
    var(--btn-raise) 0%,
    calc(100% - var(--btn-raise)) 0%,
    100% 50%,
    calc(100% - var(--btn-raise)) 100%,
    var(--btn-raise) 100%,
    0 50%
  );
  padding: 1px;
`;
const HexagonContent = styled.div`
  clip-path: polygon(
    var(--btn-raise) 0%,
    calc(100% - var(--btn-raise)) 0%,
    100% 50%,
    calc(100% - var(--btn-raise)) 100%,
    var(--btn-raise) 100%,
    0 50%
  );
  background-color: var(--color-secondary);
  padding: 1.4rem;
`;
type child = {
  children: React.ReactNode;
};

export const Hexagon = ({ children }: child) => {
  return (
    <HexagonDiv>
      <HexagonContent>{children}</HexagonContent>
    </HexagonDiv>
  );
};
