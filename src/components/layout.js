import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
