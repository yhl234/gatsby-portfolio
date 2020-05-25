import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsList from '../components/ProjectsList'

const Projects = ({ className }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsList />
    </Layout>
  )
}

Projects.propTypes = {
  className: PropTypes.string,
}

export default Projects
