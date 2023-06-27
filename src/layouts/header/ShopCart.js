import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { getCarts, removeCart } from "../../redux/action/utilis";
import { totalPrice } from "../../utils/utils";
const ShopCart = ({ removeCart, getCarts }) => {
  useEffect(() => {
    getCarts();
  }, []);
  const carts = useSelector((state) => state.utilis.carts);

  return (
    <li className="d-shop-cart">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <i className="flaticon-shopping-cart" />{" "}
        <span className="cart-count">{carts && carts.length}</span>
      </a>
      <ul className="minicart">
        {carts && carts.length > 0 ? (
          carts.map((cart) => (
            <li key={cart.id}>
              <div className="cart-img">
                <Link legacyBehavior href={`/shop/${cart.id}`}>
                  <a>
                    <img src={cart.img1} alt="Cart" />
                  </a>
                </Link>
              </div>
              <div className="cart-content">
                <h3>
                  <Link legacyBehavior href={`/shop/${cart.id}`}>{cart.name}</Link>
                </h3>
                <div className="cart-price">
                  <span className="new">
                    ${cart.mainPrice} * {cart.qty}
                  </span>
                  {" ="}
                  <span className="new ml-1 ">${cart.totalPrice}</span>
                </div>
              </div>
              <div className="del-icon">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    removeCart(cart.id);
                    toast.error("Remove item from carts");
                  }}
                >
                  <i className="far fa-trash-alt" />
                </a>
              </div>
            </li>
          ))
        ) : (
          <h3>Carrito vacio</h3>
        )}
        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            {carts && <span className="f-right">${totalPrice(carts)}</span>}
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <Link legacyBehavior href="/cart">Productos compra</Link>
            <Link legacyBehavior href="/checkout">
              <a className="red-color">Ir a Checkout</a>
            </Link>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default connect(null, { removeCart, getCarts })(ShopCart);
