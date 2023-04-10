import React from "react";
import { BeautySectionStyle } from "./style";
import { HeaderSection } from "../utils/HeaderSection";
import { Hexagon } from "../utils/Hexagon";
import beauty_pic from "../../assets/beauty-pic.png";

export const Beauty = () => {
  return (
    <section className="container" id="beauty">
      <BeautySectionStyle>
        <HeaderSection title={"Beauty"} />
        <div className="row">
          <div className="colum">
            <p>
              Honey is not only a delicious treat, but it also has many benefits
              for your skin. At our honey online shop, we offer a wide range of
              beauty products made from honey to help you achieve healthy,
              radiant skin.
            </p>
            <Hexagon>
              <a>More</a>
            </Hexagon>
          </div>
          <img src={beauty_pic} alt="" className="img__back" />
        </div>
      </BeautySectionStyle>
    </section>
  );
};
