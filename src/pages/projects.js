import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsList from '../components/ProjectsList'

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsList />
    </Layout>
  )
}

export default Projects
