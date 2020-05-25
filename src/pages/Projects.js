import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'

const Projects = ({ className }) => {
  const data = useStaticQuery(getProjects)
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Projects" />
      <div className={className}>
        <div>hello from Projects</div>
        {projects.map(
          ({
            node: {
              frontmatter: { title, thumbnail, tags, description, demo, code },
            },
          }) => {
            return (
              <div>
                <p>{title}</p>
                <p>{tags.join(',')}</p>
                <p>{description}</p>
                <p>{demo}</p>
                <p>{code}</p>
                <Image fluid={thumbnail.childImageSharp.fluid} alt="" />
              </div>
            )
          }
        )}
      </div>
    </Layout>
  )
}

Projects.propTypes = {
  className: PropTypes.string,
}

export default Projects

const getProjects = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/projects/" } }) {
      edges {
        node {
          frontmatter {
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            tags
            description
            demo
            code
          }
        }
      }
    }
  }
`
