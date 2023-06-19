import Link from "next/link";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getWishlist } from "../redux/action/utilis";

const WishListIcon = ({ getWishlist }) => {
  useEffect(() => {
    getWishlist();
  }, []);
  const wishlist = useSelector((state) => state.utilis.wishlist);
  return (
    <div className="wishlist-container">
      <div className="bg"></div>
      <Link href="/wishlist">
        <a className="icon">
          <i
            className={`fas fa-heart  ${
              wishlist.length === 0 ? "mt-1 mr-1" : "mt-2 mr-2"
            }`}
          ></i>
          <span className="count">
            {wishlist && wishlist.length <= 9 && wishlist.length !== 0
              ? `0${wishlist.length}`
              : wishlist.length}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default connect(null, { getWishlist })(WishListIcon);
