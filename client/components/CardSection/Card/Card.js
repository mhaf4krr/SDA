import React from 'react'
import { Icon,Header } from 'semantic-ui-react'

import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles["main_wrapper"]}>
           
            <Icon name={props.icon} size="big"/>
            
            <Header className={styles["header"]} style={{marginTop:0,marginLeft:"0.5rem",color:"inherit"}} as="h4">{props.title}</Header>
        </div>
    )
}
