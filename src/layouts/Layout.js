import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getCompare, getWishlist } from "../redux/action/utilis";
import CompareIcon from "./CompareIcon";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";
import WishListIcon from "./WishListIcon";

const Layout = ({
  children,
  sticky,
  container,
  footerBg,
  transparent,
  extraTransparentClass,
  header2,
  textCenter,
  whiteMenu,
  getWishlist,
  getCompare,
}) => {
  useEffect(() => {
    getWishlist();
    getCompare();
  }, []);
  return (
    <Fragment>
      {header2 ? (
        <Header2 whiteMenu={whiteMenu} />
      ) : (
        <Header
          sticky={sticky}
          container={container}
          transparent={transparent}
          extraTransparentClass={extraTransparentClass}
          whiteMenu={whiteMenu}
        />
      )}
      <WishListIcon />
      <CompareIcon />

      {children}
      <Footer
        container={container}
        footerBg={footerBg}
        textCenter={textCenter}
      />
      {/* <ScrollTop /> */}
    </Fragment>
  );
};

export default connect(null, { getWishlist, getCompare })(Layout);
