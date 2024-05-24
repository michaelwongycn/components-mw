import React from "react";
import Carousel from "../../../components/Display/Carousel/carousel";

const CarouselDemo = () => {
  // Sample items for demonstration
  const items = [
    <img
      src="https://via.placeholder.com/800x400?text=Slide+1"
      alt="Slide 1"
    />,
    <img
      src="https://via.placeholder.com/800x400?text=Slide+2"
      alt="Slide 2"
    />,
    <img
      src="https://via.placeholder.com/800x400?text=Slide+3"
      alt="Slide 3"
    />,
  ];

  return (
    <div>
      <h1>Carousel Demo</h1>
      <Carousel items={items} />
    </div>
  );
};

export default CarouselDemo;
