import React from 'react'

import {Container,Header} from "semantic-ui-react"

import styles from "../../styles/Reach.module.css"

export default function Reach() {
    return (
        <div className={styles["main_wrapper"]}>
            <Header as="h3">How To Reach</Header>
            <Container>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=srinagar%20development%20authority&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div>
            </Container>

        </div>
    )
}
