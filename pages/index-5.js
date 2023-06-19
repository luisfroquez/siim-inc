import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Blogs from "../src/components/blog/Blogs";
import Features2 from "../src/components/Features2";
import Newsletter from "../src/components/Newsletter";
import Product from "../src/components/product/Product";
import HomeSlider from "../src/components/slider/HomeSlider";
import MultipleRowsSlider from "../src/components/slider/MultipleRowsSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getFeatures } from "../src/redux/action/features";
import { getHome5 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { filterBlog } from "../src/utils/filterBlog";
import { simpleProductFilter } from "../src/utils/filterProduct";

const Index5 = ({
  getBlog,
  blogs,
  getFeatures,
  features,
  getHome5,
  sliders,
  getProducts,
  products,
}) => {
  useEffect(() => {
    getBlog();
    getFeatures();
    getHome5();
    getProducts();
  }, []);
  return (
    <Layout container footerBg header2 textCenter>
      <main>
        <section className="slider-area pos-relative">
          <div className="container">
            <div className="slider-active-5 slider-3 ">
              <HomeSlider sliders={sliders} noArrow={true}>
                {sliders &&
                  sliders.map((slide, i) => (
                    <div
                      key={i}
                      className="single-slider slide-height-5 pos-relative d-flex align-items-center"
                      data-background={slide.bg}
                    >
                      <div className="shape-title shape-title-5 bounce-animate">
                        <h2>UX</h2>
                      </div>
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="slide-content slide-content-5  pl-60">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              {slide.subTitle}
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              {slide.title}
                            </h1>
                            <div className="slide-btn">
                              <Link href="/shop">
                                <a
                                  className="btn theme-btn"
                                  data-animation="fadeInLeft"
                                  data-delay=".8s"
                                >
                                  shop now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </HomeSlider>
            </div>
          </div>
        </section>

        <section className="banner-area pt-100 pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="banner mb-30">
                  <Link href="/shop">
                    <img src="/img/banner/banner-5/banner1.jpg" alt="Banner" />
                  </Link>
                </div>
                <div className="banner mb-30">
                  <Link href="/shop">
                    <img src="/img/banner/banner-5/banner5.jpg" alt="Banner" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner mb-30">
                      <Link href="/shop">
                        <img
                          src="/img/banner/banner-5/banner2.jpg"
                          alt="Banner"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="banner mb-30">
                      <Link href="/shop">
                        <img
                          src="/img/banner/banner-5/banner3.jpg"
                          alt="Banner"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="banner mb-30">
                      <Link href="/shop">
                        <img
                          src="/img/banner/banner-5/banner4.jpg"
                          alt="Banner"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-area pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="area-title text-center mb-50">
                  <h2>Brand New Products</h2>
                  <p>Browse the huge variety of our products</p>
                </div>
              </div>
            </div>
            <div className="product-slider-2 owl-carousel">
              <MultipleRowsSlider slideShow={3}>
                {products &&
                  simpleProductFilter("ladies", products).map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
              </MultipleRowsSlider>
            </div>
          </div>
        </section>

        <Features2 features={features} />
        <Blogs blogs={blogs} container />
        <Newsletter container />
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  blogs: filterBlog("fashion", state.blog.blogs),
  features: state.features,
  sliders: state.home.home5 && state.home.home5.sliders,
  products: state.product.products,
});
export default connect(mapStateToProps, {
  getBlog,
  getFeatures,
  getHome5,
  getProducts,
})(Index5);
