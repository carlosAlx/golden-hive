import React from "react";
import { BannerSection } from "./style";
import honney from "../../assets/honey.png";
import { Hexagon } from "../utils/Hexagon";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Banner = () => {
  return (
    <section id="home">
      <BannerSection>
        <h1>Golden Hive Honey</h1>
        <div className="img__content">
          <img src={honney} alt="" />
          <div className="ts">
            <div className="hexagon">
              <a>Catalog</a>
            </div>
          </div>
          <div className="button__content">
            <div className="hexagon">
              <a>Shop</a>
            </div>
          </div>
        </div>

        <div className="icon__content">
          <i>
            <AiOutlineArrowDown className="icon"/>
          </i>
        </div>
      </BannerSection>
    </section>
  );
};
