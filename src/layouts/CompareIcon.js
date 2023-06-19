import Link from "next/link";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getCompare } from "../redux/action/utilis";

const CompareIcon = ({ getCompare }) => {
  useEffect(() => {
    getCompare();
  }, []);
  const compares = useSelector((state) => state.utilis.compares);
  return (
    <div className="wishlist-container compare">
      <div className="bg"></div>
      <Link href="/compare">
        <a className="icon">
          <i
            className={`flaticon-compare ${
              compares.length === 0 ? "mt-1 mr-1" : "mt-2 mr-2"
            }`}
          ></i>
          <span className="count">
            {compares && compares.length <= 9 && compares.length !== 0
              ? `0${compares.length}`
              : compares.length}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default connect(null, { getCompare })(CompareIcon);
