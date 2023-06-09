import styled from "styled-components";
import cover from "../../assets/cover.png";

export const AboutSection = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    row-gap: 2rem;
    align-items: center;
  }
  .about__background {
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .container_text {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  p {
    color: var(--color-quartenary);
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 300%;
    text-transform: capitalize;
  }
`;
