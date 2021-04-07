import React from 'react'
import '../styles/globals.css'

import Header from "../components/Header/Header"

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>

      <Header/>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
