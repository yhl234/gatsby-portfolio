import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = ({ title, subtitle, className }) => (
  <div className={className}>
    <h2>
      <span className="title">{title}</span> <span>{subtitle}</span>
    </h2>
  </div>
)
Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h2 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--secondaryDark);
  }
  .title {
    color: var(--secondaryDark);
    background-color: var(--secondaryColor);
  }
  span {
    /* display: block; */
    font-size: 80%;
  }
  @media (min-width: 576px) {
    span {
      font-size: 100%;
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
