import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "./CarouselItem";
import "../Components/MovableSlider.css";

const images = [
  "https://sabaze.com/wp-content/uploads/2023/08/Tyler-ICU-%E2%80%93-Konka-Live-Mix-04-August-326x245.png",
  "https://sabaze.com/wp-content/uploads/2023/08/Dj-Shima-Last-Button-De-La-Soul-ZuzuKey-Wonderboy-%E2%80%93-Isimo-326x245.jpg",
  "https://sabaze.com/wp-content/uploads/2023/08/Temple-Boys-CPT-Oubaas-Mp3-Download.jpg",
  "https://sabaze.com/wp-content/uploads/2022/10/Vigro-Deep-Road-To-Piano-Mp3-Download-326x245.png",
];

const MovableSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Previous</button>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="carousel-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CarouselItem image={images[currentIndex]} />
        </motion.div>
      </AnimatePresence>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default MovableSlider;
