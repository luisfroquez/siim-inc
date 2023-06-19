import Slider from "react-slick";
const SingleProductSlider = ({ children }) => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className="owl-prev arrow-icon right" onClick={onClick}>
        <i className="fas fa-arrow-right" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick, className } = props;
    return (
      <div className="owl-prev arrow-icon left" onClick={onClick}>
        <i className="fas fa-arrow-left" />
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SingleProductSlider;
