import React from "react";
import { NavMenu } from "./style";
import { Hexagon } from "../utils/Hexagon";

export const Nav = () => {
  return (
    <NavMenu>
      <div className="menu">
        <div className="">
          <strong>Golden Hive Honey</strong>
        </div>
        <Hexagon>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About US</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
          </ul>
        </Hexagon>

        <div className="flex">
          <Hexagon>
            <a href="">Sign In</a>
          </Hexagon>
          <Hexagon>
            <a href="">Sign Up</a>
          </Hexagon>
        </div>
      </div>
    </NavMenu>
  );
};
