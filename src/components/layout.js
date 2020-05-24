import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
    }}
  >
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
