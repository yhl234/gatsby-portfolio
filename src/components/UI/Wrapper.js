import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default styled(Wrapper)`
  position: relative;
  max-width: 1199.98px;
  height: 100%;
  margin: 0 auto;
  padding: ${props => props.padding || 0};
`
