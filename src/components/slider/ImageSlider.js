import Slider from "react-slick";

const ImageSlider = ({ imageSlider }) => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: false,
    cssEase: "ease-in-out",
    arrows: false,
    speed: 2300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 778, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };
  return (
    <section className="instagram-area pos-relative">
      <div className="instagram-active">
        <Slider {...settings}>
          {imageSlider &&
            imageSlider.map((img, i) => (
              <div className="instagram-item" key={i}>
                <img src={img} alt="Image" style={{ width: "99%" }} />
              </div>
            ))}
        </Slider>
      </div>
      <div className="instagram-btn">
        <a href="https://www.instagram.com/siim_spa/" target="blank" className="btn inst-btn">
          <i className="fab fa-instagram" /> siim_spa
        </a>
      </div>
    </section>
  );
};

export default ImageSlider;
