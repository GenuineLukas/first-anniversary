import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/smallerLogo.png";
import { CgShoppingBag } from "react-icons/cg";
import { CgSmileMouthOpen } from "react-icons/cg";
import { Route, Link } from "react-router-dom";
import Virtual from "../Virtual/Virtual";

const Header = () => {
  const [isClick, setClick] = useState(false);
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>
              <Link to="/products">Collections</Link>
            </li>
            <li>
              <Link to="/slider">Messages</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
