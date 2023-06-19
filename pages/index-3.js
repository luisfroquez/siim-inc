import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Blogs from "../src/components/blog/Blogs";
import Newsletter from "../src/components/Newsletter";
import Product from "../src/components/product/Product";
import UpcomingProduct from "../src/components/product/UpcomingProduct";
import HomeSlider from "../src/components/slider/HomeSlider";
import MultipleRowsSlider from "../src/components/slider/MultipleRowsSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getHome3 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { getUpcomingProduct } from "../src/redux/action/upcomingProduct";
import { filterBlog } from "../src/utils/filterBlog";
import { simpleProductFilter } from "../src/utils/filterProduct";

const Index3 = ({
  blogs,
  getBlog,
  getUpcomingProduct,
  upcomingProduct,
  getHome3,
  sliders,
  getProducts,
  products,
}) => {
  useEffect(() => {
    getBlog();
    getUpcomingProduct();
    getHome3();
    getProducts();
  }, []);
  return (
    <Layout container footerBg header2 textCenter>
      <main>
        <section className="slider-area pos-relative pt-100 pb-100">
          <div className="slider-active slider-3">
            <HomeSlider sliders={sliders}>
              {sliders &&
                sliders.map((slide, i) => (
                  <div
                    className="single-slider d-flex align-items-center"
                    key={i}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-4">
                          <div
                            className="slide-img"
                            data-animation="fadeInLeft"
                            data-delay=".2s"
                          >
                            <img src={slide.bannerImg} alt="Banner Img" />
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-8">
                          <div className="shape-title shape-title-3 bounce-animate">
                            <h2>{slide.title}</h2>
                          </div>
                          <div className="shape-icon shape-icon-3 bounce-animate">
                            <img src={slide.thumb} alt="thumb" />
                          </div>
                          <div className="slide-content slide-content-3 pt-80 pl-30">
                            <span data-animation="fadeInRight" data-delay=".4s">
                              {slide.subTitle}
                            </span>
                            <h1 data-animation="fadeInUp" data-delay=".6s">
                              {slide.name} {new Date().getFullYear()}
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
                  </div>
                ))}
            </HomeSlider>
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
                  simpleProductFilter("gent", products).map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
              </MultipleRowsSlider>
            </div>
          </div>
        </section>

        <UpcomingProduct upcomingProduct={upcomingProduct} />
        {blogs && <Blogs blogs={blogs} />}
        <Newsletter />
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  blogs: filterBlog("fashion", state.blog.blogs),
  upcomingProduct: state.upcomingProduct.home3,
  sliders: state.home.home3 && state.home.home3.sliders,
  products: state.product.products,
});

export default connect(mapStateToProps, {
  getBlog,
  getUpcomingProduct,
  getHome3,
  getProducts,
})(Index3);
