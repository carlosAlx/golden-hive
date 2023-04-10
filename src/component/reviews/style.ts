import styled from "styled-components";

export const ReviewStyle = styled.div`
  .hexagon__review {
    margin-top: -30px;
    width: 200px;
    text-align: center;
    color: black;
    padding: 20px;
    position: relative;
    background: rgba(242, 187, 90, 0.1);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  p {
    color: var(--color-quartenary);
  }

  .hexagon_card {
    display: inline-flex;
    align-items: center;
  }
  .hexagon_card p {
    background: rgba(242, 187, 90, 0.1);
    width: 400px;
    height: 120px;
    border-radius: 20px;
    margin-left: 0;
  }
`;
