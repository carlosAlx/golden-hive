import styled from "styled-components";

export const ProductSection = styled.div`
  padding: 0 20px;
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;

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
    margin-bottom: 30px;
  }

  .hive-product {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: auto;
    justify-content: center;
    max-width: 1060px;
  }
  img {
    width: fit-content;
  }

  .hexagon__product {
    margin-top: -30px;
    width: 200px;
    text-align: center;
    color: black;
    padding: 36.5px 11px;
    position: relative;
    background: rgba(242, 187, 90, 0.1);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;
