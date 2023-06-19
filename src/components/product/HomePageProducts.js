import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { simpleProductFilter } from "../../utils/filterProduct";
import MultipleRowsSlider from "../slider/MultipleRowsSlider";
import Product from "./Product";

const HomePageProducts = ({ products }) => {
  return (
    <section className="product-area box-90 pt-70 pb-40 slick-slider">
      <div className="container">
        <TabContainer defaultActiveKey="all">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              <div className="area-title mb-50">
                <h2>Nuestros productos</h2>
                <p>SIIM distribuidora</p>
              </div>
            </div>
            {/* <div className="col-xl-12 col-lg-12">
              <div className="product-tab mb-40">
                <Nav
                  as="ul"
                  className="nav product-nav  justify-content-xl-start"
                  id="myTab1"
                  role="tablist"
                >
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="home-tab"
                      data-toggle="tab"
                      eventKey="all"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Detección de incendios
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      eventKey="Extincion de Encendio"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Extinción de incendios
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      eventKey="Electronica"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Electrónica
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="contact-tab1"
                      data-toggle="tab"
                      eventKey="ferreteria"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Ferreteria
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as="a"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                      id="contact-tab2"
                      data-toggle="tab"
                      eventKey="Detección de Incendio"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Detección de Incendio
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div> */}
          </div>
          
          <div className="row">
            <div className="col-xl-12">
              <div className="product-tab-content">
                <TabContent className="tab-content" id="myTabContent">
                  <TabPane eventKey="all">
                    <div className="product-slider owl-carousel">
                      <MultipleRowsSlider>
                        {products &&
                          products.map((product) => (
                            <Product key={product.id} product={product} />
                          ))}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="furniture">
                    <div className="product-slider owl-carousel ">
                      <MultipleRowsSlider>
                        {products &&
                          simpleProductFilter("electronica", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="gent">
                    <div className="product-slider owl-carousel ">
                      <MultipleRowsSlider>
                        {products &&
                          simpleProductFilter("ferreteria", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                  <TabPane eventKey="Accesorios">
                    <div className="product-slider owl-carousel ">
                      <MultipleRowsSlider>
                        {products &&
                          simpleProductFilter("Detección de Incendio", products).map(
                            (product) => (
                              <Product key={product.id} product={product} />
                            )
                          )}
                      </MultipleRowsSlider>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </TabContainer>
      </div>
    </section>
  );
};

export default HomePageProducts;
