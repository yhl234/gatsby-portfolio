import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import Wrapper from './UI/Wrapper'

const Footer = ({ className }) => (
  <footer className={className}>
    <Wrapper padding="5px">
      <h3>See You Soon</h3>
      <div className="social-icons">
        <a href="/">
          <IconContext.Provider value={{ className: 'react-icons', size: '40px' }}>
            <AiFillLinkedin />
          </IconContext.Provider>
        </a>
        <a href="/">
          <IconContext.Provider value={{ className: 'react-icons', size: '40px' }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>

        <a href="/">
          <IconContext.Provider value={{ className: 'react-icons', size: '40px' }}>
            <AiFillMail />
          </IconContext.Provider>
        </a>
      </div>
      <div className="credit">
        <small>
          © {new Date().getFullYear()}, Louis Lee. All Rights Reserved. Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </small>
      </div>
    </Wrapper>
  </footer>
)

Footer.propTypes = {
  className: PropTypes.string,
}

export default styled(Footer)`
  background-color: var(--secondaryDark);
  min-height: 20vh;
  color: var(--mainWhite);
  h3 {
    margin: 1.25rem 0;
  }
  a {
    color: var(--mainWhite);
  }
  a:hover,
  a:focus {
    color: #999;
  }
  .react-icons {
    margin: 5px;
  }
  .credit {
    border-top: 1px solid white;
    padding-top: 0.5rem;
  }
`
