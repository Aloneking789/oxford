import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [a3, a2, a1];

  return (
    <div className="relative h-[600px] w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-900/75 flex items-center justify-center text-center text-white p-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Shaping Tomorrow's Leaders
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Excellence Academy provides world-class education with a focus on character development,
                  academic excellence, and innovative learning methods.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/admission"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Apply Now
                    <FaArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="/virtual-tour"
                    className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900"
                  >
                    Virtual Tour
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;