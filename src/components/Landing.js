import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Wrapper from './UI/Wrapper'

const Landing = ({ className }) => {
  return (
    <section className={className}>
      <Wrapper className="col" padding="20px">
        <div className="corner">
          <h1>
            Hi!
            <br />I am
            <br />
            Louis,
            <br />I develop
            <br />
            Optimized
            <br />
            Web applications
          </h1>
        </div>
      </Wrapper>
    </section>
  )
}

Landing.propTypes = {
  className: PropTypes.string,
}

export default styled(Landing)`
  height: calc(100vh - 65px);
  max-height: 610px;
  background-color: var(--secondaryDark);
  h1 {
    margin: 0;
    @media screen and (min-width: 576px) {
      font-size: 65px;
    }
    color: var(--mainWhite);
  }
  .corner {
    position: absolute;
    bottom: 0;
    padding-bottom: 1rem;
    /* border: 1px black solid; */
  }
`
