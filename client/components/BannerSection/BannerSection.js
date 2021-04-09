import React from 'react'

import styles from "./BannerSection.module.css"

import Banner from "./Banner/Banner"

export default function BannerSection() {
    return (
        <div className={styles["main_wrapper"]}>
            <div className={styles["banner"]}>
                <Banner/>
            </div>
            <div className={styles["pictures"]}>

            </div>
        </div>
    )
}
