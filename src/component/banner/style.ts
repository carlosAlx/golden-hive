import styled from "styled-components";
import bg from "../../assets/bg.png";

export const BannerSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto 20px auto;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  .bg_dark {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(11, 11, 11, 0) 0%,
      #0b0b0b 82.2%
    );
  }

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
    -webkit-text-fill-color: transparent;
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
