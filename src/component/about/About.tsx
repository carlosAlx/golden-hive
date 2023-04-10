import React from "react";
import bee from "../../assets/bee.png";
import honey from "../../assets/honeyjar-about.png";
import { AboutSection } from "./style";
import { Hexagon } from "../utils/Hexagon";
import { HeaderSection } from "../utils/HeaderSection";

export const About = () => {
  return (
    <section className="container">
      <AboutSection>
       <HeaderSection title={"About"}/>
        <div className="row">
          <div className="container_text">
            <p>
              At Golden Hive Honey, we are passionate about providing our
              customers with the finest quality honey products straight from our
              beekeeping farms. Our journey began years ago when our founders, a
              group of dedicated beekeepers, set out to create a company that
              not only provides exceptional honey but also supports sustainable
              beekeeping practices.
            </p>
            <Hexagon>
              <a>More</a>
            </Hexagon>
          </div>
          <div className="about__background">
            <img src={honey} alt="" />
          </div>
        </div>
      </AboutSection>
    </section>
  );
};
