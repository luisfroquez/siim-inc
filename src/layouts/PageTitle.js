import Link from "next/link";
import { useEffect } from "react";
import { dataImage } from "../utils/utils";

const PageTitle = ({ pageHeading, active, thankupage, id }) => {
  useEffect(() => {
    dataImage();
  }, []);
  return (
    <section
      className="breadcrumb-area"
      data-background="/img/bg/BgProducto.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center">
              {thankupage && (
                <i
                  className="fa fa-check-circle text-success fs-100 mb-3"
                  aria-hidden="true"
                />
              )}

              <h1 className={thankupage ? "mb-2" : ""}>{pageHeading}</h1>
              {thankupage && (
                <p className="fs-20">
                  El pago se ha realizado exitosamente y su pedido está proceso de envío <br /> Transaction ID:
                  {id}
                </p>
              )}
              <ul className="breadcrumb-menu">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Inicio</a>
                  </Link>
                </li>
                <li>
                  <span>{active}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
