import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ProjectsCard from './UI/ProjectsCard'
import Wrapper from './UI/Wrapper'
import Title from './UI/Title'

const ProjectsList = ({ className }) => {
  const data = useStaticQuery(getProjects)
  const projects = data.allMarkdownRemark.edges
  return (
    <section className={className}>
      <Title title="all" subtitle="projects" />

      <Wrapper className="row" padding="5px">
        {projects.map(
          (
            {
              node: {
                frontmatter: { title, category, thumbnail, tags, description, demo, code },
              },
            },
            i
          ) => {
            return (
              <ProjectsCard
                key={i}
                title={title}
                category={category}
                tags={tags}
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

export default styled(ProjectsList)`
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const getProjects = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/projects/" } }) {
      edges {
        node {
          id
          frontmatter {
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            category
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
