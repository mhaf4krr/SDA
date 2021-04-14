import React from 'react'

import Carousel from "react-bootstrap/Carousel"

import styles from "./Banner.module.css"

import {main_backend_path} from "../../../constants/constants"

export default function Banner(props) {
    return (
        <Carousel className={styles["slide"]}>
          {console.log(props.banners)}
            {props.banners.map((image)=>{
                return( <Carousel.Item className={styles["slide"]}>
                    <img
                      className="d-block w-100"
                      src={main_backend_path+image["file"]["url"]}
                      alt="slide"
                     
                    />
                    <Carousel.Caption>
                      
                      <p>{image["title"]}</p>
                    </Carousel.Caption>
                  </Carousel.Item>)
            })}
      </Carousel>
    )
}
