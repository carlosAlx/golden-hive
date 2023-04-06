import React from "react";
import { BannerSection } from "./style";
import honney from "../../assets/honey.png"

export const Banner = () => {
  return (
    <section id="home">
      <BannerSection>
        <h1>Golden Hive Honey</h1>

        <img src={honney} alt="" />
      </BannerSection>
    </section>
  );
};
