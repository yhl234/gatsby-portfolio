import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Wrapper from './UI/Wrapper'

const Landing = ({ className }) => {
  return (
    <section className={className}>
      <Wrapper className="col" padding="5px">
        <div className="corner">
          <h1>
            Hi !
            <br /> I am
            <br />  Louis,
            <br />  I develop 
            <br />
            Optimized  <br />
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
  max-width: 1280px;
  background: var(--primaryColor);
  /* background: linear-gradient(135deg, rgba(196, 212, 255, 1) 0%, rgba(255, 153, 153, 1) 100%); */
  h1 {
    margin: 0;
    font-size: 70px;
    color: var(--primaryDark);
  }
  .corner {
    position: absolute;
    bottom: 0;
    padding-bottom: 1rem;
    /* border: 1px black solid; */
  }
`
