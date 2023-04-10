import styled from "styled-components";
import light from "../../assets/light.png";

export const BeautySectionStyle = styled.div`
  .colum {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 auto;
    justify-content: space-between;
  }

  .img__back {
    background-image: url(${light});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
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
