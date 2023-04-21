import styled from "styled-components";

export const ShopSection = styled.div`
  .container_text {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: end;
  }
  p {
    color: var(--color-quartenary);
  }
  strong {
    color: var(--color-primary);
  }
  .pag_five {    
    color: black;
    padding: 20px;
    background: rgba(242, 187, 90, 0.1);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
  
.swiper-pagination-bullet {
  color: black;
  padding: 20px;
  background: rgba(242, 187, 90, 0.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border-radius: 0 !important;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background-color: var(--color-tertiary);
}

`;
