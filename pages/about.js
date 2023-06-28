import { useState } from "react";
/* import Slider from "react-slick"; */
import VideoPopUp from "../src/components/VideoPopUp";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";

const About = () => {
  const [popup, setPopup] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout textCenter container transparent  whiteMenu>
      <main>
        <PageTitle pageHeading="SIIM" active="Nosotros" />
        {popup && <VideoPopUp closePopup={() => setPopup(false)} />}
        <section className="about-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="section-title mb-25">
                  <p>
                    <span />¿Quienes somos?
                  </p>
                  <h1>Empresa</h1>
                </div>
                <div className="about-community mb-30">
                  <p>
                   La empresa SIIM. SpA (Servicios integrales de Ingeniería y Montajes), la cual presta un servicio en las áreas de seguridad electrónica, 
                   electricidad y sistemas de protección contra incendios.
                  </p>
                  <p>
                   Además de ejecutar los trabajos antes mencionados, la empresa se encarga de realizar proyectos de ingeniería basándose en las normas 
                   nacionales e internaciones por las cuales se rijan las entidades del seguro y las municipalidades del país.
                  </p>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="about-community-text mb-30">
                  <p>
                   Además de ejecutar los trabajos antes mencionados, la empresa se encarga de realizar proyectos de ingeniería basándose en las normas 
                   nacionales e internaciones por las cuales se rijan las entidades del seguro y las municipalidades del país.
                  </p>
                  <p>
                  Por ello, nuestra empresa de protección contra incendios tiene claros sus objetivos, entre los que se encuentra realizar 
                  el trabajo de forma correcta sin mirar el tiempo necesario para llevarlo a cabo. La principal finalidad es 
                  que los equipos que instalemos, y/o revisemos, estén en perfecto estado de funcionamiento cuando se necesiten.
                  </p>
                  <p>
                  Protegemos vidas y propiedades al mismo tiempo que brindamos un valor 
                  excepcional a nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
           {/*  <div className="row">
              <div className="col-12">
                <div className="overview text-center mt-90">
                  <p>
                    Vue helps artists, musicians, filmmakers, designers, and
                    other creators find the resources ideas a reality. To date,
                    tens of thousands of creative projects big and small have
                    come to life with the support of the vue special community.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
       {/*  <section className="video-area">
          <div className="bakix-video">
            <img src="img/bg/video.jpg" alt="Image" />
            <a className="popup-video" onClick={() => setPopup(true)} href="#">
              <i className="fas fa-play" />
            </a>
          </div>
        </section> */}
        <section className="mission-area pt-100 pb-70 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 d-lg-none d-xl-block">
                <div className="mission-img mb-30">
                  <img src="img/bg/extintor.png" alt="Image" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="mission-text mb-30">
                  <div className="mission-title mb-30">
                    <p>
                      <span /> SIIM
                    </p>
                    <h1>                    
                        Nuestros servicios
                    </h1>
                  </div>
                  <p>
                    Nos enfocamos en satisfacer las necesidades en las áreas de seguridad electrónica, 
                    sistema de protección contra incendios y electricidad para el sector industrial, 
                    retail, edificios comerciales y habitacionales.
                  </p>
                  <p>
                    Somos parte de su equipo de operaciones de construcción y trabajamos para garantizar 
                    que sus sistemas estén listos para operar en cualquier momento.
                  </p>
                  <p>
                  SIIM Ingeniería, tiene experiencia en la instalación de sistemas en muchas aplicaciones 
                  diferentes como comercial, industrial y residencial. Desde grandes instalaciones 
                  comerciales de sistemas de supresión hasta la instalación de un sistema de rociadores 
                  contra incendios en el hogar.
                  </p>
                  <p>
                  Confíe en nosotros para diseñar e instalar sus sistemas de extinción de incendio, 
                  seguridad electrónica y/o control de acceso, para ayudarle a proteger su propiedad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="team-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="area-title text-center mb-50">
                  <h2>Equipo SIIM</h2>
                  {/* <p>Our one of the best team members</p> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/riordan.png" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>Riordan Martínez</h4>
                    <span>CFO - Chief Financial Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/miguel.png" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>Miguel A. Muñoz</h4>
                    <span>Administrative Analyst</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/felix.png" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>Félix Torres</h4>
                    <span>COO - Chief Operating Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/jose.png" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>Jose Miguel Tovar</h4>
                    <span>CSO - Chief Sales Officer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
