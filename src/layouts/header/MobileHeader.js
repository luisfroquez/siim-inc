import Link from "next/link";
import { Fragment, useState } from "react";

const MobileHeader = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [multiMenu, setMultiMenu] = useState(false);
  return (
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <a
          href="#nav"
          className={`meanmenu-reveal ${
            mainHeader
              ? "d-flex align-items-center justify-content-center fs-18"
              : ""
          }`}
          onClick={(e) => {
            setMainHeader(!mainHeader);
            e.preventDefault();
          }}
        >
          {mainHeader ? (
            "X"
          ) : (
            <Fragment>
              <span />
              <span />
              <span />
            </Fragment>
          )}
        </a>
        <nav className={`mean-nav mobile-header ${mainHeader ? "block" : ""}`}>
          <ul>
            <li>
              <Link legacyBehavior href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li className="mega-menu">
              <Link legacyBehavior href="/shop/col-3">Distribuidora</Link>
              <ul className={`submenu ${subMenu === "shop" ? "block" : ""}`}>
                <li>
                  <a href="#">Category View</a>
                  <ul className={`submenu ${multiMenu === "1" ? "block" : ""}`}>
                    <li>
                      <Link legacyBehavior href="/shop">Shop 2 Column</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/products">Shop Filter Style</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/products">Shop Full</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop/col-3">Shop 3 Column</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop/list">List View</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "1" ? false : "1");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "1" ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Category View
                  </a>
                  <ul className={`submenu ${multiMenu === "2" ? "block" : ""}`}>
                    <li>
                      <Link legacyBehavior href="/shop/left-sidebar">Sidebar Left</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop/sidebar-right">Sidebar Right</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/cart">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/wishlist">My Wishlist</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "2" ? false : "2");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "2" ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="#">Products Types</a>
                  <ul className={`submenu ${multiMenu === "3" ? "block" : ""}`}>
                    <li>
                      <Link legacyBehavior href="/shop/1">Simple Product</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop/19">Variable Product</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop/upcoming/16">Product Upcoming</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop/up-thumb/16">Thumb Top Product</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/compare">Compare</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "3" ? false : "3");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "3" ? "-" : "+"}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="/about">SIIM</Link>
            </li>
            
            <li className="mean-last">
              <Link legacyBehavior href="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
