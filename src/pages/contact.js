import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/UI/ContactForm'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default Contact
