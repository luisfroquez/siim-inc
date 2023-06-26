import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/img/banner/fotoFooter.png";
import Time from "../../public/img/icon/time.png";
import Logo from "../../public/img/logo/logoFooter.png";
const Footer = ({ container, footerBg, textCenter }) => {
  return (
    <footer>
      <div
        className={`${
          !container
            ? "footer-area box-90 pt-100 pb-60"
            : "footer-area pl-100 pr-100 mt-100"
        }`}
      >
        <div
          className={footerBg ? "footer-area box-90 pt-100 pb-60" : ""}
          data-background={footerBg ? "/img/bg/footer300.png" : ""}
          style={{
            backgroundImage: footerBg ? 'url("/img/bg/footer300.png")' : "",
          }}
        >
          <div className={`${container ? "container" : "container-fluid"}`}>
            <div className="row">
              <div className="col-xl-3 col-lg-5 col-md-6 ">
                <div className="footer-widget mb-40">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <Image src={Logo} alt="Logo" />
                      </a>
                    </Link>
                  </div>
                  <p>
                  SIIM Ingeniería, tiene experiencia en la instalación de sistemas en muchas aplicaciones diferentes como comercial, 
                  industrial y residencial.
                  </p>
                 {/*  <div className="footer-time d-flex mt-30">
                    <div className="time-icon">
                      <Image src={Time} alt="" />
                    </div>
                    <div className="time-text">
                      <span>Got Questions ? Call us 24/7!</span>
                      <h2>(0600) 874 548</h2>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
                <div className="footer-widget pl-50 mb-40">
                  <h3>Redes sociales</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
                <div className="footer-widget pl-30 mb-40">
                  <h3>Menu</h3>
                  <ul className="footer-link">
                    <li>
                      <Link href="/homeSiim" onClick={(e) => e.preventDefault()}>
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" onClick={(e) => e.preventDefault()}>
                        Siim
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/col-3" onClick={(e) => e.preventDefault()}>
                        Distribuidora SIIM
                      </Link>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Contacto
                      </a>
                    </li>
                   {/*  <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        China
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Japan
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="footer-widget mb-40">
                  <h3>Información</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Política de Privacidad
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Política de Devoluciones y Reembolsos
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Dirección
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        FAQ
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Wholesale
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Direction
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-banner">
                    <Link href="/shop">
                      <a>
                        <Image src={Banner} alt="Banner" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area box-105">
        <div className="container-fluid">
          <div className={`${footerBg ? "" : "copyright-border"} pt-30 pb-30`}>
            <div className="row">
              <div
                className={`${
                  textCenter ? "col-xl-12" : "col-xl-6 col-lg-6 col-md-6"
                }`}
              >
                <div
                  className={`copyright text-center  ${
                    textCenter ? "" : "text-md-left"
                  }`}
                >
                  <p>
                    Copyright © {new Date().getFullYear()}{" "}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Siim
                    </a>
                    . Todos los derechos reservados
                  </p>
                </div>
              </div>
              {!textCenter && (
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer-icon text-center text-md-right ">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-twitter" />
                    </a>
                    {/* <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-behance" />
                    </a> */}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-linkedin-in" />
                    </a>
                    {/* <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-youtube" />
                    </a> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
