import React from "react";

import styles from "./CarouselGallery.module.css"

import Carousel from "react-bootstrap/Carousel";

export default function CarouselGallery() {
  return (
   <div className={styles["supreme_wrapper"]}>
        <Carousel className={styles["main_wrapper"]}>
      <Carousel.Item className={styles["slide"]}>
        <img
          className="d-block w-100"
          src="https://i.picsum.photos/id/1018/1000/600.jpg?hmac=8y6PgnvgTLEEW-118lVn6V6zPUVSN9JSi27GSpmGpdQ"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
   </div>
  );
}
