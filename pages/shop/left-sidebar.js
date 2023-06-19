import Shop from "../../src/layouts/Shop";

const LeftSideBar = () => {
  return (
    <Shop
      col="col-lg-6 col-md-6"
      leftSideBar={true}
      banner="/img/bg/shop-banner.jpg"
    />
  );
};

export default LeftSideBar;
