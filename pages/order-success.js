import moment from "moment";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { getCarts } from "../src/redux/action/utilis";
import { totalPrice } from "../src/utils/utils";

const OrderSuccess = ({ getCarts }) => {
  useEffect(() => {
    getCarts();
  }, []);
  const carts = useSelector((state) => state.utilis.carts);
  const chcekoutData = useSelector((state) => state.utilis.chcekoutData);
  let date = new Date();
  date.setDate(date.getDate() + 7);

  let randomNumber = `${Math.floor(Math.random() * 100000)}VUE${Math.floor(
    Math.random() * 100000
  )}`;

  return (
    <Layout container footerBg textCenter sticky>
      <main>
        <PageTitle
          pageHeading="Gracias"
          thankupage
          active="orden exitosa"
          id={randomNumber}
        />
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <h4>Order Details : </h4> */}
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Imagen</th>
                          <th className="cart-product-name">Producto</th>
                          <th className="product-price">Unitario Precio</th>
                          <th className="product-quantity">Cantidad</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.map((cart) => (
                            <tr key={cart.id}>
                              <td className="product-thumbnail">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                  <img src={cart.img1} alt="cart" />
                                </a>
                              </td>
                              <td className="product-name">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                  {cart.name}
                                </a>
                              </td>
                              <td className="product-price">
                                <span className="amount">
                                  ${Number(cart.mainPrice).toFixed(2)}
                                </span>
                              </td>

                              <td className="product-price">
                                <span className="amount">
                                  {Number(cart.qty)}
                                </span>
                              </td>

                              <td className="product-subtotal">
                                <span className="amount">
                                  ${Number(cart.totalPrice).toFixed(2)}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-page-total">
                    <h2>Total Compra</h2>
                    <ul className="mb-20">
                      <li>
                        Subtotal <span>${totalPrice(carts)}</span>
                      </li>
                      <li>
                        Total <span>${totalPrice(carts)}</span>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 order-success">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Sumario :</h4>
                    <p>
                      <b>Orden ID:</b> {randomNumber}
                    </p>
                    <p>
                      <b>Orden fecha:</b> {moment().format("MMMM DD, YYYY")}
                    </p>
                    <p>
                      <b>Orden Total:</b> ${totalPrice(carts)}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Dirección de envío</h4>
                    <p className="text-capitalize">
                      {chcekoutData
                        ? `${chcekoutData.fName} ${chcekoutData.lName}`
                        : "Sabuj Hasan Sarker"}
                    </p>
                    <p>
                      {chcekoutData
                        ? `${chcekoutData.address} ${chcekoutData.country}`
                        : "Jatrabari,Dhaka-1204 Bangladesh"}
                    </p>
                    <p>
                      Contact No.{" "}
                      {chcekoutData ? chcekoutData.phone : "987456321"}
                    </p>
                  </div>
                  <div className="col-12 mt-4">
                    <h4>Metodo de pago</h4>
                    <p>
                      Pay on Delivery (Cash/Card). Cash on delivery (COD)
                      available. Card/Net banking acceptance subject to device
                      availability.
                    </p>
                    <div className="bg-orange p-3 mt-4 text-center">
                      <h4>Fecha prevista de entrega</h4>
                      {/* <h2>{moment().add(7, "days")}</h2> */}
                      <h2>{moment(date).format("MMMM DD, YYYY")}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default connect(null, { getCarts })(OrderSuccess);
