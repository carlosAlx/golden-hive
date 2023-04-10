import React from "react";
import styled from "styled-components";
import bee from "../../assets/bee.png";

const HeaderSectionstyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-quartenary);
    font-family: "Lora";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 51px;
    text-transform: capitalize;
  }

  li {
    list-style-type: none;
    width: 700px;
    height: 5px;
    background: linear-gradient(90deg, #ffba41 15.79%, #0b0b0b 100%);
  }
`;

type title = {
  title: string;
};

export const HeaderSection = ({ title }: title) => {
  return (
    <HeaderSectionstyle>
      <div>
        <img src={bee} alt="bee" />
        <h2>{title}</h2>
      </div>
      <li />
    </HeaderSectionstyle>
  );
};
