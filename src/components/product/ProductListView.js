import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { addToCart, addWishlist } from "../../redux/action/utilis";
import ProductModal from "./ProductModal";
const ProductListView = ({ product, col5, addToCart, addWishlist }) => {
  const wishlist = useSelector((state) => state.utilis.wishlist);
  const [quickView, setQuickView] = useState(false);
  const [addCart, setaddCart] = useState(false);
  const [addWishlist_, setAddWishlist_] = useState(false);

  const onClickCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setaddCart(true);
    toast.success("Add item in Cart.");
  };
  const onClickWishlist = (e) => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);
    const wishlist_ = wishlist.find((wishlist) => wishlist.id === product.id);
    if (wishlist_) {
      toast.error("Remove item in wishlist.");
    } else {
      toast.success("Add item in wishlist.");
    }
  };

  return (
    <div className="row">
      <ProductModal
        show={quickView}
        handleClose={() => setQuickView(false)}
        product={product}
      />
      <div className={`col-xl-${col5 ? 5 : 4} col-lg-${col5 ? 5 : 4}`}>
        <div className="product-wrapper mb-30">
          <div className="product-img">
            <Link href={`/shop/${product.id}`}>
              <a>
                <img src={product.img1} alt="img 1" />
                <img
                  className="secondary-img"
                  src={product.img2}
                  alt="imge 2"
                />
              </a>
            </Link>
            <div className="sale-tag">
              {product.new && <span className="new">new</span>}
              {product.sale && <span className="sale">sale</span>}
            </div>
          </div>
        </div>
      </div>
      <div className={`col-xl-${col5 ? 7 : 8} col-lg-${col5 ? 7 : 8}`}>
        <div className="product-content pro-list-content pr-0 mb-50">
          <div className="pro-cat mb-10">
            <Link href={`/shop/${product.id}`}>decor, </Link>
            <Link href={`/shop/${product.id}`}>{product.brand}</Link>
          </div>
          <h4>
            <Link href={`/shop/${product.id}`}>{product.name}</Link>
          </h4>
          <div className="product-meta mb-10">
            <div className="pro-price">
              <span>{`$${Number(product.mainPrice).toFixed(2)} USD`}</span>
              {product.price && (
                <span className="old-price">
                  {`$${Number(product.price).toFixed(2)} USD`}
                </span>
              )}
            </div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <div className="product-action">
            <a href="#" title="Shoppingb Cart" onClick={(e) => onClickCart(e)}>
              <i className="flaticon-shopping-cart" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setQuickView(true);
              }}
            >
              <i className="flaticon-eye" />
            </a>
            <a
              href="#"
              className={` ${
                wishlist && wishlist.find((pro) => pro.id === product.id)
                  ? "active"
                  : ""
              } `}
              onClick={(e) => onClickWishlist(e)}
            >
              <i className="flaticon-like" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addToCart, addWishlist })(ProductListView);
