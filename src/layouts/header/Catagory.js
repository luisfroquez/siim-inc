// import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
// import logoWhite from "/img/logo/logo-white.png";
// import logo from "/img/logo/logo.png";

const Catagory = ({ whiteMenu }) => {
  const [catMenu, setCatMenu] = useState(false);
  let category = [
    "Detección de incendios",
    "Extinción de incendios",
    "Electrónica",
    "Ferreteria",
    "Electricidad",
  ];
  return (
    <Fragment>
     {/*  <div className="d-flex">
        <div
          className="basic-bar cat-toggle"
          onClick={() => setCatMenu(!catMenu)}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </div>
      </div> */}
      <div className="logo mt-1">
        <Link href="/">
          <a>
            <img
              src={
                whiteMenu ? "/img/logo/logoSIIM.png" : "/img/logo/logoSIIM.png"
              }
              alt="Logo"
              width={215}
            />
          </a>
        </Link>
      </div>

    {/*   <div className={`category-menu d-block ${catMenu ? "block" : ""}`}>
        <h4>Categorías</h4>
        <ul>
          {category &&
            category.map((category) => (
              <li key={category}>
                <Link href="/shop">
                  <a className="text-capitalize">
                    <i className="flaticon-shopping-cart" /> {category}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div> */}
    </Fragment>
  );
};

export default Catagory;
