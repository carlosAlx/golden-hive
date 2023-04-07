import React from "react";
import { ShopSection } from "./style";
import bee from "../../assets/bee.png";
import pic_shop from "../../assets/pic-shop.png";
import size_section from "../../assets/size-section.png";
import { Hexagon } from "../utils/Hexagon";
import { Carrossel } from "./SlideCarrossel";

export const Shop = () => {
  return (
    <section id="shop">
      <ShopSection>
        <div className="title">
          <img src={bee} alt="bee" />
          <h2>Shop</h2>
        </div>
        <div className="slide">
          <Carrossel />
        </div>
      </ShopSection>
    </section>
  );
};
