import type { AppProps } from 'next/app'
import React from 'react'

import Layout from '../components/common/Layout/Layout'
import '../styles/globals.css'

function Outlet({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Outlet

// Strapiwasabi
// Strapi show image
// Interfaces
// Pass interface to component access typings
// Verschachteln broadcast view list card
