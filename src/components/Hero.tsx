import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  const images = [a3, a2, a1];

  return (
    <div className="relative h-[600px] w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-blue-900/70 flex items-center justify-center text-center text-white p-6"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Shaping Tomorrow's Leaders
                </h1>
                <p className="text-lg md:text-xl mt-4 mb-6">
                  Excellence Academy provides world-class education with a focus
                  on character development, academic excellence, and innovative
                  learning methods.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="/admission"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                  >
                    Apply Now
                    <FaArrowRight className="ml-2 h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="/virtual-tour"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-900 transition duration-300"
                  >
                    Virtual Tour
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
