import styled from "styled-components";
import colmeia from "../../assets/colmeia.jpg";

export const BannerSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 40px auto 0 auto;
  background-image: url(${colmeia});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 90%;
  max-width: 1060px;
  box-shadow: inset 0px -5px 8px rgba(0, 0, 0, 0.5);

  section {
    block-size: 100vh;
    position: relative;
  }

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
  .icon__content {
    margin: auto;
  }
  .icon {
    width: 30px;
    height: 40px;
  }
  i {
    display: flex;
    padding: 7px 4px;
    border-style: solid;
    border-image: linear-gradient(
        180deg,
        rgba(255, 186, 65, 0.876812) 0%,
        rgba(255, 251, 189, 0.876812) 100%
      )
      2px;
    border-radius: 40%;
    color: var(--color-primary);
  }
`;
