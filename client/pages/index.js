import React from "react"


import 'bootstrap/dist/css/bootstrap.min.css';

import BannerSection from "../components/BannerSection/BannerSection"

import {Card, Container, Divider} from "semantic-ui-react"

import NotificationSection from "../components/NotificationsSection/Main"

import LandUseSection from "../components/LanduseSection/LandUseSection"

import CardSection from "../components/CardSection/CardSection"

import { backend } from "../constants/constants";



export default function Home(props) {
  return (
    <div>

      <BannerSection banners={props.banners}/>
   
      <Divider/>

      <NotificationSection data={props["data"]}/>

      <Divider/>

      <CardSection/>

      <Divider/>

      {/* <GallerySection/> */}

      <Divider/>

      <LandUseSection/>
    </div>
  )
}


export async function getServerSideProps(context){

  let banners = await (await fetch(backend+"banners?_sort=order:ASC")).json()

  let public_notices= await (await fetch(backend+"public-notices?_sort=date:DESC&_limit=6")).json()

  let tenders = await (await fetch(backend+"tenders?_sort=date:DESC&_limit=6")).json()

  let eoi = await (await fetch(backend+"eois?_sort=date:DESC&_limit=6")).json()

  let circular_orders =  await (await fetch(backend+"circular-and-orders?_sort=date:DESC&_limit=6")).json()

  let short_term_quotations =  await (await fetch(backend+"short-term-quotations?_sort=date:DESC&_limit=6")).json()

  return {
    props:{
      data:{
        public_notices,
        tenders,
        eoi,circular_orders,
        short_term_quotations
       
      },
      banners
    }
  }

}