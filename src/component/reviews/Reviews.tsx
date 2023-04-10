import React from "react";
import { HeaderSection } from "../utils/HeaderSection";
import { ReviewStyle } from "./style";
import client_1 from "../../assets/client/client-1.png";

export const Reviews = () => {
  return (
    <section>
      <div className="container">
        <HeaderSection title={"Review"} />
        <ReviewStyle>
          <div>
            <div>
              <div className="hexagon_card">
                <img className="hexagon__review" src={client_1} alt="" />
                <p>
                  I recently discovered Golden Hive Honey's online shop, and I
                  have to say I am blown away by the quality of their products.
                </p>
              </div>
              <img className="hexagon__review" src={client_1} alt="" />
              <img className="hexagon__review" src={client_1} alt="" />
              <img className="hexagon__review" src={client_1} alt="" />
              <img className="hexagon__review" src={client_1} alt="" />
              <img className="hexagon__review" src={client_1} alt="" />
              <img className="hexagon__review" src={client_1} alt="" />
              <img className="hexagon__review" src={client_1} alt="" />
            </div>
          </div>
        </ReviewStyle>
      </div>
    </section>
  );
};
