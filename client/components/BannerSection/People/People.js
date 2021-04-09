import React from 'react'

import styles from "./People.module.css"

import Card from "./Card/Card"

export default function People() {
    return (
        <div className={styles["main_wrapper"]}>
            <Card/>
            <Card/>
        </div>
    )
}
