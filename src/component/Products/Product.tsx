import frame_19 from "../../assets/Frame-19.png";
import frame_20 from "../../assets/Frame-20.png";
import frame_21 from "../../assets/Frame-21.png";
import frame_22 from "../../assets/Frame-22.png";
import frame_23 from "../../assets/Frame-23.png";
import frame_24 from "../../assets/Frame-24.png";
import frame_25 from "../../assets/Frame-25.png";
import { HeaderSection } from "../utils/HeaderSection";
import { ProductSection } from "./style";

export const Product = () => {
  return (
    <section>
      <ProductSection>
       <HeaderSection title={"Product"}/> 
        <div className="hive-product">
          <div className="hexagon__product">
            <img src={frame_19} alt="" />
          </div>
          <div className="hexagon__product">
            <img src={frame_20} alt="" />
          </div>
          <div className="hexagon__product">
            <img src={frame_21} alt="" />
          </div>
          <div className="hexagon__product">
            <img src={frame_22} alt="" />
          </div>
          <div className="hexagon__product">
            <img src={frame_23} alt="" />
          </div>
          <div className="hexagon__product">
            <img src={frame_24} alt="" />
          </div>
          <div className="hexagon__product">
            <img src={frame_25} alt="" />
          </div>
        </div>
      </ProductSection>
    </section>
  );
};
