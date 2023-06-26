import { useEffect, useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect } from "react-redux";
import Paggination from "../components/Paggination";
import Filter from "../components/product/filter/Filter";
import Product from "../components/product/Product";
import ProductListView from "../components/product/ProductListView";
import { getProducts } from "../redux/action/product";
import { getProductByFilter } from "../utils/filterProduct";
import { activeData, dblock } from "../utils/utils";
import Layout from "./Layout";
import PageTitle from "./PageTitle";

const Shop = ({
  products,
  getProducts,
  col,
  banner,
  defultActive,
  leftSideBar,
}) => {
  const [active, setActive] = useState(0);
  let sort = 6;
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout footerBg container textCenter /* transparent
    whiteMenu */
    extraTransparentClass={"transparent-header-2"}>  {/* sticky  */}
      <main>
        <PageTitle active="Tienda SIIM" pageHeading="Nuestra Tienda" />
        <section className="shop-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              {leftSideBar && <Filter setActive_={() => setActive(0)} />}
              <div className="col-xl-8 col-lg-8">
                <div className="shop-banner mb-50">
                  <img src={banner} alt="Banner" />
                </div>

                <TabContainer
                  defaultActiveKey={defultActive ? defultActive : "grid"}
                >
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                      <div className="product-showing mb-40">
                        {/* Active sort product */}
                        <p>{activeData(active, sort, products)}</p>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                      <div className="shop-tab f-right">
                        <Nav
                          as="ul"
                          className="nav text-center"
                          id="myTab"
                          role="tablist"
                        >
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="list"
                            >
                              <i className="fas fa-list-ul" />{" "}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link
                              as="a"
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              eventKey="grid"
                            >
                              <i className="fas fa-th-large" />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>
                  </div>
                  {/* tab content */}
                  <TabContent>
                    <TabPane eventKey="grid">
                      <div className="row">
                        {products && products.length > 0 ? (
                          products.map((product, i) => (
                            <div
                              className={`${col} ${dblock(active, i, sort)}`}
                              key={product.id}
                            >
                              <Product
                                wrapperPadding0={true}
                                product={product}
                              />
                            </div>
                          ))
                        ) : (
                          <h2 className="text-center d-block w-100 mt-5">
                            No se encontró ningún producto
                          </h2>
                        )}
                      </div>
                    </TabPane>
                    <TabPane eventKey="list">
                      {products &&
                        products.map((product, i) => (
                          <div key={i} className={`${dblock(active, i, sort)}`}>
                            <ProductListView product={product} col5={true} />
                          </div>
                        ))}
                    </TabPane>
                  </TabContent>
                </TabContainer>

                <Paggination
                  active={active}
                  setActive={setActive}
                  sort={sort}
                  length={products && products.length}
                />
              </div>

              {!leftSideBar && <Filter setActive_={() => setActive(0)} />}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  products: getProductByFilter(state.product.products, state.filter),
});

export default connect(mapStateToProps, { getProducts })(Shop);
