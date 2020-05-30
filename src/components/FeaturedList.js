import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Wrapper from './UI/Wrapper'
import Title from './UI/Title'
import FeaturedCard from './UI/FeaturedCard'

const FeaturedList = ({ className }) => {
  const data = useStaticQuery(getProjects)
  const projects = data.allMarkdownRemark.edges

  return (
    <section className={className}>
      <Title title="featured" subtitle="projects" />
      <Wrapper padding="5px 20px 50px 20px">
        {projects.map(
          (
            {
              node: {
                frontmatter: { featured_title: featuredTitle, title, thumbnail, description, demo, code },
              },
            },
            i
          ) => {
            return (
              <FeaturedCard
                key={i}
                featuredTitle={featuredTitle}
                title={title}
                description={description}
                demo={demo}
                code={code}
                thumbnail={thumbnail}
              />
            )
          }
        )}
      </Wrapper>
    </section>
  )
}

FeaturedList.propTypes = {
  className: PropTypes.string,
}

export default FeaturedList

const getProjects = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            featured_title
            description
            demo
            code
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
