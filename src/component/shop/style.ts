import styled from "styled-components";

export const ShopSection = styled.div`
  max-width: 1200px;
  margin:  20px auto;

  .container_text {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .title {
    display: flex;
    align-items: center;
    color: var(--color-quartenary);
    font-family: "Lora";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 51px;
    text-transform: capitalize;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: end;
  }
  .card_slide {

  }


  p {
    color: var(--color-quartenary);
  }
  strong {
    color: var(--color-primary);
  }
`;
