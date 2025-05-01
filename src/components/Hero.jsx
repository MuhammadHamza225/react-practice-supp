import React from "react";
import Slider from "react-slick";
import sliderData from "../utils/slider";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const NextArrow = ({ onClick }) => (
//   <div className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
//     <ChevronRight size={36} onClick={onClick} />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
//     <ChevronLeft size={36} onClick={onClick} />
//   </div>
// );


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {sliderData.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img.url}
              alt={img.heading}
              className="w-full object-cover h-[80vh] sm:h-[700px] brightness-90"
            />
            <div className="absolute top-1/2 left-10 sm:left-20 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-lg">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 leading-snug">
                {img.heading}
              </h2>
              <h4 className="text-lg sm:text-xl text-pink-500 font-semibold mb-6">
                {img.discount}
              </h4>
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition duration-300">
                {img.cta}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
