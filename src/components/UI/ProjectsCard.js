import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Tag from './Tag'

const ProjectsCard = ({ className, title, tags, demo, code, thumbnail, category }) => {
  return (
    <div className={className}>
      <Image fluid={thumbnail.childImageSharp.fluid} alt="Project Screenshot" />
      <p>{category}</p>
      <p> {title}</p>
      {tags.map(tag => (
        <Tag tag={tag} />
      ))}
      <div className="links">
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
        |
        <a href={code} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  )
}

ProjectsCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.array,
  tags: PropTypes.array,
  description: PropTypes.string,
  demo: PropTypes.string,
  code: PropTypes.string,
}

export default styled(ProjectsCard)`
  min-width: 300px;
  flex: 0 1;
  margin: 20px;
  box-shadow: var(--lightShadow);
  border-radius: 5px;
  text-align: center;
  &:hover {
    box-shadow: var(--darkShadow);
  }
  .gatsby-image-wrapper {
    height: 220px;
    width: auto;
  }
  .icons {
    font-size: 21px;
    vertical-align: middle;
  }
`
