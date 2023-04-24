import { AiFillStar } from "react-icons/ai";
import { clientType } from "./Data";
import { useState } from "react";

export const Card = ({ data }: { data: clientType }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div onClick={() => setExpanded(!expanded)} className={`hexagon__card ${expanded ? "expanded" : ""}`}>
      <img className="hexagon__review" src={data.avatar} alt="" />

      <div className="content">
        <p>{data.comment}</p>
        <div className="icon_content">
          <div className="icon__star">
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
          </div>
          <label>{data.name}</label>
        </div>
      </div>
    </div>
  );
};
