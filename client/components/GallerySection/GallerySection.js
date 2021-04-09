import React from 'react'

import styles from "./GallerySection.module.css"

import {Header} from "semantic-ui-react"

import GalleryCarousel from "./Carousel/CarouselGallery"

export default function GallerySection() {
    return (
        <div className={styles["main_wrapper"]}>
            <Header style={{color:"#03045e"}} textAlign="center" as="h2">Image Gallery</Header>

            <GalleryCarousel/>
        </div>
    )
}
