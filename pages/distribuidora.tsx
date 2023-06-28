import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Banner from "../src/components/Banner";
/* import Blogs from "../src/components/blog/Blogs";
import Features from "../src/components/Features"; */
import HomePageProducts from "../src/components/product/HomePageProducts";
import HomeSlider from "../src/components/slider/HomeSlider";
import ImageSlider from "../src/components/slider/ImageSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getFeatures } from "../src/redux/action/features";
import { getHome4 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { filterBlog } from "../src/utils/filterBlog";

import { getUpcomingProduct } from "../src/redux/action/upcomingProduct";
import Newsletter from "../src/components/Newsletter";

const Distribuidora = ({
  getHome4,
  getFeatures,
  getBlog,
  imageSlider,
  banner,
  getProducts,
  products,
  sliders,
  getUpcomingProduct,
}) => {
  useEffect(() => {
    getHome4();
    getFeatures();
    getBlog();
    getProducts();
  }, []);
  return (
    <>
      <section className="slider-area pos-relative"></section>

      {/* <Banner banner={banner} /> */}
      <HomePageProducts products={products} />

      {/* <Newsletter className="mb-25" /> */}

      {/* <Features features={features} /> */}
      {/* <Blogs blogs={blogs} /> */}
      {/* <ImageSlider imageSlider={imageSlider} className="pt-120 mt-75" /> */}
    </>
  );
};

const mapSateToProps = (state) => ({
  banner: state.home.home4 && state.home.home4.banner,
  features: state.features,
  sliders: state.home.home4 && state.home.home4.sliders,
  imageSlider: state.home.home4 && state.home.home4.imageSlider,
  /*  blogs: filterBlog("man", state.blog.blogs), */
  products: state.product.products,
});

export default connect(mapSateToProps, {
  getHome4,
  getFeatures,
  getBlog,
  getProducts,
  getUpcomingProduct,
})(Distribuidora);
