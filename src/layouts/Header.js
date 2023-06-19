import Link from "next/link";
import React, { useEffect } from "react";
import { scroll } from "../utils/utils";
import Catagory from "./header/Catagory";
import DasktopHeader1 from "./header/DasktopHeader1";
import MobileHeader from "./header/MobileHeader";
import SearchTrigger from "./header/SearchTrigger";
import ShopCart from "./header/ShopCart.js";

const Header = ({
  sticky,
  container,
  transparent,
  whiteMenu,
  extraTransparentClass,
}) => {
  useEffect(() => {
    sticky && window.addEventListener("scroll", scroll);
  }, []);
  return (
    <header
      className={`${
        transparent
          ? `transparent-header ${
              extraTransparentClass ? extraTransparentClass : ""
            }`
          : ""
      }`}
    >
      <div
        className="header-area box-90"
        id={`${sticky ? "header-sticky" : ""}`}
      >
        <div className={`${container ? "container" : "container-fluid"}`}>
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center">
              <Catagory whiteMenu={whiteMenu} />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <DasktopHeader1 whiteMenu={whiteMenu} />
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0">
              <div className="header-right f-right">
                <ul>
                  <SearchTrigger />
                 {/*  <li className="login-btn">
                    <Link href="/login">
                      <a>
                        <i className="far fa-user" />
                      </a>
                    </Link>
                  </li> */}
                  <ShopCart />
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <MobileHeader />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
