import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <div>hello from contact</div>
      </div>
    </Layout>
  )
}

Contact.propTypes = {}

export default Contact