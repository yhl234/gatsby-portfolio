import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'

const FeaturedCard = ({ className, featuredTitle, title, thumbnail, description, demo, code }) => {
  return (
    <article className={className}>
      <Image fluid={thumbnail.childImageSharp.fluid} alt="Project Screenshot" />
      <div className="info">
        <h2>{featuredTitle} </h2>
        <h4> {title}</h4>
        <p>{description}</p>
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
    </article>
  )
}

FeaturedCard.propTypes = {
  className: PropTypes.string,
  featuredTitle: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.array,
  description: PropTypes.string,
  demo: PropTypes.string,
  code: PropTypes.string,
}

export default styled(FeaturedCard)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
  justify-content: center;
  margin: 10px 0;
  border: 0.5px solid gray;
  border-radius: 5px;
  box-shadow: var(--lightShadow);
  &:hover {
    box-shadow: var(--darkShadow);
  }
  h2 {
    letter-spacing: 7px;
    color: var(--secondaryDark);
  }
  h4 {
    color: var(--primaryDark);
  }
  .gatsby-image-wrapper {
    min-width: 300px;
    flex-grow: 1;
    border-radius: 5px;
  }
  .info {
    padding: 1rem 3rem 3rem 3rem;
    @media screen and (min-width: 576px) {
      padding: 3rem;
    }
    flex: 1 0;
  }
`
