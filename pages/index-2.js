import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Banner from "../src/components/Banner";
import Blogs from "../src/components/blog/Blogs";
import Features from "../src/components/Features";
import Newsletter from "../src/components/Newsletter";
import HomePageProducts from "../src/components/product/HomePageProducts";
import HomeSlider from "../src/components/slider/HomeSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getFeatures } from "../src/redux/action/features";
import { getHome2 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { filterBlog } from "../src/utils/filterBlog";
import { getDiscount } from "../src/utils/utils";

const Index2 = ({
  getBlog,
  blogs,
  getFeatures,
  features,
  getHome2,
  sliders,
  banner,
  getProducts,
  products,
}) => {
  useEffect(() => {
    getBlog();
    getFeatures();
    getHome2();
    getProducts();
    getHome2();
  }, []);
  return (
    <Layout transparent>
      <main>
        <section className="slider-area pos-relative">
          <div className="slider-active">
            <HomeSlider sliders={sliders}>
              {sliders &&
                sliders.map((slide, i) => (
                  <div
                    key={i}
                    className="single-slider slider-2 slide-1-style slide-height-2 d-flex align-items-center"
                    data-background={slide.bannerImg}
                  >
                    <div
                      className="shape-title bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2 className={`${i === 0 ? "" : "home-2-shape"}`}>
                        {new Date().getFullYear()}
                      </h2>
                    </div>
                    <div className="shape-icon bounce-animate">
                      <img src={slide.shapImg} alt="shapImg" />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content pt-80">
                            <span data-animation="fadeInRight" data-delay=".2s">
                              {slide.subTitle}
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".5s">
                              {slide.title}
                            </h1>
                            <div
                              className="slider-price mb-25"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <span>
                                ${getDiscount(slide.price, slide.discount)}
                              </span>
                              <span className="old-price">
                                ${Number(slide.price).toFixed(2)}
                              </span>
                            </div>
                            <div className="slide-btn">
                              {slide.shopLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn theme-btn"
                                    data-animation="fadeInLeft"
                                    data-delay=".9s"
                                  >
                                    shop now
                                  </a>
                                </Link>
                              )}
                              {slide.categoryLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn white-btn"
                                    data-animation="fadeInRight"
                                    data-delay="1.1s"
                                  >
                                    category
                                  </a>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </HomeSlider>
          </div>
        </section>
        <Banner banner={banner} />
        <HomePageProducts products={products} />
        <Features features={features} />
        <Blogs blogs={blogs} />
        <Newsletter />
      </main>
    </Layout>
  );
};

const mapSateToProps = (state) => ({
  sliders: state.home.home2 && state.home.home2.sliders,
  banner: state.home.home2 && state.home.home2.banner,
  blogs: filterBlog("fashion", state.blog.blogs),
  features: state.features,
  products: state.product.products,
});

export default connect(mapSateToProps, {
  getBlog,
  getFeatures,
  getHome2,
  getProducts,
})(Index2);
