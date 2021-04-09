import React from 'react'
import { Header,Container,Image } from 'semantic-ui-react'

import styles from "./LandUseSection.module.css"

export default function LandUseSection() {
    return (
        <div className={styles["main_wrapper"]}>
            <Container>
           

            <div className={styles["sub_wrapper"]}>

                <div className={styles["map_wrapper"]}>
                    <Header style={{color:"white"}} as="h3">LAND USE MAP</Header>
                    <Image rounded src="https://www.sdasrinagar.com/wp-content/uploads/2017/03/Land-use-map.jpg"  size="small"/>
                </div>

                <div className={styles["map_wrapper"]}>
                    <Header style={{color:"white"}} as="h3">NORTH SRINAGAR</Header>
                    <Image rounded src="https://www.sdasrinagar.com/wp-content/uploads/2017/03/Land-use-map.jpg"  size="small"/>
                </div>

                <div className={styles["map_wrapper"]}>
                    <Header style={{color:"white"}} as="h3">SOUTH SRINAGAR</Header>
                    <Image rounded src="https://www.sdasrinagar.com/wp-content/uploads/2017/03/Land-use-map.jpg"  size="small"/>
                </div>
            </div>
            </Container>
        </div>
    )
}
