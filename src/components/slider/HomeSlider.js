import { useEffect } from "react";
import Slider from "react-slick";
import { dataImage } from "../../utils/utils";
const HomeSlider = ({ sliders, children, noArrow }) => {
  useEffect(() => {
    dataImage();
  }, [sliders]);
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" className={className} onClick={onClick}>
        {" "}
        <i className="fas fa-arrow-right" />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick, className } = props;
    return (
      <button type="button" className={className} onClick={onClick}>
        {" "}
        <i className="fas fa-arrow-left"></i>{" "}
      </button>
    );
  }
  var settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    fade: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: noArrow ? false : true,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default HomeSlider;
