import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Logo from "../../../public/img/logo/logo-white.png";

const DasktopHeader3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="basic-bar info-bar" onClick={() => setIsOpen(true)}>
        <span className="bar1" />
        <span className="bar2" />
        <span className="bar3" />
      </div>
      <div className={`extra-info ${isOpen ? "info-open" : ""}`}>
        <div className="close-icon" onClick={() => setIsOpen(false)}>
          <button>
            <i className="far fa-window-close" />
          </button>
        </div>
        <div className="logo-side">
          <Link href="/">
            <Image src={Logo} alt="" width={300} />
          </Link>
        </div>
        <div className="side-info mb-30">
          <div className="main-menu side-menu">
            <nav id="mobile-menu-3" style={{ display: "block" }}>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/">
                        <a>Home Style 1</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2">
                        <a>Home Style 2</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-3">
                        <a>Home Style 3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-4">
                        <a>Home Style 4</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-5">
                        <a>Home Style 5</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mega-menu">
                  <Link href="/shop">Shop</Link>
                  <ul className="submenu ">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Category View
                      </a>
                      <ul className="submenu  level-1">
                        <li>
                          <Link href="/shop">Shop 2 Column</Link>
                        </li>
                        <li>
                          <Link href="/products">Shop Filter Style</Link>
                        </li>
                        <li>
                          <Link href="/products">Shop Full</Link>
                        </li>
                        <li>
                          <Link href="/shop/col-3">Shop 3 Column</Link>
                        </li>
                        <li>
                          <Link href="/shop/list">List View</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Category View
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link href="/shop/left-sidebar">Sidebar Left</Link>
                        </li>
                        <li>
                          <Link href="/shop/sidebar-right">Sidebar Right</Link>
                        </li>
                        <li>
                          <Link href="/cart">Shopping Cart</Link>
                        </li>
                        <li>
                          <Link href="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link href="/wishlist">My Wishlist</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Products Types
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link href="/shop/1">Simple Product</Link>
                        </li>
                        <li>
                          <Link href="/shop/19">Variable Product</Link>
                        </li>
                        <li>
                          <Link href="/shop/upcoming/16">Product Upcoming</Link>
                        </li>
                        <li>
                          <Link href="/shop/up-thumb/16">
                            Thumb Top Product
                          </Link>
                        </li>

                        <li>
                          <Link href="/compare">Compare</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/products">Products </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/blog/col-2">
                        <a>Blog 2 Column</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/col-mas-2">
                        <a>Blog 2 Col Masonry</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/col-3">
                        <a>Blog 3 Column</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/col-mas-3">
                        <a>Blog 3 Col Masonry</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/1">
                        <a>Blog Details</a>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link href="/blog/10">
                        <a>Blog Details Video</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Pages
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/login">login</Link>
                    </li>
                    <li>
                      <Link href="/register">Register</Link>
                    </li>
                    <li>
                      <Link href="/cart">Shoping Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/compare">Compare</Link>
                    </li>
                    <li>
                      <Link href="/order-success">Order Success</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="side-info-bottom">
          <div className="side-cta">
            <p>info@example.com</p>
            <h4>+(090) 8765 86543 85</h4>
          </div>
          <div className="social-icon-right mt-20">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-twitter" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DasktopHeader3;
