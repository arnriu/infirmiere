import React from 'react'

import '../styles/index.sass'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageColor, children }) => (
  <main className={pageColor}>
    <Header pageColor={pageColor} />
    {children}
    <Footer />
  </main>
)

export default Layout
