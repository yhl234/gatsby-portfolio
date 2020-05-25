import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tag = ({ className, tag }) => {
  return <span className={className}>{tag}</span>
}

Tag.propTypes = {
  className: PropTypes.string,
}

export default styled(Tag)`
  font-size: 9px;
  display: inline-block;
  /* background-color: gray; */
  color: gray;
  margin: 2px;
  padding: 2px;
  border-radius: 5px;
`
