// import swal from "@sweetalert/with-react";
import { Formik } from "formik";
import Router from "next/router";
import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import InputGroup from "../src/components/form/InputGroup";
import SelectGroup from "../src/components/form/SelectGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { setCheckoutData } from "../src/redux/action/utilis";
import { totalPrice } from "../src/utils/utils";
import {
  checkoutSchema,
  couponSchema,
  loginSchema,
} from "../src/utils/yupModal";

const Checkout = ({ setCheckoutData }) => {
  const carts = useSelector((state) => state.utilis.carts);
  const [freeShpping, setFreeShpping] = useState(false);
  const [flat, setFlat] = useState(false);
  const price = totalPrice(carts);
  let shppingPrice = 30,
    flatPrice = 7;

  const [activeId, setActiveId] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const countrys = [
    "Región de Tarapacá",
    "Región de Antofagasta",
    "Región de Atacama",
    "Región de Coquimbo",
    "Región de Valparaíso",
    "Región Metropolitana",
    "Región de O'Higgins",
  ];

  return (
    <Layout sticky textCenter container footerBg>
      <main>
        <PageTitle active="Checkout" pageHeading="Checkout" />

        <section className="coupon-area pt-100 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="coupon-accordion">
                  {/* ACCORDION START */}
                  <h3>
                    ¿Cliente que regresa?{" "}
                    <span id="showlogin" onClick={() => setActiveId(!activeId)}>
                    Haga clic aquí para iniciar sesión
                    </span>
                  </h3>
                  <div className={`custom-acc ${activeId ? "show" : ""}`}>
                    <div id="checkout-login" className={`coupon-content `}>
                      <div className="coupon-info">
                        <p className="coupon-text">
                          Quisque gravida turpis sit amet nulla posuere lacinia.
                          Cras sed est sit amet ipsum luctus.
                        </p>
                        <Formik
                          initialValues={loginSchema.initialValue}
                          validationSchema={loginSchema.schema}
                          onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                            }, 400);
                          }}
                        >
                          {({
                            values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <p className="form-row-first">
                                <InputGroup
                                  label="Email Address"
                                  id="email"
                                  name="email"
                                  type="string"
                                  placeholder="Enter Username or Email address..."
                                  values={values.email}
                                  errors={errors.email}
                                  handleBlur={handleBlur}
                                  handleChange={handleChange}
                                />
                              </p>
                              <p className="form-row-last">
                                <InputGroup
                                  label="Password"
                                  id="password"
                                  name="password"
                                  type="password"
                                  placeholder="Enter password..."
                                  values={values.password}
                                  errors={errors.password}
                                  handleBlur={handleBlur}
                                  handleChange={handleChange}
                                />
                              </p>
                              <p className="form-row">
                                <button
                                  className="btn theme-btn"
                                  disabled={isSubmitting}
                                >
                                  Iniciar sesión
                                </button>
                                <label>
                                  <input type="checkbox" />
                                  Recuérdame
                                </label>
                              </p>
                              <p className="lost-password">
                                <a href="#">¿Ha perdido su contraseña?</a>
                              </p>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                  {/* ACCORDION END */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="coupon-accordion">
                  {/* ACCORDION START */}
                  <h3>
                    ¿Tienes un cupón?{" "}
                    <span id="showcoupon" onClick={() => setActive2(!active2)}>
                     Haga clic aquí para ingresar su código
                    </span>
                  </h3>
                  <div className={`custom-acc ${active2 ? "show" : ""}`}>
                    <div
                      id="checkout_coupon"
                      className="coupon-checkout-content"
                    >
                      <div className="coupon-info">
                        <Formik
                          initialValues={couponSchema.initialValue}
                          validationSchema={couponSchema.schema}
                          onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                            }, 400);
                          }}
                        >
                          {({
                            values,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <p className="checkout-coupon">
                                <input
                                  className="mb-0"
                                  type="text"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.coupon}
                                  name="coupon"
                                  placeholder="Coupon Code"
                                />

                                <div
                                  id="val-username1-error"
                                  className="invalid-feedback animated fadeInUp mb-3"
                                  style={{ display: "block" }}
                                >
                                  {errors.coupon && errors.coupon}
                                </div>
                                <button
                                  disabled={isSubmitting}
                                  className="btn theme-btn"
                                  type="submit"
                                >
                                  Aplicar cupón
                                </button>
                              </p>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                  {/* ACCORDION END */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Formik
          initialValues={checkoutSchema.initialValue}
          validationSchema={checkoutSchema.schema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // swal({
              //   title: "Congratulations",
              //   text: "Successfuly placed your order",
              //   type: "success",
              //   icon: "success",
              // }).then(function () {
              //   Router.push(
              //     {
              //       pathname: "/order-success",
              //     },
              //     undefined,
              //     { shallow: true }
              //   );
              // });

              alert("Checkout successfully completed");
              Router.push(
                {
                  pathname: "/order-success",
                },
                undefined,
                { shallow: true }
              );

              setCheckoutData(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <section className="checkout-area pb-70">
              <div className="container">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkbox-form">
                        <h3>Detalles de envío</h3>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="country-select">
                              <SelectGroup
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="country"
                                id="country"
                                values={values.country}
                                errors={errors.country}
                                options={countrys}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="fName"
                                id="fName"
                                label="Nombre"
                                errors={errors.fName}
                                values={values.fName}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="lName"
                                id="lName"
                                label="Apellido"
                                errors={errors.lName}
                                values={values.lName}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="cName"
                                id="cName"
                                label="Nombre compañia"
                                errors={errors.cName}
                                values={values.cName}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="address"
                                id="address"
                                label="Dirección"
                                placeholder="Dirección"
                                errors={errors.address}
                                values={values.address}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Departamento, Calle, (optional)"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="city"
                                id="city"
                                label="Ciudad"
                                placeholder="Ciudad"
                                errors={errors.city}
                                values={values.city}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="state"
                                id="state"
                                label="Comuna"
                                placeholder="Comuna"
                                errors={errors.state}
                                values={values.state}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="zip"
                                id="zip"
                                label="Código Postal"
                                placeholder="Código Postal"
                                errors={errors.zip}
                                values={values.zip}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="email"
                                id="email"
                                label="Correo Electrónico"
                                type="email"
                                errors={errors.email}
                                values={values.email}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <InputGroup
                                name="phone"
                                id="phone"
                                label="Telefóno"
                                errors={errors.phone}
                                values={values.phone}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list create-acc">
                              <input
                                id="cbox"
                                type="checkbox"
                                onClick={() => setActive3(!active3)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="createAccount"
                              />
                              <label>Crear Cuenta?</label>
                            </div>
                            <div
                              className={`custom-acc ${active3 ? "show" : ""}`}
                            >
                              <div
                                id="cbox_info"
                                className="checkout-form-list create-account"
                              >
                                <p>
                                  Crear una cuenta introduciendo la información
                                  abajo. Si usted es un cliente recurrente, por favor
                                  Inicie sesión en la parte superior de la página.
                                </p>
                                <InputGroup
                                  name="password2"
                                  id="password2"
                                  label="Account password"
                                  type="password"
                                  errors={errors.password2}
                                  values={values.password2}
                                  handleBlur={handleBlur}
                                  handleChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="different-address">
                          <div className="ship-different-title">
                            <h3>
                              <label>Enviar a una dirección diferente?</label>
                              <input
                                id="ship-box"
                                type="checkbox"
                                onClick={() => setActive4(!active4)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="defferentAddress"
                              />
                            </h3>
                          </div>
                          <div
                            className={`custom-acc ${active4 ? "show" : ""}`}
                          >
                            <div id="ship-box-info">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="country-select">
                                    <SelectGroup
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                      name="country2"
                                      id="country2"
                                      values={values.country2}
                                      errors={errors.country2}
                                      options={countrys}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="fName2"
                                      id="fName2"
                                      label="First Name"
                                      errors={errors.fName2}
                                      values={values.fName2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="lName2"
                                      id="lName2"
                                      label="Last Name"
                                      errors={errors.lName2}
                                      values={values.lName2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="cName2"
                                      id="cName2"
                                      label="Company Name"
                                      errors={errors.cName2}
                                      values={values.cName2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="address2"
                                      id="address2"
                                      label="Address2"
                                      placeholder="Street address"
                                      errors={errors.address2}
                                      values={values.address2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="checkout-form-list">
                                    <input
                                      type="text"
                                      placeholder="Apartment, suite, unit etc. (optional)"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="city2"
                                      id="city2"
                                      label="Town / City"
                                      placeholder="Town / City"
                                      errors={errors.city2}
                                      values={values.city2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="state2"
                                      id="state2"
                                      label="State / County"
                                      placeholder="State / County"
                                      errors={errors.state2}
                                      values={values.state2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="zip2"
                                      id="zip2"
                                      label="Postcode / Zip"
                                      placeholder="Postcode / Zip"
                                      errors={errors.zip2}
                                      values={values.zip2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="email2"
                                      id="email2"
                                      label="Email Address"
                                      type="email"
                                      errors={errors.email2}
                                      values={values.email2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="checkout-form-list">
                                    <InputGroup
                                      name="phone2"
                                      id="phone2"
                                      label="Phone"
                                      errors={errors.phone2}
                                      values={values.phone2}
                                      handleBlur={handleBlur}
                                      handleChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="order-notes">
                            <div className="checkout-form-list">
                              <label>Order Notes</label>
                              <textarea
                                id="checkout-mess"
                                cols={30}
                                rows={10}
                                placeholder="Notes about your order, e.g. special notes for delivery."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="your-order mb-30 ">
                        <h3>Su pedido</h3>
                        <div className="your-order-table table-responsive">
                          <table>
                            <thead>
                              <tr>
                                <th className="product-name">Productos</th>
                                <th className="product-total">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {carts &&
                                carts.map((cart) => (
                                  <tr className="cart_item" key={cart.id}>
                                    <td className="product-name">
                                      {cart.name}{" "}
                                      <strong className="product-quantity">
                                        {" "}
                                        × {cart.qty}
                                      </strong>
                                    </td>
                                    <td className="product-total">
                                      <span className="amount">
                                        ${Number(cart.totalPrice).toFixed(2)}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                            <tfoot>
                              <tr className="cart-subtotal">
                                <th>Compra Subtotal</th>
                                <td>
                                  <span className="amount">${price}</span>
                                </td>
                              </tr>
                              <tr className="shipping">
                                <th>Tipo de envío</th>
                                <td>
                                  <ul>
                                    <li>
                                      <input
                                        type="radio"
                                        checked={flat}
                                        onClick={() => setFlat(!flat)}
                                        id="flat"
                                      />{" "}
                                      <label htmlFor="flat">
                                        Flat Rate:{" "}
                                        <span className="amount">
                                          ${flatPrice.toFixed(2)}
                                        </span>
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        type="radio"
                                        id="shipping"
                                        checked={freeShpping}
                                        onClick={() =>
                                          setFreeShpping(!freeShpping)
                                        }
                                      />{" "}
                                      <label htmlFor="shipping">
                                        Free Shipping: $
                                        {shppingPrice.toFixed(2)}
                                      </label>
                                    </li>
                                    <li />
                                  </ul>
                                </td>
                              </tr>
                              <tr className="order-total">
                                <th>Orden Total</th>
                                <td>
                                  <strong>
                                    {price && (
                                      <span className="amount">
                                        $
                                        {flat && freeShpping
                                          ? (
                                              price -
                                              flatPrice -
                                              shppingPrice
                                            ).toFixed(2)
                                          : flat
                                          ? (price - flatPrice).toFixed(2)
                                          : freeShpping
                                          ? (price - shppingPrice).toFixed(2)
                                          : price}
                                      </span>
                                    )}
                                  </strong>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div className="payment-method">
                          <Accordion defaultActiveKey="0">
                            <Card>
                              <Card.Header>
                                <h5 className="mb-0">
                                  <Accordion.Toggle
                                    className="btn-link"
                                    as="button"
                                    eventKey="0"
                                  >
                                    Transferencia Bancaria
                                  </Accordion.Toggle>
                                </h5>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  Realice su pago directamente en nuestro banco
                                  cuenta. Utilice su ID de pedido como
                                  Referencia de pago. Tu pedido no será enviado
                                  hasta que los fondos se hayan liquidado en nuestra cuenta.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>

                            <Card>
                              <Card.Header>
                                <h5 className="mb-0">
                                  <Accordion.Toggle
                                    className="btn-link"
                                    as="button"
                                    eventKey="1"
                                  >
                                    Pago de Cheques
                                  </Accordion.Toggle>
                                </h5>
                              </Card.Header>
                              <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                  Envíe su cheque a Store Name, Store Street, Store Town, 
                                  Store State / County, Store Postcode.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>

                            <Card>
                              <Card.Header>
                                <h5 className="mb-0">
                                  <Accordion.Toggle
                                    className="btn-link"
                                    as="button"
                                    eventKey="2"
                                  >
                                    PayPal
                                  </Accordion.Toggle>
                                </h5>
                              </Card.Header>
                              <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                  Pagar a través de PayPal; Puedes pagar con tu tarjeta de 
                                  crédito si no tienes una cuenta PayPal.
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                          <div className="order-button-payment mt-20">
                            <button
                              type="submit"
                              className="btn theme-btn"
                              disabled={
                                carts && carts.length <= 0 ? true : isSubmitting
                              }
                            >
                              Realizar Pedido
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          )}
        </Formik>
      </main>
    </Layout>
  );
};

export default connect(null, { setCheckoutData })(Checkout);
