import React from 'react'
import '../styles/globals.css'

import Header from "../components/Header/Header"

import Footer from "../components/Footer/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>

      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </React.Fragment>
  )
}

export default MyApp
