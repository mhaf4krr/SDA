import React from 'react'

import styles from "./Main.module.css"

import AboutSection from "./AboutSection/AboutSection"

import NotificationSection from "./NotificationsSection"

export default function Main() {
    return (
        <div className={styles["main_wrapper"]}>
            <AboutSection/>
            <NotificationSection/>
        </div>
    )
}
