import styled from "styled-components";
import pic_shop from "../../assets/pic-shop.png";
import size_section from "../../assets/size-section.png";
import { Hexagon } from "../utils/Hexagon";

const Card__slide = styled.div`
  max-width: 800px;
  background-color: rgba(242, 187, 90, 0.1);
  border-radius: 50px;
  padding: 10px;
  margin: 30px auto;

  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: end;
  }
  p {
    color: var(--color-quartenary);
    font-family: "Lora";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
    text-transform: capitalize;
    margin: 0 auto;
  }
  strong {
    color: var(--color-primary);
  }
`;

export const Card = () => {
  return (
    <Card__slide>
      <div className="row">
        <img src={pic_shop} alt="" />
        <div className="column">
          <p>
            <strong>Flavor :</strong> Fireweed honey has a delicate, sweet
            flavor with subtle floral notes. It has a smooth and creamy texture
            that melts in your mouth.
          </p>
          <p>
            <strong>Health Benefits :</strong> Fireweed honey is rich in
            antioxidants, vitamins, and minerals. It has antibacterial and
            anti-inflammatory properties, making it a natural remedy for sore
            throats, coughs, and colds.
          </p>
          <div className="row">
            <img src={size_section} alt="" />
            <div>
              <p>
                <strong>Color: </strong>
                Amber
              </p>
              <p>
                <strong>Region: </strong>
                Forest Areas Of India
              </p>
              <p>
                <strong>Price: </strong>
                $200
              </p>
            </div>
            <Hexagon>
              <a>Add to Card</a>
            </Hexagon>
          </div>
        </div>
      </div>
    </Card__slide>
  );
};
