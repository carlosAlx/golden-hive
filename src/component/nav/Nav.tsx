import React from "react";
import { NavMenu } from "./style";

export const Nav = () => {
  return (
    <NavMenu>
      <div className="menu">
        <div className="">
            <strong>Golden Hive Honey</strong>
        </div>
        <ul>
          {" "}
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
            <a href=""></a>
          </li>
        </ul>
        <div>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
      </div>
    </NavMenu>
  );
};
