import { ShopSection } from "./style";
import { Carrossel } from "./SlideCarrossel";
import { HeaderSection } from "../utils/HeaderSection";

export const Shop = () => {
  return (
    <section className="container" id="shop">
      <ShopSection>
        <HeaderSection title={"Shop"} />
        <div className="slide">
          <Carrossel />
        </div>
      </ShopSection>
    </section>
  );
};
