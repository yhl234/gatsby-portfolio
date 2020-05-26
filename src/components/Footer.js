import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'
import Wrapper from './UI/Wrapper'

const Footer = ({ className }) => (
  <footer className={className}>
    <Wrapper padding="20px">
      <h3>See You Soon</h3>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/louis-lee-a85159129" title="Louis Lee" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ className: 'react-icons', size: '40px' }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a href="https://github.com/yhl234" title="yhl234" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ className: 'react-icons', size: '40px' }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>

        <a href="mailto:leejepn@gmail.com" title="leejepn@gmail.com" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ className: 'react-icons', size: '40px' }}>
            <FaEnvelopeSquare />
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
