import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../src/layouts/Layout";
/* import { getBlog } from "../src/redux/action/blog"; */
/* import { getHome1 } from "../src/redux/action/home"; */
import { getProducts } from "../src/redux/action/product";
import { getTopSeller } from "../src/redux/action/seller";
import { getUpcomingProduct } from "../src/redux/action/upcomingProduct";
/* import { filterBlog } from "../src/utils/filterBlog"; */
/* import { getDiscount } from "../src/utils/utils"; */

const Index = ({
/*   getHome1, */
  /* getBlog, */
  getTopSeller,
  topSeller,
  getUpcomingProduct,
  getProducts,
}) => {
  useEffect(() => {
/*     getHome1(); */
    /* getBlog(); */
    getTopSeller();
    getUpcomingProduct();
    getProducts();
  }, []);
  return (
    <>
      <main>
        {topSeller && (
          <section className="top-seller-area">   {/*  box-90 */}
            <div className="container-fluid">              
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 backingRoof  d-flex align-items-center">
                  <div className="top-seller" >                   
                    <div className="seller-box text-center">
                      <div className="top-seller-content text-left" style={{borderRadius:5}}>
                        <div className="logoLanding">
                           <img src={topSeller[0].topProduct.img} alt="Product" width={145} className="mb-10" />
                        </div>
                        <h2>
                          <Link href="/about">
                            <a>{topSeller[0].topProduct.name}</a>
                          </Link>
                        </h2>
                        
                        <div className="top-seller-btn mb-40 mt-20">
                          <Link href="/about">
                            <a className="btn theme-btn">Visitar nuestra página</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 backingImge d-flex align-items-center">
                  <div className="top-seller">
                    <div className="seller-box text-center">
                      <div className="top-seller-content text-left" style={{borderRadius:5}}>
                        <div className="logoLanding">
                           <img src={topSeller[0].banner} alt="topseller" width={145} className="mb-10" />
                        </div>
                        {/* <img src={topSeller[0].topProduct.img} alt="Product" /> */}
                        <h2>
                          <Link href="/homesiim">
                            <a>{topSeller[0].name}</a>
                          </Link>
                        </h2>
                        
                        <div className="top-seller-btn mb-40 mt-20">
                          <Link href="/homeSiim">
                            <a className="btn theme-btn">Visitar nuestra distribuidora</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

const mapSateToProps = (state) => ({
/*   home1: state.home.home1, */
  // announcement: state.home.home1.announcement,
 /*  upcomingProduct: state.upcomingProduct.home1, */
 /*  blogs: filterBlog("lifestyle", state.blog.blogs), */
  topSeller: state.seller.topSeller,
  products: state.product.products,
});

export default connect(mapSateToProps, {
  /* getHome1, */
  /* getBlog, */
  getTopSeller,
  getUpcomingProduct,
  getProducts,
})(Index);
