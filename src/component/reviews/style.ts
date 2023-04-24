import styled from "styled-components";

export const ReviewStyle = styled.div`
  .hexagon__review {
    width: 250px;
    border: none;
    color: black;
    padding: 20px;
    background: rgba(242, 187, 90, 0.1);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    
  }

  p {
    color: var(--color-quartenary);
    line-height: 1.5rem;
  }

  .hexagon__card {
    display: flex;
    position: relative;
    cursor: pointer;
    color: var(--color-quartenary);
    padding: 10px;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    width: 210px;
    height: 270px;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 135px;
    overflow: hidden;
    background: rgba(242, 187, 90, 0.1);
    border-radius: 0 20px 20px 0;
    border: none;
    padding: 0 10px;
    transition: all 0.5s ease-in-out 0.5s;
  }
  .expanded {
    width: 700px;
  }
  .expanded:before {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    transform: rotate(180deg);
  } 
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .icon_content {
    display: flex;
    justify-content: space-between;
  }
  .icon__star {
    display: flex;
    color: yellow;
  }
`;
