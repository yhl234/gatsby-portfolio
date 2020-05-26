import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/Landing'
import FeaturedList from '../components/FeaturedList'

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <FeaturedList />
    </Layout>
  )
}
export default Index
