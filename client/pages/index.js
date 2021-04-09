import React from "react"
import 'semantic-ui-css/semantic.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import BannerSection from "../components/BannerSection/BannerSection"

import {Container} from "semantic-ui-react"

import NotificationSection from "../components/NotificationsSection/NotificationsSection"

import LandUseSection from "../components/LanduseSection/LandUseSection"
export default function Home() {
  return (
    <div>
      <BannerSection/>
   
      <NotificationSection/>
     
      <LandUseSection/>
    </div>
  )
}
