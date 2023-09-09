import React from "react";
import { motion } from "framer-motion";

const CarouselItem = ({ image }) => {
  return (
    <motion.div className="carousel-item">
      <img src={image} alt="Carousel Item" />
    </motion.div>
  );
};

export default CarouselItem;
