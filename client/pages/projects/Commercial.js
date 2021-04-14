import React from 'react'

import {backend} from "../../constants/constants"

import {Header,Container} from "semantic-ui-react"

import Markdown from "../../components/Markdown/Markdown"

export default function Commercial(props) {
    return (
        <div style={{padding:"2rem"}}>
          
            <Container>
            <Header as="h3">Commercial Projects</Header>
            <Markdown markdown={props["data"]["desc"]} />
            </Container>
        </div>
    )
}


export async function getServerSideProps(context){
    const response = await fetch(backend+"projects/607078b75a5e8927cedabd34")
    let data = await response.json()
  

    return{
        props:{
            data:data
        }
    }
}