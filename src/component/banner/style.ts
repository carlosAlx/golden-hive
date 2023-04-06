import styled from "styled-components";
import colmeia from "../../assets/colmeia.jpg"

export const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  background-image: url(${colmeia});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  h1 {
    font-family: Elephant;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    background: linear-gradient(
      180deg,
      #ffeaad 11.39%,
      #ffdc83 33.75%,
      #ffc453 52.58%,
      #efa036 86.71%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin: auto;
  }
  img {
    margin: auto;
  }
`;
