import React from 'react'

import styles from "./Card.module.css"

import {Image} from "semantic-ui-react"

export default function Card() {
    return (
        <div className={styles["main_wrapper"]}>
           <div className={styles["image"]}>

           </div>

           <div className={styles["information"]}>
               <h5>Name of Person</h5>
               <h5>Designation</h5>
           </div>
        </div>
    )
}
