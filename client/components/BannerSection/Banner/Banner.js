import React from 'react'

import Carousel from "react-bootstrap/Carousel"

import styles from "./Banner.module.css"


const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

export default function Banner() {
    return (
        <Carousel className={styles["slide"]}>
            {images.map((image)=>{
                return( <Carousel.Item className={styles["slide"]}>
                    <img
                      className="d-block w-100"
                      src={image.original}
                      alt="First slide"
                     
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>)
            })}
      </Carousel>
    )
}
