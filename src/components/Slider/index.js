import React from "react";

import { Carousel } from "react-bootstrap";

const Slider = ({ clientsList }) => {
  return (
    <Carousel>
      {clientsList.map((client, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-20"
            src={client.image}
            alt={`${index}-slide`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
