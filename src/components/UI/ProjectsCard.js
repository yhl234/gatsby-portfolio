import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Tag from './Tag'

const ProjectsCard = ({ className, title, tags, demo, code, thumbnail, category }) => {
  return (
    <div className={className}>
      <Image fluid={thumbnail.childImageSharp.fluid} alt="Project Screenshot" />
      <p className="category">{category}</p>
      <p className="title"> {title}</p>
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
  category: PropTypes.string,
  demo: PropTypes.string,
  code: PropTypes.string,
}

export default styled(ProjectsCard)`
  min-width: 300px;
  flex: 0 1;
  margin: 20px;
  box-shadow: var(--lightShadow);
  border: 0.5px solid gray;
  border-radius: 10px;
  text-align: center;
  &:hover {
    box-shadow: var(--darkShadow);
  }
  .gatsby-image-wrapper {
    height: 220px;
    width: auto;
    border-radius: 10px;
  }
  .category {
    font-size: 9px;
    text-transform: uppercase;
    display: inline-block;
    color: var(--secondaryDark);
    margin: 2px;
    padding: 2px;
  }
  .title {
    color: var(--secondaryDark);
  }
`
