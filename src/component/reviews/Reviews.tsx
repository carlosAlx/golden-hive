import React from "react";
import { HeaderSection } from "../utils/HeaderSection";
import { ReviewStyle } from "./style";
import client_1 from "../../assets/client/client-1.png";
import { AiFillStar } from "react-icons/ai";
import { clienteData } from "./Data";
import { Card } from "./Card";

export const Reviews = () => {
  return (
    <section>
      <div className="container">
        <HeaderSection title={"Review"} />
        <ReviewStyle>
          <div className="flex">
            {clienteData.map((item)=>(
              <Card key={item.name} data={item}/>
            ))}     
          </div>
        </ReviewStyle>
      </div>
    </section>
  );
};
