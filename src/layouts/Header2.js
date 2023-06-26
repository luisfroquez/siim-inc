import Link from "next/link";
import React from "react";
import DasktopHeader2 from "./header/DasktopHeader2";
import MobileHeader from "./header/MobileHeader";
import SearchTrigger from "./header/SearchTrigger";
import ShopCart from "./header/ShopCart";

const Header2 = () => {
  return (
    <header>
      <div className="header-area header-3 pt-35 pb-35">
        <div className="container">
          <div className="row align-items-center">
           {/*  <div className="col-xl-4 col-lg-3 col-md-3 col-7 d-none d-lg-block d-flex align-items-center d-xs-disable">
              <DasktopHeader2 />
            </div> */}
            <div className="col-xl-4 col-lg-5 col-md-4 col-5">
              <div className="logo text-left text-md-center">
                <Link href="/shop">
                  <a>
                    <img src="img/logo/logoAzulSiim.png" alt="img" />  {/*  width={90}  */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-8 col-7 pl-0">
              <div className="header-right header-right-3 f-right">
                <ul>
                  <SearchTrigger />
                  <li className="login-btn">
                    <Link href="/login">
                      <a>
                        <i className="far fa-user" />
                      </a>
                    </Link>
                  </li>
                  <ShopCart />
                </ul>
              </div>
            </div>
            <div className="col-12 d-lg-none">
              <MobileHeader />
            </div>
          </div>
        </div>
      </div>
      <div
        className="header-sep"
        data-background="img/bg/header-sep.png"
        style={{ backgroundImage: 'url("img/bg/header-sep.png")' }}
      />
    </header>
  );
};

export default Header2;
