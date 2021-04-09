import React from "react"


import 'bootstrap/dist/css/bootstrap.min.css';

import BannerSection from "../components/BannerSection/BannerSection"

import {Card, Container, Divider} from "semantic-ui-react"

import NotificationSection from "../components/NotificationsSection/Main"

import LandUseSection from "../components/LanduseSection/LandUseSection"

import CardSection from "../components/CardSection/CardSection"

import GallerySection from "../components/GallerySection/GallerySection"

export default function Home() {
  return (
    <div>
      <BannerSection/>

      <Divider/>

      <NotificationSection/>

      <Divider/>

      <CardSection/>

      <Divider/>

      {/* <GallerySection/> */}

      <Divider/>

      <LandUseSection/>
    </div>
  )
}
